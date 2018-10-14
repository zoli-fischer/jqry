import Obj from './Obj';

export default class Event {
    static on(element, event, fn) {
        element.addEventListener(event, fn, false);
    }

    static off(element, event, fn) {
        if (typeof event === 'undefined' && typeof fn === 'undefined') {
            const newElement = element.cloneNode(false);
            while (element.hasChildNodes()) {
                newElement.appendChild(element.firstChild);
            }
            element.parentNode.replaceChild(newElement, element);
        } else {
            element.removeEventListener(event, fn, false);
        }
    }

    static customEvent(type, params = {}) {
        params = Obj.assing({ bubbles: false, cancelable: false, detail: undefined }, params);

        if (typeof window.CustomEvent === 'function') {
            return new window.CustomEvent(type, params);
        }

        const customEvent = (type_, params_ = {}) => {
            const event = document.createEvent('CustomEvent');
            event.initCustomEvent(type, params_.bubbles, params_.cancelable, params_.detail);
            return event;
        };
        customEvent.prototype = window.Event.prototype;
        return customEvent(type, params);
    }

    static trigger(element, event, data) {
        const eventObject = new Event.customEvent(event, {
            bubbles: false,
            cancelable: true,
            detail: data || {},
        });
        element.dispatchEvent(eventObject);
    }

    static click(element) {
        element.click();
    }
}

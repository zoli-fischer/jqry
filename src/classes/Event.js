import Obj from './Obj';

export default class Event {
    static on(jObj, event, fn) {
        Obj.values(jObj.elements).forEach(element => {
            element.addEventListener(event, fn, false);
        });
        return jObj;
    }

    static off(jObj, event, fn) {
        if (typeof event === 'undefined' && typeof fn === 'undefined') {
            Obj.values(jObj.elements).forEach(element => {
                const newElement = element.cloneNode(false);
                while (element.hasChildNodes()) {
                    newElement.appendChild(element.firstChild);
                }
                element.parentNode.replaceChild(newElement, element);
            });
        } else {
            Obj.values(jObj.elements).forEach(element => {
                element.removeEventListener(event, fn, false);
            });
        }
        return jObj;
    }

    static CustomEvent(type, params = {}) {
        params = Obj.assing({ bubbles: false, cancelable: false, detail: undefined }, params);

        if (typeof window.CustomEvent === 'function') {
            return new window.CustomEvent(type, params);
        }

        const CustomEvent = (type_, params_ = {}) => {
            const event = document.createEvent('CustomEvent');
            event.initCustomEvent(type, params_.bubbles, params_.cancelable, params_.detail);
            return event;
        };
        CustomEvent.prototype = window.Event.prototype;
        return CustomEvent(type, params);
    }

    static trigger(jObj, event, data) {
        const eventObject = new Event.CustomEvent(event, {
            bubbles: false,
            cancelable: true,
            detail: data || {},
        });
        Obj.values(jObj.elements).forEach(element => {
            element.dispatchEvent(eventObject);
        });
        return jObj;
    }

    static click(jObj) {
        Obj.values(jObj.elements).forEach(element => {
            element.click();
        });
        return jObj;
    }
}

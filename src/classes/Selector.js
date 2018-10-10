import jQryObject from './jQryObject';
import Obj from './Obj';

export default class Selector {
    static select(selector) {
        let elements = [];
        if (typeof selector === 'object') {
            if (selector instanceof jQryObject) {
                selector.forEach(element => {
                    elements.push(element);
                });
            } else {
                elements = Array.isArray(selector) ? selector : [selector];
            }
        } else if (typeof selector === 'string') {
            selector = selector.trim();
            if (selector.indexOf('<') === 0) {
                if (selector.indexOf('<!doctype') === 0 || selector.indexOf('<html') === 0 || selector.indexOf('<body') === 0 || selector.indexOf('<head') === 0) {
                    const iframe = document.createElement('iframe');
                    iframe.sandbox = 'allow-scripts allow-same-origin';
                    iframe.src = 'about:blank';
                    document.body.appendChild(iframe);
                    iframe.contentDocument.write(selector);
                    // eslint-disable-next-line no-nested-ternary
                    const ielement = iframe.contentWindow.document.querySelector(selector.indexOf('<body') === 0 ? 'body' : (selector.indexOf('<head') === 0 ? 'head' : 'html'));
                    elements = [ielement.cloneNode(true)];
                    iframe.parentNode.removeChild(iframe);
                } else {
                    const template = document.createElement('template');
                    template.innerHTML = selector;
                    elements = [template.content ? (template.content.firstElementChild || template.content.firstChild) : (template.firstElementChild || template.firstChild)];
                }
            } else {
                Obj.values(document.querySelectorAll(selector)).forEach(queryElement => {
                    elements.push(queryElement);
                });
            }
        }
        return elements;
    }

    static find(jObj, selector) {
        const elements = [];
        jObj.forEach(element => {
            Obj.values(element.querySelectorAll(selector)).forEach(queryElement => {
                elements.push(queryElement);
            });
        });
        return new jQryObject(elements);
    }
}

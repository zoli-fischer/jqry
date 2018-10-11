import jQryObject from './jQryObject';
import Obj from './Obj';
import DOM from './DOM';

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
            if (/^</.test(selector)) {
                if (/^<(!doctype|html|body|head)/.test(selector)) {
                    const iframe = document.createElement('iframe');
                    iframe.sandbox = 'allow-scripts allow-same-origin';
                    iframe.src = 'about:blank';
                    document.body.appendChild(iframe);
                    iframe.contentDocument.write(selector);
                    // eslint-disable-next-line no-nested-ternary
                    const ielement = iframe.contentWindow.document.querySelector(/^<body/.test(selector) ? 'body' : (/^<head/.test(selector) ? 'head' : 'html'));
                    elements = [ielement.cloneNode(true)];
                    iframe.parentNode.removeChild(iframe);
                } else {
                    const template = document.createElement('template');
                    template.innerHTML = selector;
                    let element = (template.content ? (template.content.firstElementChild || template.content.firstChild) : (template.firstElementChild || template.firstChild));
                    while (element) {
                        elements.push(element);
                        (template.content || template).removeChild(element);
                        element = (template.content ? (template.content.firstElementChild || template.content.firstChild) : (template.firstElementChild || template.firstChild));
                    }
                }
            } else {
                Obj.values(document.querySelectorAll(selector)).forEach(queryElement => {
                    elements.push(queryElement);
                });
            }
        }

        const validElements = [];
        Obj.values(elements).forEach(element => {
            if (!DOM.isTextNode(element) && (DOM.isNode(element) || DOM.isWindow(element) || DOM.isDocument(element))) {
                validElements.push(element);
            }
            if (!DOM.isConnected(element)) {
                document.body.appendChild(element);
                element.parentNode.removeChild(element);
            }
        });

        return validElements;
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

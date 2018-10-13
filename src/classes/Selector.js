import jQryObject from './jQryObject';
import Obj from './Obj';
import DOM from './DOM';
import Style from './Style';

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
                this._querySelectorAll(document, selector).forEach(queryElement => {
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
            this._querySelectorAll(element, selector).forEach(queryElement => {
                elements.push(queryElement);
            });
        });
        return new jQryObject(elements);
    }

    static _querySelectorAll(element, selector) {
        selector = selector.trim();
        let scopeClass = false;
        // only alter node elements
        if (DOM.isNode(element)) {
            // use :scope for query selector if supported else create scope class
            if (Selector._isScopeSupportedInQuerySelector()) {
                selector = ':scope ' + selector;
            } else {
                scopeClass = 'jqry_qs_scope_' + Math.random().toString(36).substring(2, 16);
                selector = '.' + scopeClass + ' ' + selector;
            }
        }
        const elements = [];
        // add scope class if needed
        if (scopeClass) {
            Style._addClass(element, scopeClass);
        }
        Obj.values(element.querySelectorAll(selector)).forEach(queryElement => {
            elements.push(queryElement);
        });
        // remove scope class if needed
        if (scopeClass) {
            Style._removeClass(element, scopeClass);
        }
        return elements;
    }

    static _isScopeSupportedInQuerySelector() {
        if (typeof Selector.__isScopeSupportedInQuerySelector === 'undefined') {
            try {
                Selector.__isScopeSupportedInQuerySelector = typeof document.querySelectorAll(':scope') !== 'undefined';
            } catch (error) {
                Selector.__isScopeSupportedInQuerySelector = false;
            }
        }
        return Selector.__isScopeSupportedInQuerySelector;
    }
}

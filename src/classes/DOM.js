import jQryObject from './jQryObject';

export default class DOM {
    static isWindow(element) {
        return element && element.constructor === window.constructor;
    }

    static isDocument(element) {
        return element && element.constructor === document.constructor;
    }

    static isElement(element) {
        return element && element.nodeType;
    }

    static appendTo(jObj, selector) {
        let parents = false;
        if (selector instanceof jQryObject) {
            parents = selector;
        } else {
            parents = new jQryObject(selector);
        }
        parents.forEach(parentElement => {
            jObj.elements.forEach(element => {
                try {
                    parentElement.appendChild(element);
                } catch (e) {
                    console.error(e);
                }
            });
        });
        return jObj;
    }

    static isConnected(element) {
        if (element && typeof element.isConnected !== 'undefined') {
            return element.isConnected;
        }
        if (element && element instanceof Element && !document.body.contains(element)) {
            return false;
        }
        return true;
    }

    static detach(jObj) {
        jObj.forEach(element => {
            element.parentNode.removeChild(element);
        });
        return jObj;
    }

    static parent(jObj) {
        const elements = [];
        jObj.forEach(element => {
            elements.push(element.parentNode);
        });
        return new jQryObject(elements);
    }
}

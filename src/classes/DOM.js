export default class DOM {
    static isWindow(element) {
        return element && element.constructor === window.constructor;
    }

    static isDocument(element) {
        return element && element.constructor === document.constructor;
    }

    static isNode(element) {
        return element && element.nodeType && !DOM.isWindow(element) && !DOM.isDocument(element);
    }

    static isTextNode(element) {
        return element && element.nodeType === 3;
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

    static detach(element) {
        try {
            element.parentNode.removeChild(element);
        } catch (error) {
            console.error(error);
        }
    }

    static parent(element) {
        try {
            return element.parentNode;
        } catch (error) {
            console.error(error);
        }
        return undefined;
    }
}

// import DOM from './DOM';

export default class Style {
    static css(jObj, styles, value) {
        const css = {};
        if (typeof styles === 'string') {
            if (typeof value !== 'undefined') {
                css[styles] = value;
            } else {
                const element = jObj.length > 0 ? jObj[0] : false;
                let styleValue;
                const { style } = element;
                const computedStyle = window.getComputedStyle(element);
                if (element && (style || computedStyle)) {
                    styleValue = style[styles] || computedStyle[styles];
                }
                return styleValue;
            }
        } else if (typeof styles === 'object') {
            Object.keys(styles).forEach(key => {
                css[key] = styles[key];
            });
        }

        jObj.forEach(element => {
            Object.keys(css).forEach(key => {
                // Don't set styles on text and comment nodes
                if (element.nodeType === 3 || element.nodeType === 8 || !element.style) {
                    return;
                }
                try {
                    element.style[key] = css[key];
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log(e);
                }
            });
        });

        return jObj;
    }

    static _addClass(element, ...args) {
        if (typeof element.classList !== 'undefined') {
            args.forEach(className => {
                if (className.trim() !== '') {
                    element.classList.add(className);
                }
            });
        }
        return element;
    }

    static _removeClass(element, ...args) {
        if (typeof element.classList !== 'undefined') {
            args.forEach(className => {
                if (className.trim() !== '') {
                    element.classList.add(className);
                }
            });
        }
        return element;
    }
}

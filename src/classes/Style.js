import DOM from './DOM';

export default class Style {
    static css(jObj, styles, value) {
        const css = {};
        if (typeof styles === 'string') {
            if (typeof value !== 'undefined') {
                css[styles] = value;
            } else {
                const element = jObj.length > 0 ? jObj[0] : false;
                let styleValue;
                try {
                    const { style } = element;
                    const isConnected = DOM.isConnected(element);
                    if (!isConnected) {
                        document.body.appendChild(element);
                    }
                    const computedStyle = window.getComputedStyle(element);
                    if (element && (style || computedStyle)) {
                        styleValue = style[styles] || computedStyle[styles];
                    }
                    if (!isConnected) {
                        element.parentNode.removeChild(element);
                    }
                } catch (e) {
                    console.error(e);
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
}

export default class Style {
    // eslint-disable-next-line consistent-return
    static css(element, styles, value) {
        const css = {};
        if (typeof styles === 'string') {
            if (typeof value !== 'undefined') {
                css[styles] = value.trim();
            } else {
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
    }

    static addClass(element, classes) {
        if (typeof element.classList !== 'undefined') {
            classes.split(' ').forEach(className => {
                if (className.trim() !== '') {
                    element.classList.add(className);
                }
            });
        }
        return element;
    }

    static removeClass(element, classes) {
        if (typeof element.classList !== 'undefined') {
            classes.split(' ').forEach(className => {
                if (className.trim() !== '') {
                    element.classList.remove(className);
                }
            });
        }
        return element;
    }
}

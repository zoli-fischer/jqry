export default class Prop {
    // eslint-disable-next-line consistent-return
    static prop(element, props, value) {
        const _props = {};
        if (typeof props === 'string') {
            if (props === 'class') {
                props = 'className';
            }
            if (typeof value !== 'undefined') {
                _props[props] = value;
            } else {
                return element[props];
            }
        } else if (typeof props === 'object') {
            Object.keys(props).forEach(key => {
                let _key = key;
                if (_key === 'class') {
                    _key = 'className';
                }
                _props[key] = props[key];
            });
        }

        Object.keys(_props).forEach(key => {
            // Don't set props on text and comment nodes
            if (element.nodeType === 3 || element.nodeType === 8) {
                return;
            }
            try {
                element[key] = _props[key];
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
            }
        });
    }
}

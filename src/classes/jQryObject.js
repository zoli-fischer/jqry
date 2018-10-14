import Selector from './Selector';
import Style from './Style';
import Prop from './Prop';
import DOM from './DOM';
import Event from './Event';
import Obj from './Obj';

export default class jQryObject {
    constructor(selector) {
        const elements = Selector.select(selector);
        this.elements = elements;
        let i = 0;
        Obj.values(elements).forEach(element => {
            this[i++] = element;
        });
        this.length = this.elements.length;
    }

    forEach(callback) {
        this.elements.forEach(callback);
        return this;
    }

    each(callback) {
        this.forEach((element, index) => {
            callback(jQryObject(element), index);
        });
        return this;
    }

    /** Selector */

    find(selector) {
        let elements = [];
        this.forEach(element => {
            elements = [...elements, ...Selector.find(element, selector)];
        });
        return new jQryObject(elements);
    }

    /** Style */
    css(styles, value) {
        if (typeof styles === 'string') {
            if (typeof value === 'undefined') {
                return Style.css(this[0], styles, value);
            }
        }
        this.forEach(element => {
            Style.css(element, styles, value);
        });
        return this;
    }

    addClass(classes) {
        this.forEach(element => {
            Style.addClass(element, classes);
        });
        return this;
    }

    removeClass(classes) {
        this.forEach(element => {
            Style.removeClass(element, classes);
        });
        return this;
    }

    /** Prop */

    prop(props, value) {
        // return Prop.prop(this, props, value);
        if (typeof props === 'string') {
            if (typeof value === 'undefined') {
                return Prop.prop(this[0], props, value);
            }
        }
        this.forEach(element => {
            Prop.prop(element, props, value);
        });
        return this;
    }

    /** DOM */

    appendTo(selector) {
        let parents = false;
        if (selector instanceof jQryObject) {
            parents = selector;
        } else {
            parents = new jQryObject(selector);
        }
        parents.forEach(parentElement => {
            this.elements.forEach(element => {
                try {
                    parentElement.appendChild(element);
                } catch (e) {
                    console.error(e);
                }
            });
        });
        return this;
    }

    detach() {
        this.forEach(element => {
            DOM.detach(element);
        });
        return this;
    }

    parent() {
        const elements = [];
        this.forEach(element => {
            elements.push(DOM.parent(element));
        });
        return new jQryObject(elements);
    }

    /** Event */

    on(event, fn) {
        this.forEach(element => {
            Event.on(element, event, fn);
        });
        return this;
    }

    off(event, fn) {
        this.forEach(element => {
            Event.off(element, event, fn);
        });
        return this;
    }

    trigger(event, data) {
        this.forEach(element => {
            Event.trigger(element, event, data);
        });
        return this;
    }

    click() {
        this.forEach(element => {
            Event.click(element);
        });
        return this;
    }
}

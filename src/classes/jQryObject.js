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
        return Selector.find(this, selector);
    }

    /** Style */
    css(styles, value) {
        return Style.css(this, styles, value);
    }

    /** Prop */

    prop(propName, value) {
        return Prop.prop(this, propName, value);
    }

    /** DOM */

    appendTo(selector) {
        return DOM.appendTo(this, selector);
    }

    detach() {
        return DOM.detach(this);
    }

    parent() {
        return DOM.parent(this);
    }

    /** Event */

    on(event, fn) {
        return Event.on(this, event, fn);
    }

    off(event, fn) {
        return Event.off(this, event, fn);
    }

    trigger(event, data) {
        return Event.trigger(this, event, data);
    }

    click() {
        return Event.click(this);
    }
}

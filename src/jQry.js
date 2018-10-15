import jQryObject from './classes/jQryObject';
import Obj from './classes/Obj';
import Event from './classes/Event';

function jQry(selector) {
    return new jQryObject(selector);
}

// Object

jQry.extend = Obj.assign;
jQry.assign = Obj.assign;
jQry.values = Obj.values;
jQry.keys = Object.keys;
jQry.indexOf = Obj.indexOf;

// Event

jQry.CustomEvent = (type, params) => new Event.CustomEvent(type, params);

// Global

jQry.global = (alias = '$') => {
    if (typeof window[alias] === 'undefined' && window[alias] !== jQry) {
        window[alias] = jQry;
    }
};

export default jQry;

import Obj from '../classes/Obj';

if (typeof Object.assign === 'undefined') {
    Object.assign = Obj.assign;
}

if (typeof Object.values === 'undefined') {
    Object.values = Obj.values;
}

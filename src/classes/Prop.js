export default class Prop {
    static prop(jObj, propName, value) {
        const element = jObj[0];
        if (element) {
            if (typeof value !== 'undefined') {
                element[propName] = value;
            } else {
                return element[propName];
            }
        }
        return jObj;
    }
}

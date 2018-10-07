export default class Obj {
    static assing(...args) {
        const result = args.reduce((accumulator, currentValue) => {
            if (typeof currentValue === 'object') {
                Object.keys(currentValue).forEach(k => {
                    accumulator[k] = currentValue[k];
                });
            }
            return accumulator;
        }, {});
        return result;
    }

    static extend(...args) {
        return Obj.assign.apply(Obj, ...args);
    }

    static values(obj) {
        return Object.keys(obj).map(item => obj[item]);
    }

    static indexOf(mix, searchvalue, start = null) {
        let overStart = start === null;
        let found = -1;
        Object.keys(mix).forEach(i => {
            if (overStart && mix[i] === searchvalue) {
                found = mix[i];
                return false;
            }
            if (start === i) {
                overStart = true;
            }
            return true;
        });
        return found;
    }
}

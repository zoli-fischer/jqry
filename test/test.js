import expect from 'expect';
import { JSDOM } from 'jsdom';
import jQry from '../src/jQry';
import Tests from './tests';

const dom = new JSDOM(`<!DOCTYPE html>
<head>
</head>
<body>
</body>
</html>`);

global.jQry = jQry;
global.window = dom.window;
global.document = dom.window.document;
global.Element = dom.window.Element;
global.Window = dom.window;
global.Document = dom.window.document;

describe('jQry', () => {
    it('is truthy', () => {
        expect(jQry).toBeTruthy();
    });
});

function _(desc, cmd, targetValue) {
    describe(cmd.toString(), () => {
        it(desc, () => {
            let r;
            expect(r = cmd(jQry)).toEqual(typeof targetValue === 'function' ? targetValue(r) : targetValue);
        });
    });
}

Tests.forEach(test => {
    _(test.desc, test.fn, test.value);
});

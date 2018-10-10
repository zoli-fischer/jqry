import expect from 'expect';
import { JSDOM } from 'jsdom';
import jQry from '.';

const dom = new JSDOM(`<!DOCTYPE html>
<head>
</head>
<body>
</body>
</html>`);
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

describe('jQry(\'<div></div>\')', () => {
    it('create element', () => {
        expect(jQry('<div></div>')).toHaveLength(1);
    });
});

describe('jQry(\'<!doctype html><html><head></head><body><p>text</p></body></html>\')[0].tagName', () => {
    it('create HTML element', () => {
        expect(jQry('<!doctype html><html><head></head><body><p>text</p></body></html>')[0].tagName).toEqual('HTML');
    });
});

describe('jQry(\'<html></html>\')[0].tagName', () => {
    it('create empty HTML element', () => {
        expect(jQry('<html></html>')[0].tagName).toEqual('HTML');
    });
});

describe('jQry(\'<body><div></div></body>\')[0].tagName', () => {
    it('create BODY element', () => {
        expect(jQry('<body><div></div></body>')[0].tagName).toEqual('BODY');
    });
});

describe('jQry(\'<head><meta charset="UTF-8"></head>\')[0].tagName', () => {
    it('create HEAD element', () => {
        expect(jQry('<head><meta charset="UTF-8"></head>')[0].tagName).toEqual('HEAD');
    });
});

describe('jQry(\'<p><i>This is</i> find <i>test</i>\').find(\'i\')', () => {
    it('select query', () => {
        expect(jQry('<p><i>This is</i> find <i>test</i>').find('i')).toHaveLength(2);
    });
});

describe('jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').parent()', () => {
    it('element appendTo & getting parent', () => {
        expect(jQry('<div style="display: none;"></div>').appendTo('body').parent()).toHaveLength(1);
    });
});

describe('jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').detach().parent()', () => {
    it('element detach', () => {
        expect(jQry('<div style="display: none;"></div>').appendTo('body').detach().parent()).toHaveLength(0);
    });
});

describe('jQry(\'<div></div>\').css(\'display\')', () => {
    it('get computed style value', () => {
        expect(jQry('<div></div>').css('display')).toEqual('block');
    });
});

describe('jQry(\'<div style="background: #ff0000;"></div>\').css(\'background\')', () => {
    it('get element style value', () => {
        expect(jQry('<div style="background: #ff0000;"></div>').css('background')).toBeDefined();
    });
});

describe('jQry(\'<input disabled />\').prop(\'disabled\')', () => {
    it('get element property', () => {
        expect(jQry('<input disabled />').prop('disabled')).toEqual(true);
    });
});

describe('jQry(\'<div />\').on(\'custom-event\', event => { console.log(event); }).trigger(\'custom-event\')', () => {
    it('custom event', () => {
        jQry('<div />')
        .on('custom-event', event => {
                expect(event.type).toEqual('custom-event');
        })
        .trigger('custom-event');
    });
});

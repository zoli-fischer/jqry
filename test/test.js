import expect from 'expect';
import { JSDOM } from 'jsdom';
import jQry from '../src/jQry';

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
    describe(cmd, () => {
        it(desc, () => {
            expect(eval(cmd)).toEqual(targetValue);
        });
    });
}

_('create element', 'jQry(\'<div></div>\').length', 1);
_('create comment', 'jQry(\'<!--This is a comment-->\')[0].nodeType', 8);
_('create multiple elements', 'jQry(\'<div></div><p><b> </b></p>\').length', 2);
_('create multiple elements and search for child elements', 'jQry(\'<div><b> </b></div><p><b> </b></p> text <b />\').find(\'b\').length', 2);
_('create HTML element', 'jQry(\'<!doctype html><html><head></head><body><p>1</p></body></html>\')[0].tagName', 'HTML');
_('create empty HTML element', 'jQry(\'<html></html>\')[0].tagName', 'HTML');
_('create BODY element', 'jQry(\'<body><div></div></body>\')[0].tagName', 'BODY');
_('create HEAD element', 'jQry(\'<head><meta charset="UTF-8" /></head>\')[0].tagName', 'HEAD');
_('select query - tag name', 'jQry(\'<p><i>This is</i> find <i>test</i>\').find(\'i\').length', 2);
_('select query - css', 'jQry(\'<div><b> </b><b> </b></div><div><b>1</b></div>\').find(\'> b:first-child\').length', 2);
_('element appendTo & getting parent', 'jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').parent().length', 1);
_('element detach', 'jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').detach().parent().length', 0);
_('get element property', 'jQry(\'<input disabled />\').prop(\'disabled\')', 'true');
_('set element property', 'jQry(\'<iframe />\').prop(\'allowfullscreen\', true).prop(\'allowfullscreen\')', 'true');
_('set element property object', 'jQry(\'<input />\').prop({type: \'text\'}).prop(\'type\')', 'text');
_('get computed style value', 'jQry(\'<div></div>\').css(\'display\')', (result) => typeof result === 'string');
_('set element style object', 'jQry(\'<p></p>\').css({border: \'1px solid #ff0000\'}).css(\'border\')', (result) => typeof result === 'string');
_('get element style value', 'jQry(\'<div style="background: #ff0000;"></div>\').css(\'background\')', 'rgb(255, 0, 0)');
_('add class to element', 'jQry(\'<div></div>\').addClass(\'text-holder\').prop(\'class\')', 'text-holder');
_('remove class from element', 'jQry(\'<div class="text-holder big"></div>\').removeClass(\'big\').prop(\'class\')', 'text-holder');


/*
describe('jQry(\'<div />\').on(\'custom-event\', event => { console.log(event); }).trigger(\'custom-event\')', () => {
    it('custom event', () => {
        jQry('<div />')
        .on('custom-event', event => {
                expect(event.type).toEqual('custom-event');
        })
        .trigger('custom-event');
    });
});
*/

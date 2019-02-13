const tests = [];

const test = (desc, fn, value) => {
    tests.push({ desc, fn, value });
};

test('create element', $ => $('<div></div>').length, 1);
test('create comment', $ => $('<!--This is a comment-->')[0].nodeType, 8);
test('create multiple elements', $ => $('<div></div><p><b></b></p>').length, 2);
test('create multiple elements and search for child elements', $ => $('<div><b> </b></div><p><b> </b></p> text <b />').find('b').length, 2);
test('create HTML element', $ => $('<!doctype html><html><head></head><body><p>1</p></body></html>')[0].tagName, 'HTML');
test('create empty HTML element', $ => $('<html></html>')[0].tagName, 'HTML');
test('create BODY element', $ => $('<body><div></div></body>')[0].tagName, 'BODY');
test('create HEAD element', $ => $('<head><meta charset="UTF-8" /></head>')[0].tagName, 'HEAD');
test('select query by tag name', $ => $('<p><i>This is</i> find <i>test</i></p>').find('i').length, 2);
test('select query - css', $ => $('<div><b> </b><b> </b></div><div><b>1</b></div>').find('> b:first-child').length, 2);
test('.eq(index)', $ => $('<div></div><span></span>').eq(1)[0].tagName, 'SPAN');
test('add element to set - .add(selector)', $ => $('<div></div>').add('<p></p>')[1].tagName, 'P');
test('.addBack()', $ => $('<div><p></p><p></p></div>').find('p').addBack().length, 3);
test('.addBack(selector)', $ => $('<div><span /><p><span /></p><p><span /></p></div>').find('p').addBack('> span').length, 3);
test('element appendTo & getting parent', $ => $('<div style="display: none;"></div>').appendTo('body').parent().length, 1);
test('element detach', $ => $('<div style="display: none;"></div>').appendTo('body').detach().parent().length, 0);
test('get element property', $ => $('<input disabled />').prop('disabled'), true);
test('set element property', $ => $('<iframe />').prop('allowfullscreen', true).prop('allowfullscreen'), true);
test('set element property object', $ => $('<input />').prop({ type: 'text' }).prop('type'), 'text');
test('get computed style value', $ => $('<div></div>').css('display'), (result) => typeof result === 'string');
test('set element style object', $ => $('<p></p>').css({ border: '1px solid #ff0000' }).css('border'), (result) => typeof result === 'string');
test('get element style value', $ => $('<div style="background: #ff0000;"></div>').css('background'), 'rgb(255, 0, 0)');
test('add class to element .addClass(className)', $ => $('<div></div>').addClass('text-holder').prop('class'), 'text-holder');
test('add class to element .addClass(function)', $ => $('<div></div><div class="test"></div>').addClass((index, className) => 'class' + index + ' ' + className + '-current').eq(1).prop('class'), 'test class1 test-current');
test('remove class from element', $ => $('<div class="text-holder big"></div>').removeClass('big').prop('class'), 'text-holder');
// TODO: work on events - this._('custom event', 'jQry('<div />').on('custom-event', event => { console.log(event); }).trigger('custom-event')');

export default tests;

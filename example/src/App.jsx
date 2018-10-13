import React from 'react';
import './App.less';
import AutoState from '@zoli-fischer/auto-state';
import $ from 'jquery';
import jQry from 'jqry';

window.jQry = jQry;
window.$ = $;

class App extends AutoState {
    constructor(props) {
        super(props);
        this.state = {
            tests: [],
        };
    }

    componentDidMount() {
        this._('create element', 'jQry(\'<div></div>\').length', 1);
        this._('create comment', 'jQry(\'<!--This is a comment-->\')[0].nodeType', 8);
        this._('create multiple elements', 'jQry(\'<div></div><p><b> </b></p>\').length', 2);
        this._('create multiple elements and search for child elements', 'jQry(\'<div><b> </b></div><p><b> </b></p> text <b />\').find(\'b\').length', 2);
        this._('create HTML element', 'jQry(\'<!doctype html><html><head></head><body><p>1</p></body></html>\')[0].tagName', 'HTML');
        this._('create empty HTML element', 'jQry(\'<html></html>\')[0].tagName', 'HTML');
        this._('create BODY element', 'jQry(\'<body><div></div></body>\')[0].tagName', 'BODY');
        this._('create HEAD element', 'jQry(\'<head><meta charset="UTF-8" /></head>\')[0].tagName', 'HEAD');
        this._('select query', 'jQry(\'<p><i>This is</i> find <i>test</i>\').find(\'i\').length', 2);
        this._('element appendTo & getting parent', 'jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').parent().length', 1);
        this._('element detach', 'jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').detach().parent().length', 0);
        this._('get computed style value', 'jQry(\'<div></div>\').css(\'display\')', (result) => typeof result === 'string' );
        this._('get element style value', 'jQry(\'<div style="background: #ff0000;"></div>\').css(\'background\')', 'rgb(255, 0, 0)');
        this._('get element property', 'jQry(\'<input disabled />\').prop(\'disabled\')', 'true');
        // TODO: work on events - this._('custom event', 'jQry(\'<div />\').on(\'custom-event\', event => { console.log(event); }).trigger(\'custom-event\')');
    }

    _(desc, cmd, targetValue) {
        this.test(desc, cmd, () => eval(cmd), targetValue);
        const $cmd = cmd.replace(/jQry/g, '$');
        this.test(desc, $cmd, () => eval($cmd), targetValue);
    }

    test(desc, label, fn, targetValue) {
        let error = false;
        let result;
        try {
            result = fn();
        } catch (response) {
            error = response.message;
        }

        if (typeof result === 'boolean') {
            result = result ? 'true' : 'false';
        } else if (typeof result === 'undefined') {
            error = true;
        } else if (typeof result === 'object') {
            result = JSON.stringify(result);
        }

        if (typeof targetValue === 'function') {
            if (!targetValue(result)) {
                error = false;
            }
        } else if (!error && result !== targetValue) {
            error = true;
        }

        // eslint-disable-next-line react/no-access-state-in-setstate
        const { tests } = this.state;
        tests.push({
            id: (new Date()).getTime() + label,
            label,
            desc,
            result,
            error,
            targetValue,
        });
        this.setState({ tests });
    }

    render() {
        return (
            <div className="testHolder">
                <table>
                    <thead>
                        <tr>
                            <th>Desc</th>
                            <th>Code</th>
                            <th>Result</th>
                            <th>Result type</th>
                            <th>Error</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tests.map(test => (
                                <tr key={test.id} className={(test.error ? 'error' : '')}>
                                    <td>{test.desc}</td>
                                    <td><code>{test.label}</code></td>
                                    <td>{test.result}</td>
                                    <td>{typeof test.result}</td>
                                    <td>{test.error}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;

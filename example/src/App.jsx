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
        this._('jQry(\'<div></div>\').length');
        this._('jQry(\'<!--This is a comment-->\')[0].nodeType');
        this._('jQry(\'<div></div><p><b> </b></p>\').length');
        this._('jQry(\'<div><b> </b></div><p><b> </b></p> text <b />\').find(\'b\').length');
        this._('jQry(\'<!doctype html><html><head></head><body><p>1</p></body></html>\')[0].tagName');
        this._('jQry(\'<html></html>\')[0].tagName');
        this._('jQry(\'<body><div></div></body>\')[0].tagName');
        this._('jQry(\'<head><meta charset="UTF-8" /></head>\')[0].tagName');
        this._('jQry(\'<p><i>This is</i> find <i>test</i>\').find(\'i\').length');
        this._('jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').parent().length');
        this._('jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').detach().parent().length');
        this._('jQry(\'<div></div>\').css(\'display\')');
        this._('jQry(\'<div style="background: #ff0000;"></div>\').css(\'background\')');
        this._('jQry(\'<input disabled />\').prop(\'disabled\')');
        this._('jQry(\'<div />\').on(\'custom-event\', event => { console.log(event); }).trigger(\'custom-event\')');
    }

    _(cmd) {
        this.test(cmd, () => eval(cmd));
        const $cmd = cmd.replace(/jQry/g, '$');
        this.test($cmd, () => eval($cmd));
    }

    test(label, fn) {
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

        // eslint-disable-next-line react/no-access-state-in-setstate
        const { tests } = this.state;
        tests.push({
            id: (new Date()).getTime() + label,
            label,
            result,
            error,
        });
        this.setState({ tests });
    }

    render() {
        return (
            <div className="testHolder">
                <table>
                    <thead>
                        <tr>
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

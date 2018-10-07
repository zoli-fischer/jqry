import React from 'react';
import './App.less';
import AutoState from '@zoli-fischer/auto-state';
import jQry from 'jqry';

class App extends AutoState {
    constructor(props) {
        super(props);
        this.state = {
            tests: [],
        };
    }

    componentDidMount() {
        this.test('jQry(\'<div></div>\').length', () => jQry('<div id="test"></div>').length);
        this.test('jQry(\'<p><i>This is</i> find <i>test</i>\').find(\'i\').length', () => jQry('<p><i>This is</i> find <i>test</i>').find('i').length);
        this.test('jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').parent().length', () => jQry('<div style="display: none;"></div>').appendTo('body').parent().length);
        this.test('jQry(\'<div style="display: none;"></div>\').appendTo(\'body\').detach().parent().length', () => jQry('<div style="display: none;"></div>').appendTo('body').detach().parent().length);
        this.test('jQry(\'<div></div>\').css(\'display\')', () => jQry('<div></div>').css('display'));
        this.test('jQry(\'<div style="background: #ff0000;"></div>\').css(\'background\')', () => jQry('<div style="background: #ff0000;"></div>').css('background'));
        this.test('jQry(\'<input disabled />\').prop(\'disabled\')', () => jQry('<input disabled />').prop('disabled'));
        this.test('jQry(\'<div />\').on(\'custom-event\', event => { console.log(event); }).trigger(\'custom-event\')', () => jQry('<div />').on('custom-event', event => { console.log(event); }).trigger('custom-event'));
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
                                <tr key={test.id}>
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
import React from 'react';
import jQuery from 'jquery';
import jQry from '../src/jQry';
import Tests from '../test/tests';
import './App.less';

window.jQry = jQry;
window.jQuery = jQuery;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tests: [],
        };
    }

    componentDidMount() {
        Tests.forEach(test => {
            this._(test.desc, test.fn, test.value);
        });
    }

    _(desc, cmd, targetValue) {
        this.test(desc, 'jQry', cmd, jQry, targetValue);
        this.test(desc, 'jQuery', cmd, jQuery, targetValue);
    }

    test(desc, label, fn, mock, targetValue) {
        label = `${label} / ${fn.toString()}`;

        let error = false;
        let result;
        try {
            result = fn(mock);
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
        const { tests } = this.state;
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
                            tests.map(test => (
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

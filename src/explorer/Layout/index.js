import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ComponentList from './componentList.js'
import './../styles/index.scss';

export default class Layout extends Component {
    render() {
        let defaultMsg = <p className='default-msg'>Select a Component From the List</p>
        return (
            <div className='component-explorer'>
                <header className="navbar navbar-default ">
                    <nav>
                        <div className="navbar-header">
                            <h2 >CompEx</h2>
                        </div>

                    </nav>
                </header>
                <section className='col-md-2 side-menu'>
                    <ul>
                        <li className='heading'>Component List</li>
                        {ComponentList.map((component) => {
                            return (
                                <li><Link to={'/' + component}>{component}</Link></li>
                            )
                        })}
                    </ul>
                </section>
                <section className='col-md-10'>
                    {this.props.children ? this.props.children : defaultMsg}
                </section>
                <footer className="footer">
                    <div className="container">
                        <span className="footer-left">CompEx</span>
                    </div>
                </footer>
            </div >
        )
    }
} 
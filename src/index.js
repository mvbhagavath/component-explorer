import React from 'react'
import { render } from 'react-dom'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ComponentExplorer from 'explorer/ComponentExplorer'
import Layout from 'explorer/Layout'


render(<Router history={browserHistory} >
    <Route path="/" component={Layout}>
        <Route path=":component" component={ComponentExplorer} />
    </Route>
</Router>, document.getElementById('root'))

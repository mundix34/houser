import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
export default(
    <Switch>
        <Route exact path = "/" component = { Dashboard } />
        <Route path = "/wizard" component = { Wizard } />
        <Route path = "/wizard/:stepOne" component = { Wizard } />
        <Route path = "/wizard/:stepTwo" component = { Wizard } />
        <Route path = "/wizard/:stepThree" component = { Wizard } />
    </Switch>
)
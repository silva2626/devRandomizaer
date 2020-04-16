import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

//Components
import Home from './pages/home'
import StacksSelection from './pages/stacksSelection'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/stacksSelection" exact component={StacksSelection}/>
            </Switch>
        </BrowserRouter>
    )
}
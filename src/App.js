import React from 'react'
import {ButtonMain} from "./components/ButtonMain";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Buttons} from "./components/Buttons";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


let App = () => {

    return (
        <div style={{maxWidth: '10rem', margin: '6rem auto'}}>
            <h1>Button Task</h1>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    < Route exact path='/' component={ButtonMain}/>
                    <div>
                        < Route path='/1' component={Buttons}/>
                    </div>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

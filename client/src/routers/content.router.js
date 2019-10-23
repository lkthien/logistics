import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "../pages/home.page";
import InfoPage from "../pages/info.page";


const ContentRouter = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/info" component={InfoPage} />
                
            </Switch>
        </React.Fragment>
    )
}
export default ContentRouter;
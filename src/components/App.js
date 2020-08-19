import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home/Home'
import Movie from './Movie/Movie'




class App extends Component {
    render() {
        
        return(
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/movie/:id" component={Movie} />
                <Redirect to="/" />
            </React.Fragment>
            
        )
    }
}

export default App;


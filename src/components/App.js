import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

import SearchForm from './searchForm/SearchForm'



class App extends Component {
    render() {
        return(
            <Container fixed>
                <SearchForm />
            </Container>
        )
    }
}

export default App;


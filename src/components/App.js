import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

import SearchForm from './searchForm/SearchForm'
import SearchResults from './searchResults/SearchResults'



class App extends Component {
    render() {
        return(
            <Container fixed>
                <SearchForm />
                <SearchResults />
            </Container>
        )
    }
}

export default App;


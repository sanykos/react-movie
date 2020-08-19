import React from 'react'
import Container from '@material-ui/core/Container';

import SearchForm from '../searchForm/SearchForm'
import SearchResults from '../searchResults/SearchResults'

const Home = () => {
    return (
        <Container fixed>
            <SearchForm />
            <SearchResults />
        </Container>
    )
}

export default Home
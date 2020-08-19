import React from 'react'
import {connect} from 'react-redux'
import {movieDetail} from '../../store/actions/detail'

import Container from '@material-ui/core/Container';



class Movie extends React.Component {

    componentDidMount() {
       this.props.detailMovie(this.props.match.params.id)
    }

    render() {
        //console.log(this.props.movie)
        return(
            <Container fixed>
               <h1>Movie</h1>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    const {search} = state
    return {
       movie: search.movie
   }
}

function mapDispatchToProps(dispatch) {
    return {
        detailMovie: movieId => dispatch(movieDetail(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const SearchResults = ({data}) => {
    const useStyles = makeStyles({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          margin: '0 -15px'
        },
        card: {
            flexBasis: '22.6%',
            maxWidth: '22.6%',
            margin: '15px'
        },
        media: {
          height: 400,
          backgroundPosition: 'top center'
        },
      });
    const classes = useStyles();

   // console.log(data);
    return (
        <div className={classes.root}>
            {
                data.length ?
                data.map((item, key) => (
                <Card key={key} className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={item.Poster}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <p>{item.Title}</p>
                        </CardContent>
                    </CardActionArea>
                </ Card> 
                ))
                : <h1>Ничего не найдено</h1>
            }
        </div>

    )
  }


function mapStateToProps(state){
  const {search} = state
    return {
       data: search.data
   }
}

export default connect(mapStateToProps)(SearchResults)
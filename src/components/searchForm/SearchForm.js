import React from 'react'
import {useDispatch, connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import {search} from '../../store/actions/search'



const SearchForm = ({search, data}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          root: theme
        },
    }));
    const onChangeHandler = (e) => {
        search(e.target.value)
    }
    const classes = useStyles();
    //console.log(search)


  
    return(
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="end">
                        <IconButton onClick={search}>
                            <Search/>
                        </IconButton>
                    </InputAdornment>}
                    labelWidth={60}
                    onChange={onChangeHandler}
                />
            </FormControl>
        </div>
        )
}

function mapDispatchToProps(dispatch) {
    return  {
        search: (searchText) => dispatch(search(searchText))
    }
}

// function mapStateToProps(state) {
//   //console.log(state)
//     const {search} = state 
//     return {
//         data: search.data
//     }
// }

export default connect(null, mapDispatchToProps)(SearchForm)
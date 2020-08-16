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
    const classes = useStyles();
    console.log(data)
//   const dispatch = useDispatch()
//     const onClickHandler = () => dispatch(search())
  
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
                />
            </FormControl>
        </div>
        )
}

function mapDispatchToProps(dispatch) {
    return  {
        search: () => dispatch(search())
    }
}

function mapStateToProps(state) {
    const {search} = state 
    return {
        data: search.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
import React, {Component} from 'react'
import {useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import {search} from '../../store/actions/search'



const SearchForm = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          root: theme
        },
    }));
    const classes = useStyles();

    const dispatch = useDispatch()
    const onClickHandler = () => dispatch(search())
    return(
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="end">
                        <IconButton onClick={onClickHandler}>
                            <Search />
                        </IconButton>
                    </InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>
        </div>
        )
}

export default SearchForm
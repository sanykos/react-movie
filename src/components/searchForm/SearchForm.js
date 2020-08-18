import React, {useState} from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import {search} from '../../store/actions/search'



const SearchForm = ({search}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          root: theme
        },
    }));
    const classes = useStyles();

    const [value, setValue] = useState('')
    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            search(value)
        }
    }
    
    return(
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="end">
                        <IconButton onClick={() => search(value)}>
                            <Search/>
                        </IconButton>
                    </InputAdornment>}
                    labelWidth={60}
                    onChange={onChangeHandler}
                    onKeyPress={handleEnter}
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


export default connect(null, mapDispatchToProps)(SearchForm)
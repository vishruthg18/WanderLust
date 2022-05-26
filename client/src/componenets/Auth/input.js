import React from 'react'
import { TextField,Grid,InputAdornment,IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
const input = ({half,name,handleChange,autoFocus,type,handleShowPassword,label}) => {
  return (
    <Grid item xs={12} sm={half ? 6:12} >
        <TextField
            name={name}
            onChange={handleChange}
            varint="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' ?{
                endAdornment:(<InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                    {type=="password"?<Visibility/>:<VisibilityOff/>}
                </IconButton>
                </InputAdornment>)
            }:null}
        />
    </Grid>
  )
}

export default input
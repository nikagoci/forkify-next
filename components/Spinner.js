import { Stack } from '@mui/system'
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'


const Spinner = () => {
  return (
    <Stack justifyContent='center' alignItems='center'>
        <ClipLoader color="#F59A83" />  
    </Stack>
    )
}

export default Spinner
import {
  AppBar, Toolbar, Typography, Button,
} from '@mui/material'
import React from 'react'

type Props = {
  onClick: () => void
}

function Header({ onClick } : Props) {
  return (
    <AppBar position="static">
      <Toolbar sx={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      >
        <Typography variant="h5">
          SIMPLE-POST-WEB-APP
        </Typography>
        <Button color="inherit" onClick={onClick}>Buat Pengguna</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header

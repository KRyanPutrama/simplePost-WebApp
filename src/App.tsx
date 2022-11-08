import React, { useState } from 'react'
import {
  Container,
} from '@mui/material'
import { Outlet } from 'react-router-dom'
import {
  Alert, Header, PopupModal, UserForm,
} from './Components'
import './Styles/App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Header onClick={() => setShowModal(true)} />
      <Container
        maxWidth="lg"
        sx={{
          border: 1,
          marginTop: '2rem',
        }}
      >
        <Outlet />
      </Container>
      <PopupModal
        visible={showModal}
        handleClose={() => setShowModal(false)}
      >
        <UserForm />
      </PopupModal>
      <Alert />
    </>
  )
}

export default App

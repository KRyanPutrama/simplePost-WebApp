import React, { useState } from 'react'
import {
  Container,
} from '@mui/material'
import { Outlet } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import {
  Alert, Header, PopupModal, UserForm,
} from './Components'
import './Styles/App.css'
import { useAppSelector, useAppDispatch } from './Hooks/hooks'
import { postNewUser } from './GlobalStates/users'

function App() {
  const {
    isSuccess,
  } = useAppSelector(({ users }) => ({
    isSuccess: users?.postUserState === 'success',
  }), shallowEqual)

  const dispatch = useAppDispatch()

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Header onClick={() => setShowModal(true)} />
      <Container
        maxWidth="lg"
        sx={{
          border: 1,
          marginTop: '2rem',
          paddingY: '2rem',
        }}
      >
        <Outlet />
      </Container>
      <PopupModal
        visible={showModal}
        handleClose={() => setShowModal(false)}
        IsSuccess={isSuccess}
      >
        <UserForm formTitle={'Buat Pengguna'} handleSubmit={(data) => dispatch(postNewUser(data))} />
      </PopupModal>
      <Alert />
    </>
  )
}

export default App

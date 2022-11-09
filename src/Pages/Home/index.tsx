import React, { useEffect, useState } from 'react'

import {
  Typography, Divider, Grid, Pagination,
} from '@mui/material'
import { shallowEqual } from 'react-redux'
import { getUserData, putUser } from '../../GlobalStates/users'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import {
  PopupModal, UserCard, UserForm, CardLoading,
} from '../../Components'

function IndexOfHome() {
  const {
    userData,
    pageLimit,

    userDataIsLoadng,

    userPostIsSuccess,
    userDeleteIsSuccess,
    editUserIsSuccess,
  } = useAppSelector(({ users }) => ({
    userData: users?.usersData,
    pageLimit: users?.pageLimit,

    userDataIsLoadng: users?.usersFetchState === 'loading',

    userPostIsSuccess: users?.postUserState === 'success',
    userDeleteIsSuccess: users?.deleteUserState === 'success',
    editUserIsSuccess: users?.editUserState === 'success',
  }), shallowEqual)

  const [page, setPage] = useState(1)
  const [modalFormState, setModalFormState] = useState<{ showModal: boolean, name: string, id: number, email: string, status: string, gender: string }>({
    showModal: false,
    name: '',
    email: '',
    status: '',
    gender: '',
    id: 0,
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserData({ page }))
  }, [page])

  const handleChange = (event: any, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    if (userPostIsSuccess || userDeleteIsSuccess || editUserIsSuccess) {
      dispatch(getUserData({ page }))
    }
  }, [userPostIsSuccess, userDeleteIsSuccess, editUserIsSuccess])

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {'Daftar Pengguna'}
      </Typography>
      <Divider />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        justifyItems={'center'}
        alignItems={'center'}
      >

        {!userDataIsLoadng ? (userData?.map((data) => (
          <Grid item key={String(data.id).substring(0, 40)}>
            <UserCard
              data={data}
              editAction={() => {
                setModalFormState(() => ({
                  showModal: true,
                  ...data,
                }))
              }}
            />
          </Grid>
        ))) : (Array.from(Array(10).keys()).map((number) => (
          <Grid item key={`loadingCard-${number}`}>
            <CardLoading />
          </Grid>
        )))}
      </Grid>

      <Divider />

      <Pagination count={pageLimit} onChange={handleChange} sx={{ marginTop: '2rem' }} />
      <PopupModal
        visible={modalFormState.showModal}
        handleClose={() => {
          setModalFormState(() => ({
            showModal: false,
            name: '',
            email: '',
            status: '',
            gender: '',
            id: 0,
          }))
        }}
        IsSuccess={editUserIsSuccess}
      >
        <UserForm
          data={modalFormState}
          formTitle="Edit Pengguna"
          handleSubmit={(formData) => dispatch(putUser({
            id: modalFormState.id,
            ...formData,
          }))}
        />
      </PopupModal>
    </>
  )
}

export default IndexOfHome

import React, { useEffect, useState, useMemo } from 'react'

import {
  Typography, Divider, Grid, Pagination,
} from '@mui/material'
import { shallowEqual } from 'react-redux'
import { getUserData } from '../../GlobalStates/users'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { UserCard } from '../../Components'

function IndexOfHome() {
  const {
    userData,
    pageLimit,

    userPostIsSuccess,
    userPostIsError,
    userDeleteIsSuccess,
    userDeleteIsError,
  } = useAppSelector(({ users }) => ({
    userData: users?.usersData,
    pageLimit: users?.pageLimit,
    userPostIsSuccess: users?.postUserState === 'success',
    userPostIsError: users?.postUserState === 'error',
    userDeleteIsSuccess: users?.deleteUserState === 'success',
    userDeleteIsError: users?.deleteUserState === 'error',

  }), shallowEqual)

  const isDoingActivity = useMemo(
    () => userPostIsSuccess || userPostIsError || userDeleteIsSuccess || userDeleteIsError,
    [userPostIsSuccess, userPostIsError, userDeleteIsSuccess, userDeleteIsError],
  )

  const [page, setPage] = useState(1)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserData({ page }))
  }, [page])

  const handleChange = (event: any, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    if (isDoingActivity) {
      dispatch(getUserData({ page }))
    }
  }, [isDoingActivity])

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
        {userData?.map((data) => (
          <Grid item key={String(data.id).substring(0, 40)}>
            <UserCard data={data} />
          </Grid>
        ))}
      </Grid>
      {/* </Grid> */}
      <Divider />
      <Pagination count={pageLimit} onChange={handleChange} />
    </>
  )
}

export default IndexOfHome

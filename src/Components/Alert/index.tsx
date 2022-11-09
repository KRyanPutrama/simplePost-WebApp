import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react'
import { shallowEqual } from 'react-redux'
import { Snackbar, Alert } from '@mui/material'
import { useAppSelector } from '../../Hooks/hooks'

function AlertSnackBar() {
  const {

    postUserIsSuccess,
    deleteUserIsSuccess,
    submitPostIsSuccess,
    deletePostIsSuccess,
    editUserIsSuccess,

    userPostIsError,
    deleteUserIsError,
    submitPostIsError,
    deletePostIsError,
    editUserIsError,
  } = useAppSelector(({ users, userDetail }) => ({
    postUserIsSuccess: users?.postUserState === 'success',
    deleteUserIsSuccess: users?.deleteUserState === 'success',
    submitPostIsSuccess: userDetail?.submitPostsState === 'success',
    deletePostIsSuccess: userDetail?.deletePostState === 'success',
    editUserIsSuccess: users?.editUserState === 'success',

    userPostIsError: users?.postUserState === 'error',
    deleteUserIsError: users?.deleteUserState === 'error',
    submitPostIsError: userDetail?.submitPostsState === 'error',
    deletePostIsError: userDetail?.deletePostState === 'error',
    editUserIsError: users?.editUserState === 'error',
  }), shallowEqual)

  const [open, setOpen] = useState(false)

  const isSuccess = useMemo(
    () => postUserIsSuccess || deleteUserIsSuccess || submitPostIsSuccess || deletePostIsSuccess || editUserIsSuccess,
    [
      postUserIsSuccess,
      deleteUserIsSuccess,
      submitPostIsSuccess,
      deletePostIsSuccess,
      editUserIsSuccess,
    ],
  )

  const isError = useMemo(
    () => userPostIsError || deleteUserIsError || submitPostIsError || deletePostIsError || editUserIsError,
    [
      userPostIsError,
      deleteUserIsError,
      submitPostIsError,
      deletePostIsError,
      editUserIsError,
    ],
  )

  const message = useMemo(() => (isError ? 'Error' : 'Success'), [isError])

  const handleClose = useCallback(
    () => {
      setOpen(false)
    },
    [],
  )

  useEffect(() => {
    if (isSuccess || isError) {
      setOpen(true)
    }
  }, [
    postUserIsSuccess,
    deleteUserIsSuccess,
    submitPostIsSuccess,
    deletePostIsSuccess,
    editUserIsSuccess,
    userPostIsError,
    deleteUserIsError,
    submitPostIsError,
    deletePostIsError,
    editUserIsError,
  ])

  return (
    <Snackbar
      open={open}
      autoHideDuration={500}
      onClose={handleClose}
      message
    >
      <Alert onClose={handleClose} severity={isError ? 'error' : 'success'} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default AlertSnackBar

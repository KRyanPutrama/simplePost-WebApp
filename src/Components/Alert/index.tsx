import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react'
import { shallowEqual } from 'react-redux'
import { Snackbar, Alert } from '@mui/material'
import { useAppSelector } from '../../Hooks/hooks'

function AlertSnackBar() {
  const {
    isSuccess,
    isError,
  } = useAppSelector(({ users }) => ({
    isSuccess: users?.postUserState === 'success' || users?.deleteUserState === 'success',
    isError: users?.postUserState === 'error' || users?.deleteUserState === 'error',
  }), shallowEqual)

  const [open, setOpen] = useState(false)

  const message = useMemo(() => {
    if (isError) {
      return 'Error'
    }
    return 'Success'
  }, [isSuccess, isError])

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
  }, [isSuccess, isError])

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
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

import { Box, Modal } from '@mui/material'
import React, { useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '../../Hooks/hooks'

type Props = {
  handleClose: () => void
  visible: boolean
  children: React.ReactElement
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45rem',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

function PopupModal({ handleClose, visible, children }: Props) {
  const {
    isSuccess,
  } = useAppSelector(({ users }) => ({
    isSuccess: users?.postUserState === 'success',
  }), shallowEqual)

  useEffect(() => {
    if (isSuccess) {
      handleClose()
    }
  }, [isSuccess])

  return (
    <Modal
      open={visible}
      onClose={handleClose}
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  )
}

export default PopupModal

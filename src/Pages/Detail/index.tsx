import {
  Button,
  Container,
  Divider,
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shallowEqual } from 'react-redux'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import {
  getDetail, getDetailPost, postDetailPost, deletePost,
} from '../../GlobalStates/detail'
import { PopupModal } from '../../Components'

function IndexOfDetail() {
  const {
    userDetailData,
    userPosts,

    submitPostsIsSuccess,

    deletePostIsSuccess,
  } = useAppSelector(({ userDetail }) => ({
    userDetailData: userDetail?.userDetail,
    userPosts: userDetail?.userPosts,

    submitPostsIsSuccess: userDetail?.submitPostsState === 'success',
    deletePostIsSuccess: userDetail?.deletePostState === 'success',
  }), shallowEqual)

  const { userId } = useParams()
  const dispatch = useAppDispatch()

  const [showModal, setShowModal] = useState(false)
  const [titleText, setTitleText] = useState('')
  const [bodyText, setBodyText] = useState('')
  // console.log(detailId)
  useEffect(() => {
    dispatch(getDetail({ id: Number(userId) }))
    dispatch(getDetailPost({ id: Number(userId) }))
  }, [userId])

  const handleSimpan = () => dispatch(postDetailPost({ id: userDetailData?.id || 0, title: titleText, body: bodyText }))

  useEffect(() => {
    if (submitPostsIsSuccess) {
      dispatch(getDetailPost({ id: Number(userId) }))
      setBodyText('')
      setTitleText('')
    }

    if (deletePostIsSuccess) {
      dispatch(getDetailPost({ id: Number(userId) }))
    }
  }, [submitPostsIsSuccess, deletePostIsSuccess])

  return (
    <>
      <Container>
        <Typography variant="h5" gutterBottom>
          {'Detail Pengguna'}
        </Typography>
      </Container>
      <Divider />
      <Container>
        <Typography variant="h6" gutterBottom>
          {`Nama : ${userDetailData?.name || '-'}`}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {`Email : ${userDetailData?.email || '-'}`}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {`Gender : ${userDetailData?.gender || '-'}`}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {`Status : ${userDetailData?.status || '-'}`}
        </Typography>
      </Container>
      <Container>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <Typography>
            {'Daftar Posts'}
          </Typography>
          <Button onClick={() => setShowModal(true)}>Buat Posts</Button>
        </Box>
        <Divider />
        <div>
          {userPosts?.length !== 0 ? userPosts?.map(({ body, id, title }, index) => (
            <Box key={`postAccor-${id}`} sx={{ display: 'flex', flexDirection: 'row', marginY: '1em' }}>
              <Accordion sx={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="subtitle1">{`#${index + 1} Title: ${title}`}</Typography>

                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    {body}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Button sx={{ display: 'flex', flex: 0.1 }} onClick={() => dispatch(deletePost({ id: Number(id) }))}>
                <DeleteIcon />
              </Button>
            </Box>
          )) : (
            <Typography variant="caption">
              This user haven't create a single post
            </Typography>
          )}

        </div>
      </Container>
      <PopupModal
        visible={showModal}
        handleClose={() => setShowModal(false)}
        IsSuccess={submitPostsIsSuccess}
      >
        <Container>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
            <Typography>
              Dialog - Buat Posts
            </Typography>
            <Button onClick={handleSimpan}>Simpan</Button>
          </Box>
          <Divider />
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField
              label="Title"
              sx={{
                marginY: '1rem',
              }}
              value={titleText}
              onChange={(e) => { setTitleText(e.target.value) }}
            />
            <TextField
              label="Body"
              multiline
              rows={4}
              value={bodyText}
              onChange={(e) => { setBodyText(e.target.value) }}
            />
          </Box>
        </Container>
      </PopupModal>
    </>
  )
}

export default IndexOfDetail

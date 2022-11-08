import React, { useState } from 'react'
import {
  Card, CardHeader, Avatar, IconButton, CardContent, Typography, Popover,
} from '@mui/material'
import { red } from '@mui/material/colors'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteUser, GetUserRes_Data } from '../../GlobalStates/users'
import { useAppDispatch } from '../../Hooks/hooks'

type Props = {
  data: GetUserRes_Data
}

function UserCard({ data } : Props) {
  const dispatch = useAppDispatch()

  const [openAnchor, setOpenAnchor] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setOpenAnchor(null)
  }

  const open = Boolean(openAnchor)
  const id = open ? 'simple-popover' : undefined

  return (
    <Card
      sx={{ maxWidth: 200 }}
    >
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
            {data.name.substring(0, 1).toUpperCase()}
          </Avatar>
                    )}
        action={(
          <>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={openAnchor}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <IconButton onClick={() => dispatch(deleteUser({ id: data.id }))}>
                <DeleteIcon />
              </IconButton>
            </Popover>
          </>
          )}
      />
      <CardContent>
        <Typography variant="caption" component="div" noWrap>
          Name : {data.name}
        </Typography>
        <Typography variant="caption" component="div" noWrap>
          Email : {data.email}
        </Typography>
        <Typography variant="caption" component="div" noWrap>
          Gender : {data.gender}
        </Typography>
        <Typography variant="caption" component="div" noWrap>
          Status : {data.status}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserCard

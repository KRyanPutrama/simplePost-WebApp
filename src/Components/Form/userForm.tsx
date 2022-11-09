import React, { useState } from 'react'
import {
  FormControl,
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Grid,
  Button,
  Typography,
  Divider,
} from '@mui/material'

type Props = {
  formTitle: string,
  data?: {
    name: string,
    email: string,
    gender: string,
    status: string,
  }
  handleSubmit: ({
    name, email, gender, status,
  } : { name: string, email: string, gender: string, status: string }) => void
}

function UserForm({ formTitle, data, handleSubmit } : Props) {
  const [name, setName] = useState(data?.name || '')
  const [email, setEmail] = useState(data?.email || '')
  const [gender, setGender] = useState(data?.gender || 'male')
  const [status, setStatus] = useState(data?.status || '')

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '13rem',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ marginBottom: '10px' }}>
        <Typography>
          {formTitle}
        </Typography>
        <Divider />
      </Box>
      <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField
          required
          error={!name}
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          helperText={'cannot be empty'}
        />
        <TextField
          required
          error={!email}
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          helperText={'cannot be empty'}
        />
        <TextField
          required
          error={!status}
          label="Status"
          placeholder="Status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value)
          }}
          helperText={'can only fill active/inactive, cannot blank'}
        />
      </Grid>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="male"
          name="radio-buttons-group"
          value={gender}
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
      <Button
        disabled={!name || !email || !status}
        variant="contained"
        onClick={() => {
          const paramData = {
            name,
            email,
            gender,
            status,
          }
          handleSubmit(paramData)
        }}
      >
        Submit
      </Button>
    </Box>
  )
}

export default UserForm

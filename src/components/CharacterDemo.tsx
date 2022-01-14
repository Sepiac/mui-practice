import React, { useState } from 'react'
import { TextField, Grid, Button, InputAdornment, Paper, Box, CircularProgress } from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

interface CharacterDemoProps {
  icon: React.ElementType,
  responses: string[]
}

export const CharacterDemo = (props: CharacterDemoProps) => {
  const { icon: Icon, responses } = props
  const [question, setQuestion] = useState('')

  const AskButton = () => (
    <InputAdornment position="end">
      <Button endIcon={<QuestionAnswerIcon />} />
    </ InputAdornment>
  )

  const getRandomResponse = () => responses[Math.floor(Math.random() * responses.length)]

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Icon style={{ height: '25vh', width: '25vh' }} />
      </Grid>
      <Grid item xs={12} >
        <CircularProgress />
        {getRandomResponse()} <ChatBubbleOutlineIcon />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Ask a question"
          variant="standard"
          onChange={e => setQuestion(e.target.value)}
          InputProps={{ endAdornment: <AskButton /> }}
        />
      </Grid>
    </Grid>
  )
}

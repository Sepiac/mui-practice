import React, { useState } from 'react'
import { TextField, Grid, Button, InputAdornment, CircularProgress } from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

interface CharacterDemoProps {
  icon: React.ElementType,
  responses: string[]
}

export const CharacterDemo = (props: CharacterDemoProps) => {
  const { icon: Icon, responses } = props
  const [question, setQuestion] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isResponseDelivered, setIsResponseDelivered] = useState(false)

  const askQuestion = () => {
    setIsLoading(true)
    setIsResponseDelivered(false)
    setTimeout(() => {
      setIsResponseDelivered(true)
      setIsLoading(false)
    }, 3000);
  }
  const AskButton = () => (
    <InputAdornment position="end">
      <Button endIcon={<QuestionAnswerIcon />} onClick={askQuestion} />
    </ InputAdornment>
  )

  const getRandomResponse = () => responses[Math.floor(Math.random() * responses.length)]

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Icon style={{ height: '25vh', width: '25vh' }} />
      </Grid>
      <Grid item xs={12} >
        {isLoading && <CircularProgress />}
        {(isResponseDelivered && question) && (<>{getRandomResponse()} <ChatBubbleOutlineIcon /></>)}
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={'Ask a "yes or no" question'}
          variant="standard"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              askQuestion()
            }
          }}
          onChange={e => {
            const question = e.target.value
            setQuestion(question)
            setIsResponseDelivered(false)
          }}
          InputProps={{ endAdornment: <AskButton /> }}
        />
      </Grid>
    </Grid>
  )
}

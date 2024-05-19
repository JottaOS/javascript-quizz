import { Button, Card, Stack, Typography } from '@mui/material'
import { useQuizStats } from '../hooks/useQuizStats'
import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useQuestionStore } from '../stores/questions'

export const FinalScreen = () => {
  const reset = useQuestionStore((state) => state.reset)
  const { correct, incorrect } = useQuizStats()

  useEffect(() => {
    confetti()
  }, [])

  return (
    <Card sx={{ p: 4 }}>
      <Stack gap={2} alignContent={'center'} justifyItems={'center'}>
        <Typography variant="h5">¡Has terminado el quiz!</Typography>
        <Typography
          variant="h4"
          fontWeight={'bold'}
        >{`Puntuación final: ${correct} / ${correct + incorrect}`}</Typography>
        <Button onClick={reset}>Volver al inicio</Button>
      </Stack>
    </Card>
  )
}

import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'
import { useQuestionStore } from './stores/questions'

function App() {
  const questions = useQuestionStore((state) => state.questions)

  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems={'center'} justifyContent={'center'}>
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>

        {questions.length === 0 ? <Start /> : <h1>{'hola'}</h1>}
      </Container>
    </main>
  )
}

export default App

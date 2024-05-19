import './App.css'
import { Box, Container, Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'
import { useQuestionStore } from './stores/questions'
import { Game } from './components/Game'
import { Footer } from './components/Footer'

function App() {
  const questions = useQuestionStore((state) => state.questions)

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          sx={{
            flexDirection: {
              sm: 'column',
              md: 'row'
            }
          }}
          gap={2}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <JavaScriptLogo size={200} />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>

        <Box mt={2}>
          {questions.length === 0 ? (
            <Start />
          ) : (
            <>
              <Game /> <Footer />
            </>
          )}
        </Box>
      </Container>
    </main>
  )
}

export default App

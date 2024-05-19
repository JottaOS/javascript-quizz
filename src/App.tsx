import './App.css'
import { Box, Container, Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'
import { useQuestionStore } from './stores/questions'
import { Game } from './components/Game'
import { Footer } from './components/Footer'
import { FinalScreen } from './components/FinalScreen'

function App() {
  const questions = useQuestionStore((state) => state.questions)
  const isFinished = useQuestionStore((state) => state.isFinished)

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
            JavaScript Quiz
          </Typography>
        </Stack>

        {!isFinished ? (
          <Box mt={2}>
            {questions.length === 0 ? (
              <Start />
            ) : (
              <>
                <Game /> <Footer />
              </>
            )}
          </Box>
        ) : (
          <FinalScreen />
        )}
      </Container>
    </main>
  )
}

export default App

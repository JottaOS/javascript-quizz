import { useQuizStats } from '../hooks/useQuizStats'

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuizStats()

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓${unanswered} sin contestar`}</strong>
    </footer>
  )
}

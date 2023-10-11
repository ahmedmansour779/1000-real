
import { MantineProvider } from '@mantine/core'
import './App.css'
import Header from './components/header'

export default function App() {
  return (
    <>
      <MantineProvider>
        <Header />
      </MantineProvider>
    </>
  )
}



import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './components/about us'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Service from './components/service'
import ScrollToTopButton from './components/toUp/ToUp'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <AboutUs />
              <MantineProvider>
                <Service paddingTop={false} />
              </MantineProvider>
            </>
          } />
          <Route path='/about-us' element={<AboutUs padding={true} color={true} background={true} />} />
          <Route path='/service' element={<MantineProvider>
            <Service paddingTop={true} />
          </MantineProvider>} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}


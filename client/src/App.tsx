import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router'
import Home from './components/home/Home'
import styled from 'styled-components'

const Container = styled.main`
  flex: auto;
  //padding-top: 3.5rem;
`

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

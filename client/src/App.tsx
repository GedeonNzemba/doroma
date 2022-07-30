import Header from './components/header/Header'
import Home from './components/home/Home'
import styled from 'styled-components'
import Footer from './components/footer/Footer'

const Container = styled.main`
  flex: auto;
  //padding-top: 3.5rem;
`

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  )
}

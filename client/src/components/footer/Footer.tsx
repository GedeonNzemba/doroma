import React from 'react'
import styled, { css } from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.2rem;
  box-shadow: -1px 2px 9px 0px rgb(0 0 0 / 75%);
  background-color: #f2f2f2;
  height: 1.4rem;
`
const Container = styled.div<{ space?: boolean }>`
  display: block;

  ${(props) =>
    props.space &&
    css`
      margin-left: 1rem;
      margin-right: 1rem;
    `}
`

const Text = styled.div`
  font-size: 1rem;
  text-transform: capitalize;
  color: #000;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Text>gedeon nzemba</Text>
      </Container>

      <Container space>&#45;</Container>

      <Container>
        <Text>06/19/2022</Text>
      </Container>
    </FooterContainer>
  )
}

export default Footer

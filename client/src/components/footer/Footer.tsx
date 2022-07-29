import React from 'react'
import styled, { css } from 'styled-components'
import { COLOR } from '../../utility/colors'
import { BsFillTelephoneFill, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { ImLocation2, ImFacebook2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import foot from '../../images/foot.jpg'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  /* box-shadow: -1px 2px 9px 0px rgb(0 0 0 / 75%); */

  margin-top: 8rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: -webkit-fill-available;
  padding: 3.5rem 0 3.5rem 4.5rem;
  background-image: linear-gradient(
      66deg,
      rgba(10, 10, 10, 0.9),
      rgba(7, 63, 37, 0.3)
    ),
    url(${foot});
  background-size: cover;
  background-repeat: no-repeat;
`
const ListContainer = styled.div`
  display: block;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 2rem;
`
const FormWrapper = styled.div`
  padding-top: 1.5rem;
  width: 100%;
`
const HeaderInput = styled.h6`
  font-size: 0.8rem;
  color: #ffffff;
  font-weight: 400;
  margin-block: 0;
  margin: 0 0 1.6rem 0;
  width: fit-content;
`
const Copyright = styled.h6`
  ${HeaderInput};
  margin: 1.6rem 0 0 0;
  opacity: 0.4;
  color: #ffffff;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
`
const Li = styled.li`
  list-style: none;
  text-decoration: none;
  display: block;
  padding: 1rem;
`
const Title = styled.h3`
  color: ${COLOR.brown};
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
`
const Item = styled.div<{ space?: boolean; link?: boolean }>`
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 400;
  cursor: pointer;

  ${(props) =>
    props.space &&
    css`
      margin-bottom: 0.8rem;
    `}

  ${(props) =>
    props.link &&
    css`
      margin-right: 0.8rem;
      & a {
        text-decoration: none;
        color: inherit;
        font-size: inherit;
        font-weight: inherit;

        & svg {
          color: ${COLOR.brown};
          font-size: inherit;
          font-weight: inherit;
          margin-right: 0.3rem;
        }
      }
    `}
`

const Container = styled.div`
  background-color: #ffffff;
  width: fit-content;
  border-radius: 2rem;
  padding: 0.3rem 0.2rem 0.3rem 1.5rem;
`
const Input = styled.input`
  padding: 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${COLOR.black};
  border: none;
  outline: none;

  &::active {
    border: none;
    outline: none;
  }
`
const Submit = styled.input`
  background-color: ${COLOR.brown};
  border: none;
  padding: 0.5rem 1.6rem;
  margin-left: 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  color: #ffffff;
`

const year: number = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <ListContainer>
          <Ul>
            <Li>
              <Title>services</Title>
              <Item space>InLand Freight</Item>
              <Item space>Air Freight</Item>
              <Item space>Ocean Freight</Item>
              <Item space>WareHousing</Item>
              <Item space>Logistics Services</Item>
              <Item>Custom Broker</Item>
            </Li>
            <Li>
              <Title>e-commerce</Title>
              <Item space>Tracking</Item>
              <Item space>Booking</Item>
              <Item>Get align Quote</Item>
            </Li>
            <Li>
              <Title>contact us</Title>
              <Item space>
                <BsFillTelephoneFill color={COLOR.brown} /> +27 84 5633 610
              </Item>
              <Item space>
                <ImLocation2 color={COLOR.brown} /> 10 A D Drakenstein Road,
                Cape Town
              </Item>
            </Li>
            <Li>
              <Title>follow us</Title>
              <Item space link>
                <Link to="facebook.com">
                  <ImFacebook2 color={COLOR.brown} /> FaceBook
                </Link>
              </Item>
              <Item space link>
                <Link to="instagram.com">
                  <BsInstagram color={COLOR.brown} /> Instagram
                </Link>
              </Item>
              <Item space link>
                <Link to="linkdin.com">
                  <BsLinkedin color={COLOR.brown} /> LinkedIn
                </Link>
              </Item>
            </Li>
          </Ul>
        </ListContainer>
        <FormWrapper>
          <HeaderInput>Want to get useful tips? Subscribe</HeaderInput>
          <Container>
            <Input type="text" placeholder="Enter mail" />
            <Submit type="submit" />
          </Container>
          <Copyright>
            Copyright {year}. <b>Doroma Logistics</b>
          </Copyright>
        </FormWrapper>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer

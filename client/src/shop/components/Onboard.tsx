import React from 'react'
import styled, { css } from 'styled-components'
import onboard from '../images/onboard.png'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
`
const ViewWrapper = styled.div`
  flex: 6;
  position: relative;
  background-image: url(${onboard});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`
const ContentWrapper = styled.div`
  flex: 1;
  padding: 3rem 3.5rem 5rem 2.5rem;
`
const MiddleIndicator = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  -moz-transform: translate(-50%, -50%); /* Firefox */
  -ms-transform: translate(-50%, -50%); /* IE 9 */
  -webkit-transform: translate(-50%, -50%); /* Safari and Chrome*/
  -o-transform: translate(-50%, -50%); /* Opera */
  transform: translate(-50%, -50%);
  width: 1.6rem;
  height: 0.5rem;
  background-color: #c6ab59;
  border-radius: 2.5px;
`
const LeftIndicator = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 44%;
  -moz-transform: translate(-44%, -44%); /* Firefox */
  -ms-transform: translate(-44%, -44%); /* IE 9 */
  -webkit-transform: translate(-44%, -44%); /* Safari and Chrome*/
  -o-transform: translate(-44%, -44%); /* Opera */
  transform: translate(-44%, -44%);
  width: 1rem;
  height: 0.5rem;
  background-color: #8f92a1;
  border-radius: 2.5px;
  opacity: 0.2;
`
const RightIndicator = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 56%;
  -moz-transform: translate(-56%, -56%); /* Firefox */
  -ms-transform: translate(-56%, -56%); /* IE 9 */
  -webkit-transform: translate(-56%, -56%); /* Safari and Chrome*/
  -o-transform: translate(-56%, -56%); /* Opera */
  transform: translate(-56%, -56%);
  width: 1rem;
  height: 0.5rem;
  background-color: #8f92a1;
  border-radius: 2.5px;
  opacity: 0.2;
`
const Welcome = styled.div`
  display: block;
  margin-bottom: 1.6rem;
`
const Title = styled.h3`
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: -0.8px;
  color: #171717;
`
const Text = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;
  opacity: 0.6;
  color: #171717;
  margin-bottom: 3rem;
`
const Button = styled.div`
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2;
  padding: 1.2rem 2rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #c6ab59;
  border-radius: 0.6rem;
  text-align: center;
`

const Onboard = () => {
  return (
    <Container>
      <ViewWrapper>
        <LeftIndicator />
        <MiddleIndicator />
        <RightIndicator />
      </ViewWrapper>

      <ContentWrapper>
        <Welcome>
          <Title>Welcome to Doroma Store</Title>
        </Welcome>
        <Text>
          With long experience in the audio industry, we create the best quality
          products
        </Text>
        <Button>
          get started <FaLongArrowAltRight style={{ float: 'right' }} />
        </Button>
      </ContentWrapper>
    </Container>
  )
}

export default Onboard

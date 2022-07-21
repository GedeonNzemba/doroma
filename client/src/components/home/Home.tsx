import React from 'react'
import styled, { css } from 'styled-components'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import banner from '../../images/b.jpg'
import truck from '../../images/truck.svg'
import { COLOR, fill } from '../../utility/colors'

const Main = styled.main`
  width: 100%;
  height: 400vh;
`
const Header = styled.header`
  width: 100%;
  height: 80vh;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
`

const Section = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const Title = styled.h1<{ item?: boolean }>`
  text-transform: capitalize;
  font-size: 2.5rem;
  color: #000000;
  font-weight: 500;
  margin-block-start: 1.2rem;
  margin-block-end: 0;
  margin-bottom: 0.8rem;

  ${(props) =>
    props.item &&
    css`
      font-weight: 800;
      font-size: 1.2rem;
      margin-block-start: 0;
    `}
`

const Bold = styled.div`
  font-weight: 800;
  display: inline-block;
`

const Wrapper = styled.div<{ item?: boolean }>`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  text-align: -webkit-center;

  ${(props) =>
    props.item &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 5rem;
      row-gap: 5rem;
      margin-bottom: 1.2rem;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}
`
const Span = styled.span`
  margin-top: 1rem;
  font-size: 1rem;
  color: #000000;
`

// SERVICES ITEMS
const Item = styled.div`
  background-color: #f5f5f5;
  width: 15rem;
  height: fit-content;
  padding: 0.8rem 0;
  border-radius: 0.8rem;
`
const ImageWrapper = styled.div`
  text-align: center;
  text-align: -webkit-center;
`
const OuterWrap = styled.div`
  position: relative;
  background-color: #e9f6ff;
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
`
const InnerWrap = styled.div`
  position: absolute;
  background-color: #bedffe;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  -moz-transform: translate(-50%, -50%); /* Firefox */
  -ms-transform: translate(-50%, -50%); /* IE 9 */
  -webkit-transform: translate(-50%, -50%); /* Safari and Chrome*/
  -o-transform: translate(-50%, -50%); /* Opera */
  transform: translate(-50%, -50%);
  width: 10rem;
  height: 10rem;
`
const IMG = styled.img`
  width: 10rem;
  height: 10rem;
`
const ContentWrapper = styled.div`
  margin-top: 1.2rem;
  width: fit-content;
`
const Text = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-align: -webkit-center;
`
const Button = styled.div`
  margin-top: 1.2rem;
  color: ${COLOR.brown};
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
  position: relative;
  padding: 0.8rem;

  &:hover {
    color: #fff;
    z-index: 1;
    /* background: #aaa; */
    cursor: pointer;

    &:after {
      z-index: -10;
      animation: ${fill} 1s forwards;
      -webkit-animation: ${fill} 1s forwards;
      -moz-animation: ${fill} 1s forwards;
      opacity: 1;
    }
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #aaa;
    height: 1px;
    text-align: left;
    content: '.';
    margin: 0;
    opacity: 0;
  }

  &:before {
    transition: all 0.5s;
  }
`

const Home = () => {
  return (
    <Main>
      <Header></Header>
      <Section>
        <Wrapper>
          <Title>
            our <Bold>services</Bold>
          </Title>
          <Span>
            We offer a wide range of personalized and professional services for
            you!
          </Span>
        </Wrapper>

        <Wrapper item>
          <Item>
            <ImageWrapper>
              <OuterWrap>
                <InnerWrap>
                  <IMG src={truck} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>InLand Freight</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <Button>
                learn more <BsFillArrowRightCircleFill />
              </Button>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap>
                <InnerWrap>
                  <IMG src={truck} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>InLand Freight</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <Button>
                learn more <BsFillArrowRightCircleFill />
              </Button>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap>
                <InnerWrap>
                  <IMG src={truck} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>InLand Freight</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <Button>
                learn more <BsFillArrowRightCircleFill />
              </Button>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap>
                <InnerWrap>
                  <IMG src={truck} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>InLand Freight</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <Button>
                learn more <BsFillArrowRightCircleFill />
              </Button>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap>
                <InnerWrap>
                  <IMG src={truck} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>InLand Freight</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <Button>
                learn more <BsFillArrowRightCircleFill />
              </Button>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap>
                <InnerWrap>
                  <IMG src={truck} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>InLand Freight</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <Button>
                learn more <BsFillArrowRightCircleFill />
              </Button>
            </ContentWrapper>
          </Item>
        </Wrapper>
      </Section>
    </Main>
  )
}

export default Home

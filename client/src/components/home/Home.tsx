import React from 'react'
import styled, { css } from 'styled-components'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import banner from '../../images/b.jpg'
import bannerb from '../../images/banner.jpg'
import truck from '../../images/truck.svg'
import airfreight from '../../images/airFreight.svg'
import capetown from '../../images/cape town.png'
import pretoria from '../../images/pretoria.png'
import brazzaville from '../../images/brazza.png'
import pointnoire from '../../images/ponton.png'
import { COLOR, fill } from '../../utility/colors'
import Map from '../map/Map'

import heavyMachine from '../../images/heavymachine.svg'

const Main = styled.main`
  width: 100%;
  height: 100%;
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

const Wrapper = styled.div<{ item?: boolean; map?: boolean }>`
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
      margin-bottom: 5rem;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}

  ${(props) =>
    props.map &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 5rem;
      row-gap: 5rem;
      position: relative;
      margin-top: 8rem;
      height: 50rem;
      width: 100%;
      background: #282c34;
      background: url(${bannerb}), #282c34;
      background-attachment: fixed;
      background-blend-mode: color-burn;
      color: #fff;
      align-items: center;
      align-items: -webkit-center;
      padding-top: 5rem;
      padding-bottom: 5rem;
      clip-path: polygon(0 0, 100% 2%, 100% 100%, 0% 100%);
    `}
`
const Span = styled.span<{ center?: boolean }>`
  margin-top: 1rem;
  font-size: 1rem;
  color: #000000;
`

// SERVICES ITEMS
const Item = styled.div`
  background-color: #f5f5f5;
  width: 18rem;
  height: fit-content;
  padding: 0.8rem 0;
  border-radius: 0.8rem;
`
const ImageWrapper = styled.div<{ city?: boolean }>`
  text-align: center;
  text-align: -webkit-center;

  ${(props) =>
    props.city &&
    css`
      background-color: #c967714a;
    `}
`
const OuterWrap = styled.div<{ border?: boolean }>`
  position: relative;
  background-color: #e9f6ff;
  border-radius: 50%;
  width: 12rem;
  height: 12rem;

  ${(props) =>
    props.border &&
    css`
      border: 0.2rem solid #501d22;
      background-color: unset;
      width: 10rem;
      height: 10rem;
    `}
`
const InnerWrap = styled.div<{ border?: boolean }>`
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

  ${(props) =>
    props.border &&
    css`
      background-color: #c7c7c7;
      width: 8rem;
      height: 8rem;
    `}
`
const IMG = styled.img<{ city?: boolean; border?: boolean }>`
  width: 10rem;
  height: 10rem;

  ${(props) =>
    props.city &&
    css`
      height: 100%;
      width: 100%;
      max-height: 12rem;
      filter: drop-shadow(2px 4px 6px black);
      background: #ffffff;
      border-radius: 0 30px 0 30px;
    `}

  ${(props) =>
    props.border &&
    css`
      width: 8rem;
      height: 8rem;
    `}
`
const ContentWrapper = styled.div<{ city?: boolean }>`
  margin-top: 1.2rem;
  width: fit-content;
  padding: 0.8rem;

  ${(props) =>
    props.city &&
    css`
      padding: 0;
      margin-top: 0;
    `}
`
const Text = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-align: -webkit-center;
`
const ButtonWrapper = styled.div`
  color: ${COLOR.brown};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1.2rem;
  position: relative;
  padding: 0.8rem;

  &:hover {
    color: #fff;
    z-index: 1;
    background: rgba(170, 170, 170, 0.411);
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
const IconWrapper = styled.div`
  width: fit-content;
  align-self: center;
  align-self: -webkit-center;
`
const Button = styled.div<{ allServices?: boolean }>`
  color: inherit;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  ${(props) =>
    props.allServices &&
    css`
      background-color: ${COLOR.brown};
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 800;
      border-radius: 0.5rem;
      padding: 1rem;
    `}
`

// city
const CityWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(16rem, 1fr);
  flex-direction: column;
  height: 100%;
  column-gap: 3rem;
`
const City = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 0.8rem double #ffffff;
  background: linear-gradient(
    163deg,
    rgba(80, 29, 34, 1) 0%,
    rgba(255, 255, 255, 1) 50%
  );

  padding: 0.8rem;
  margin: 2rem;
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
              <ButtonWrapper>
                <Button>learn more</Button>
                <IconWrapper>
                  <BsFillArrowRightCircleFill />
                </IconWrapper>
              </ButtonWrapper>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap>
                <InnerWrap>
                  <IMG src={airfreight} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>Air Freight</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <ButtonWrapper>
                <Button>learn more</Button>
                <IconWrapper>
                  <BsFillArrowRightCircleFill />
                </IconWrapper>
              </ButtonWrapper>
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
              <Title item>Ocean Freight</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <ButtonWrapper>
                <Button>learn more</Button>
                <IconWrapper>
                  <BsFillArrowRightCircleFill />
                </IconWrapper>
              </ButtonWrapper>
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
              <Title item>Ware Housing</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <ButtonWrapper>
                <Button>learn more</Button>
                <IconWrapper>
                  <BsFillArrowRightCircleFill />
                </IconWrapper>
              </ButtonWrapper>
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
              <Title item>Logistics Services</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <ButtonWrapper>
                <Button>learn more</Button>
                <IconWrapper>
                  <BsFillArrowRightCircleFill />
                </IconWrapper>
              </ButtonWrapper>
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
              <Title item>Custom Broker</Title>
              <Text>
                Lorem Ipsum is simply dummy text for printing. Lorem Ipsum is
                simply dummy text
              </Text>
              <ButtonWrapper>
                <Button>learn more</Button>
                <IconWrapper>
                  <BsFillArrowRightCircleFill />
                </IconWrapper>
              </ButtonWrapper>
            </ContentWrapper>
          </Item>
        </Wrapper>

        <Button allServices>view all services</Button>

        <Wrapper map>
          <CityWrapper>
            <City>
              <ImageWrapper>
                <IMG city src={capetown} alt="services" />
              </ImageWrapper>

              <ContentWrapper city>
                <Title item>Cape Town</Title>
                <Text>
                  Cape Town is part of the Doroma Logistics headquarter.
                </Text>
              </ContentWrapper>
            </City>

            <City>
              <ImageWrapper>
                <IMG city src={pretoria} alt="services" />
              </ImageWrapper>

              <ContentWrapper city>
                <Title item>Pretoria</Title>
                <Text>
                  Pretoria is part of the Doroma Logistics headquarter.
                </Text>
              </ContentWrapper>
            </City>
          </CityWrapper>
          <Map />
          <CityWrapper>
            <City>
              <ImageWrapper>
                <IMG city src={brazzaville} alt="services" />
              </ImageWrapper>

              <ContentWrapper city>
                <Title item>Brazzaville</Title>
                <Text>
                  Doroma Logistics accepts parcel from here and destributes
                  throughout the country. Doroma Logistics also accepts local
                  parcel from here and destributes them in South Africa.
                </Text>
              </ContentWrapper>
            </City>

            <City>
              <ImageWrapper>
                <IMG city src={pointnoire} alt="services" />
              </ImageWrapper>

              <ContentWrapper city>
                <Title item>Point Noire</Title>
                <Text>
                  Doroma Logistics accepts parcel from here and destributes
                  throughout the country. Doroma Logistics also accepts local
                  parcel from here and destributes them in South Africa.
                </Text>
              </ContentWrapper>
            </City>
          </CityWrapper>
        </Wrapper>

        <Wrapper>
          <Title>
            Our Cargo <Bold>Expertise & Specialization</Bold>
          </Title>
          <div className="center-subText">
            <Span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, ea impedit, possimus dolorem quisquam.
            </Span>
          </div>
        </Wrapper>

        <Wrapper item>
          <Item>
            <ImageWrapper>
              <OuterWrap border>
                <InnerWrap border>
                  <IMG border src={heavyMachine} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>InLand Freight</Title>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap border>
                <InnerWrap border>
                  <IMG border src={heavyMachine} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>Air Freight</Title>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap border>
                <InnerWrap border>
                  <IMG border src={heavyMachine} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>Ocean Freight</Title>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap border>
                <InnerWrap border>
                  <IMG border src={heavyMachine} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>Ware Housing</Title>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap border>
                <InnerWrap border>
                  <IMG border src={heavyMachine} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>Logistics Services</Title>
            </ContentWrapper>
          </Item>

          <Item>
            <ImageWrapper>
              <OuterWrap border>
                <InnerWrap border>
                  <IMG border src={heavyMachine} alt="services" />
                </InnerWrap>
              </OuterWrap>
            </ImageWrapper>

            <ContentWrapper>
              <Title item>Custom Broker</Title>
            </ContentWrapper>
          </Item>
        </Wrapper>

        <Button allServices>Contact Us</Button>
      </Section>
    </Main>
  )
}

export default Home

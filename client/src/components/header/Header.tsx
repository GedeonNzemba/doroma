import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import logo from '../../images/logo_.png'
import { fill } from '../../utility/colors'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  box-shadow: -2px -4px 9px 0px rgb(0 0 0 / 75%);
  background-color: #f2f2f2;
  height: 2.4rem;
`

const LogoContainer = styled.div`
  display: block;
`
const ItemContainer = styled.nav`
  display: block;
  /* background: #fff;
  box-shadow: 0px 5px 0px #dedede; */
`

const IMG = styled.img`
  width: 5rem;

  @media (max-width: 599px) {
    width: 8rem;
  }
`

const NavItem = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`
const Item = styled.li`
  font-size: 1.1rem;
  text-transform: capitalize;

  @media (max-width: 599px) {
    font-size: 0.8rem;
  }
`

const Anchor = styled.a<{ space?: boolean }>`
  font-size: inherit;
  display: block;
  text-decoration: none;
  color: #aaa;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  transition: all 2s;
  // text-transform: inherit;
  // color: #aaa;
  // text-decoration: none;
  // position: relative;
  // transition: all 2s;
  // display: block;

  ${(props) =>
    props.space &&
    css`
      padding: 0.8rem;
    `}

  &:hover {
    color: #fff;
    z-index: 1;
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
    // z-index: -10;
    // animation: fill 1s forwards;
    // -webkit-animation: fill 1s forwards;
    // -moz-animation: fill 1s forwards;
    // opacity: 1;
  }

  &:before {
    transition: all 0.5s;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <IMG src={logo} alt="doroma logistics" />
        </Link>
      </LogoContainer>

      <ItemContainer>
        <NavItem>
          <Item>
            <Anchor space>services</Anchor>
          </Item>
          <Item>
            <Anchor space>tracking</Anchor>
          </Item>
          <Item>
            <Anchor space>booking</Anchor>
          </Item>
          <Item>
            <Anchor space>contact us</Anchor>
          </Item>
          <Item>
            <Anchor space>about us</Anchor>
          </Item>
        </NavItem>
      </ItemContainer>
    </HeaderContainer>
  )
}
export default Header

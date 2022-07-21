import { keyframes } from 'styled-components'

export enum COLOR {
  brown = '#501d22',
  black = '#010101',
}

export const fill = keyframes`
   0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
    background: ${COLOR.brown};
  }
`

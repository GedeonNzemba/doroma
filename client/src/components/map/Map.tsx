import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AfricaMap from 'react-africa-map'
import styled from 'styled-components'

const Container = styled.div`
  color: inherit;
  //position: absolute;
  top: 0;
  right: 0;
  left: 0;

  left: 50%;
  top: 50%;
  /*-moz-transform: translate(-50%, -50%); /* Firefox */
  /*-ms-transform: translate(-50%, -50%); /* IE 9 */
  /*-webkit-transform: translate(-50%, -50%); /* Safari and Chrome*/
  /*-o-transform: translate(-50%, -50%); /* Opera */
  /*transform: translate(-50%, -50%);*/
`

export default function Map() {
  return (
    <Container>
      <AfricaMap
        selection={false}
        selected={['ZA', 'CG', 'CD']}
        size={3}
        borderColor="#000"
        fillColor="#C0C0C0"
        selectColor="#56AABC"
        animated={true}
        animeStartFrom="ZA"
        animeLineColor="#282c34"
        animeTime={500}
      />
    </Container>
  )
}

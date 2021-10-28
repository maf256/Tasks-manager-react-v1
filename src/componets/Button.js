import React from 'react'
import styled from 'styled-components'

const Button = (props) => {

      // const onClick = () => {
      //       console.log(props)
      // }
      return (
            <Btn onClick={props.onClick} backcolor={props.backcolor} texxcolor={props.texxcolor}>{props.title}</Btn>
      )
}

export default Button


const Btn = styled.button`
      
      background: ${props => props.backcolor || "orange"};
      color: ${(props) => props.texxcolor || "black"};
      width: 80px;
      border: 0;
      border-radius: 5px;
      :hover {
            font-size:14px;
            font-weight: bold;
      }
`

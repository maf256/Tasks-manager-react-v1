import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useState } from 'react'

const Header = (props) => {
    // const [num, setnum] = useState(1)
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <HeaderContainer>
            {/* <button onClick={() => setnum(num + 1)}>Add number</button>
            <button onClick={() => setnum(num - 1)}>minus number</button> */}
            <h1>Tasks Manager Page</h1>
            <Button onClick={onClick} title="Add Task" texxcolor="red"></Button>
        </HeaderContainer>
    )
}


export default Header

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
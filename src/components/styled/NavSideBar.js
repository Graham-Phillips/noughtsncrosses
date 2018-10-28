import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

// styled component to keep nav button to right of drawer
const StayVisible = styled.div`
    position: absolute;
    margin-left: ${(props) => (props.isOpen) ? `${props.width}px` : 'none' };
    transition: margin .2s;
`

export const NavToggleButton = (props) => {
    return (
        <StayVisible {...props}>
            <Button variant="fab" color="primary" aria-label="add" 
                    onClick={props.toggle}>
                <i className="material-icons">menu</i>
            </Button>
        </StayVisible>
    )
}


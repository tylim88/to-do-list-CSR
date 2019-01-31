import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

class ButtonsFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            button: 'All',
        }
    }

    render() {
        const {
            state: { button },
        } = this

        const buttons = [
            { name: 'All', variant: 'outline-primary' },
            { name: 'Active', variant: 'outline-danger' },
            { name: 'Done', variant: 'outline-success' },
        ].map((element, index) => {
            const { variant, name } = element
            return (
                <Button
                    key={index}
                    variant={variant}
                    onClick={() => {
                        this.setState({ button: name })
                    }}
                    active={button === name}
                >
                    {name}
                </Button>
            )
        })
        return <ButtonGroup className="buttons-filter">{buttons}</ButtonGroup>
    }
}
export default ButtonsFilter

import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

class ButtonsFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 'All',
        }
    }

    render() {
        const {
            state: { active },
        } = this

        const buttons = [
            { button: 'All', variant: 'outline-primary' },
            { button: 'Active', variant: 'outline-danger' },
            { button: 'Done', variant: 'outline-success' },
        ].map((element, index) => {
            const { variant, button } = element
            return (
                <Button
                    key={index}
                    variant={variant}
                    onClick={() => {
                        this.setState({ active: button })
                    }}
                    active={active === button}
                >
                    {button}
                </Button>
            )
        })
        return <ButtonGroup className="buttons-filter">{buttons}</ButtonGroup>
    }
}
export default ButtonsFilter

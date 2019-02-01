import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Subscribe } from 'unstated'
import { ListContainer } from '../state'

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
        ]
        return (
            <Subscribe to={[ListContainer]}>
                {(list) => (
                    <ButtonGroup className="buttons-filter">
                        {buttons.map((element, index) => {
                            const { variant, button } = element
                            return (
                                <Button
                                    key={index}
                                    variant={variant}
                                    onClick={() => {
                                        this.setState({ active: button })
                                        list.updateFilter(button)
                                    }}
                                    active={active === button}
                                >
                                    {button + `(${list.state.stat[index]})`}
                                </Button>
                            )
                        })}
                        <Button
                            variant="dark"
                            onClick={() => {
                                list.clearDone()
                            }}
                        >
                            Clear Done
                        </Button>
                    </ButtonGroup>
                )}
            </Subscribe>
        )
    }
}
export default ButtonsFilter

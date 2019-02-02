import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Subscribe } from 'unstated'
import { ListContainer } from '../state'
import { Link } from 'react-router-dom'
class ButtonsFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: this.props.button,
        }
    }

    render() {
        const {
            state: { active },
        } = this

        const buttonsFilter = [
            {
                button: 'All',
                variant: 'outline-primary',
                route: '/',
                textColor: '',
            },
            {
                button: 'Active',
                variant: 'outline-danger',
                route: '/Active',
                textColor: 'red-text',
            },
            {
                button: 'Done',
                variant: 'outline-success',
                route: '/Done',
                textColor: 'green-text',
            },
        ]
        return (
            // subscribe to state change in store
            <Subscribe to={[ListContainer]}>
                {(list) => (
                    <ButtonGroup
                        // container for filter buttons and clear done button
                        className="buttons-filter"
                    >
                        {buttonsFilter.map((element, index) => {
                            const {
                                variant,
                                button,
                                route,
                                textColor,
                            } = element
                            return (
                                <Button
                                    // create All, Active, Done buttons
                                    key={index}
                                    variant={variant}
                                    onClick={() => {
                                        this.setState({ active: button })
                                        list.updateFilter(button)
                                    }}
                                    active={active === button}
                                    ref={(ref) => (this[button] = ref)}
                                >
                                    <Link
                                        to={route}
                                        className={
                                            'a-tag ' +
                                            (active === button
                                                ? 'white-text'
                                                : textColor)
                                        }
                                    >
                                        {button + `(${list.state.stat[index]})`}
                                    </Link>
                                </Button>
                            )
                        })}

                        <Button
                            // this is Clear Done button
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

import React, { Component } from 'react'
import ListItem from './ListItem'
import { Subscribe } from 'unstated'
import { ListContainer } from '../state'

class List extends Component {
    render() {
        return (
            <Subscribe to={[ListContainer]}>
                {(list) => (
                    <>
                        {list.state.todo.map(({ text, status }, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    text={text}
                                    status={status}
                                />
                            )
                        })}
                    </>
                )}
            </Subscribe>
        )
    }
}

export default List

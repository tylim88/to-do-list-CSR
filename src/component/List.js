import React, { Component } from 'react'
import { InputGroup } from 'react-bootstrap'
import ListItem from './ListItem'

class List extends Component {
    render() {
        return (
            <InputGroup className="mb-3">
                <ListItem />
            </InputGroup>
        )
    }
}

export default List

import React, { Component } from 'react'
import { InputGroup, Button, Form } from 'react-bootstrap'

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            deleteButton: false,
            editMode: false,
            text: '12333333333',
        }
    }

    render() {
        const {
            state: { deleteButton, editMode, text },
        } = this
        return (
            <>
                {editMode ? (
                    <Form.Control
                        as="input"
                        rows="1"
                        ref={(ref) => {
                            this.input = ref
                            this.input && this.input.focus()
                        }}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                this.setState({ editMode: false })
                            }
                        }}
                        onBlur={() => {
                            this.setState({ editMode: false })
                        }}
                        onChange={(e) =>
                            this.setState({ text: e.target.value })
                        }
                        value={text}
                    />
                ) : (
                    <>
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>

                        <Form.Control
                            plaintext
                            readOnly
                            defaultValue={text}
                            className="list-item-label"
                            onMouseEnter={() => {
                                this.setState({ deleteButton: true })
                            }}
                            onMouseLeave={() => {
                                this.setState({ deleteButton: false })
                            }}
                            onDoubleClick={(e) => {
                                e.preventDefault()
                                this.setState({ editMode: true })
                            }}
                        />

                        {deleteButton && (
                            <Button
                                variant="outline-danger"
                                className="button-delete"
                            >
                                x
                            </Button>
                        )}
                    </>
                )}
            </>
        )
    }
}

export default ListItem

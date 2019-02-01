import React, { Component } from 'react'
import { InputGroup, Button, Form } from 'react-bootstrap'

class ListItem extends Component {
    constructor(props) {
        super(props)
        const {
            props: { text, status },
        } = this
        this.state = {
            status,
            deleteButton: false,
            editMode: false,
            text,
        }
    }

    render() {
        const {
            state: { deleteButton, editMode, text },
            props: { status },
        } = this
        return (
            <InputGroup className="mb-3">
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
                            className={
                                'list-item-label ' +
                                (status === 'done' && 'list-item-done')
                            }
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
            </InputGroup>
        )
    }
}

export default ListItem

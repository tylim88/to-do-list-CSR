import React, { Component } from 'react'
import { InputGroup, Button, Form } from 'react-bootstrap'

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteButton: false,
            editMode: false,
            input: this.props.text,
        }
    }

    saveChange = (text, input, list, index) => {
        list.updateText(text, input, index)
        this.setState({ editMode: false })
    }

    initializeInput = (input, text) => {
        if (input !== text) {
            // need this or else it is harder to modify input field
            this.setState({ input: text })
        }
    }

    render() {
        const {
            state: { deleteButton, editMode, input },
            props: { list, text, done, index },
            saveChange,
            initializeInput,
        } = this
        return (
            <>
                <InputGroup
                    className="mb-1"
                    onMouseEnter={() => {
                        this.setState({ deleteButton: true })
                    }}
                    onMouseLeave={() => {
                        this.setState({ deleteButton: false })
                    }}
                    onDoubleClick={() => {
                        initializeInput(input, text)
                        this.setState({ editMode: true })
                    }}
                >
                    {editMode ? (
                        <Form.Control
                            as="input"
                            rows="1"
                            ref={(ref) => {
                                this.input = ref
                                this.input && this.input.focus()
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    saveChange(text, input, list, index)
                                } else if (e.key === 'Escape') {
                                    this.setState({ editMode: false })
                                }
                            }}
                            onBlur={() => {
                                saveChange(text, input, list, index)
                            }}
                            onChange={(e) =>
                                this.setState({ input: e.target.value })
                            }
                            value={input}
                            className="list-item"
                        />
                    ) : (
                        <>
                            <InputGroup.Prepend>
                                {console.log('list-item')}
                                <InputGroup.Text id="basic-addon1">
                                    {index + 1}
                                </InputGroup.Text>
                                <InputGroup.Checkbox
                                    aria-label="Checkbox for following text input"
                                    onChange={() => {
                                        list.toggleDone(text)
                                    }}
                                    checked={done}
                                />
                            </InputGroup.Prepend>
                            {/* 
                            this component is bugged!
                            need feedback to react bootstrap
                            <Form.Control
                                plaintext
                                readOnly
                                defaultValue={this.state.input}
                                ref={() => {}}
                                className={
                                    'list-item-label ' +
                                    (done && 'list-item-done')
                                }
                                onMouseEnter={() => {
                                    this.setState({ deleteButton: true })
                                }}
                                onMouseLeave={() => {
                                    this.setState({ deleteButton: false })
                                }}
                                onDoubleClick={() => {
                                    this.setState({ editMode: true })
                                }}
                            /> */}
                            <input
                                disabled
                                readOnly
                                type="text"
                                className={
                                    'list-item-label form-control ' +
                                    (done && 'list-item-done')
                                }
                                aria-label="Text input with checkbox"
                                value={text}
                            />
                            {deleteButton && (
                                <Button
                                    variant="outline-danger"
                                    className="button-delete"
                                    onClick={() => {
                                        list.deleteItem(text)
                                    }}
                                    onMouseEnter={() => {
                                        this.setState({ deleteButton: true })
                                    }}
                                >
                                    x
                                </Button>
                            )}
                        </>
                    )}
                </InputGroup>
            </>
        )
    }
}

export default ListItem

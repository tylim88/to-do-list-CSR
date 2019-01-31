import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    render() {
        const {
            props: { submitText },
            state: { text },
        } = this

        return (
            <InputGroup className="mb-3 input-group">
                <FormControl
                    placeholder="Click Insert or Press Enter to add Item"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => {
                        this.setState({ text: e.target.value })
                    }}
                />
                <InputGroup.Append>
                    <Button
                        variant="warning"
                        onClick={() => {
                            submitText(text)
                        }}
                    >
                        Insert
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

export default Input

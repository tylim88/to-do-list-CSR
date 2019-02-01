import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Subscribe } from 'unstated'
import { ListContainer } from '../state'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }
    onSubmitText = (list) => {
        if (this.state.text.length === 0) {
            alert('empty field')
            return
        }
        list.addItem(this.input.value)
        this.setState({ text: '' })
        this.input.value = ''
    }
    render() {
        const { onSubmitText } = this
        return (
            <Subscribe to={[ListContainer]}>
                {(list) => (
                    <InputGroup className="mb-3 input-group">
                        <FormControl
                            placeholder="Click Insert or Press Enter to add Item"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            ref={(ref) => (this.input = ref)}
                            onChange={(e) => {
                                this.setState({ text: e.target.value })
                            }}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="warning"
                                onClick={() => {
                                    onSubmitText(list)
                                }}
                            >
                                Insert
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                )}
            </Subscribe>
        )
    }
}

export default Input

import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Subscribe } from 'unstated'
import { ListContainer } from '../state'

class Input extends React.Component {
    onSubmitText = (list) => {
        list.addItem(this.input.value)
        this.input.value = ''
    }
    render() {
        const { onSubmitText } = this
        return (
            <Subscribe to={[ListContainer]}>
                {(list) => (
                    <InputGroup className="mb-3 input-group-customize">
                        <FormControl
                            placeholder="Click Insert or Press Enter to add Item"
                            ref={(ref) => (this.input = ref)}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="warning"
                                onClick={() => {
                                    onSubmitText(list)
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        onSubmitText(list)
                                    }
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

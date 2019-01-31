import React, { Component } from 'react'
import ButtonsFilter from './component/ButtonsFilter'
import Input from './component/Input'
import List from './component/List'
import './style/App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }
    submitText = (text) => {
        this.setState({ text })
    }
    render() {
        const { submitText } = this
        return (
            <div className="app">
                <h1 className="title">To Do List</h1>
                <ButtonsFilter />
                <Input submitText={submitText} />
                <List />
            </div>
        )
    }
}

export default App

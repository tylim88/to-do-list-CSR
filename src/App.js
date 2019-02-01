import React, { Component } from 'react'
import ButtonsFilter from './component/ButtonsFilter'
import Input from './component/Input'
import List from './component/List'
import { Provider } from 'unstated'
import { listContainer } from './state'
import './style/App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }
    render() {
        return (
            <Provider inject={[listContainer]}>
                <div className="app">
                    <h1 className="title">To Do List</h1>
                    <ButtonsFilter />
                    <Input />
                    <List />
                </div>
            </Provider>
        )
    }
}

export default App

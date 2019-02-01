import React, { Component } from 'react'
import ButtonsFilter from './component/ButtonsFilter'
import Input from './component/Input'
import List from './component/List'
import './style/App.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="title">To Do List</h1>
                <ButtonsFilter />
                <Input />
                <List />
            </div>
        )
    }
}

export default App

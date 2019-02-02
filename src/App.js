import React, { Component } from 'react'
import ButtonsFilter from './component/ButtonsFilter'
import Input from './component/Input'
import List from './component/List'
import { Route } from 'react-router-dom'
import { listContainer } from './state'
import './style/App.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="title">To Do List</h1>
                <Route
                    // the button will be rendered with different props depend on what route
                    exact
                    path="/"
                    render={() => {
                        //update the filter based on the route
                        listContainer.updateFilter('All')

                        return <ButtonsFilter button="All" />
                    }}
                />
                <Route
                    path="/Active"
                    render={() => {
                        listContainer.updateFilter('Active')
                        return <ButtonsFilter button="Active" />
                    }}
                />
                <Route
                    path="/Done"
                    render={() => {
                        listContainer.updateFilter('Done')
                        return <ButtonsFilter button="Done" />
                    }}
                />
                <Input />
                <List />
            </div>
        )
    }
}

export default App

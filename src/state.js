import { Container } from 'unstated'

class ListContainer extends Container {
    state = {
        todo: [],
        counter: 0,
    }

    addItem = (text) => {
        this.setState((state) => {
            state.todo.push({ text, status: 'active' })
            return state
        })
    }
}

let listContainer = new ListContainer()

export { ListContainer, listContainer }

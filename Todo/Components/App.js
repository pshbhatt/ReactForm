import React from "react"
import TodoItem from './TodoItem'
import todosdata from './todosData'
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: todosdata
        }
    }
    render(){
    let todosItems = this.state.todos.map(item=><TodoItem key={item.id} item={item}/>)
    return (
        <div className="todoCheck">
        {todosItems}
        </div>
    )
    }
}

export default App
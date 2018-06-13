import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      'task': [],
    }
  }

  

  addToDo = addedTask => {
    const toDos = this.state.task.slice();
    toDos.push(addedTask);
    this.setState({ task: toDos });
  }

  render() {
    return (
      <div>
      <TodoList task={this.state.task} />
      <ToDoForm FormHandle={this.addToDo} />
      </div>
    );
  }
}

export default App;

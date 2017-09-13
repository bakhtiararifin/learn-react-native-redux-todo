import { connect } from 'react-redux'
import TodoList from './TodoList'
import { addTodo, deleteTodo } from '../actions'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (id) => {
        dispatch(deleteTodo(id))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
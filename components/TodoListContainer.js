import { connect } from 'react-redux'
import TodoList from './TodoList'
import { loadTodos, deleteTodo } from '../actions'

const mapStateToProps = state => {
  return {
    todos: state.todos,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (id) => {
      return dispatch(deleteTodo(id))
    },
    loadTodos: () => {
      return dispatch(loadTodos())
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
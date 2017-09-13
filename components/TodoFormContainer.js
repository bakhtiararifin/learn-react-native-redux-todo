import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { addTodo } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => {
        dispatch(addTodo(todo))
    }
  }
}

const TodoFormContainer = connect(
  null,
  mapDispatchToProps
)(TodoForm)

export default TodoFormContainer
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { addTodo } from '../actions'

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      return dispatch(addTodo(todo))
    }
  }
}

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)

export default TodoFormContainer
import { connect } from 'react-redux'
import { fetchUserBoards } from '../../actions/board_actions'
import BoardsIndex from './boards_index'

const msp = (state, ownProps) => {
  // debugger
  return {
    boards: state.entities.boards,
    userId: state.entities.users[ownProps.match.params.userId]
  }
}

const mdp = (dispatch) => {
  return {
    fetchUserBoards: userId => dispatch(fetchUserBoards(userId))
  }
}

export default connect(msp, mdp)(BoardsIndex)
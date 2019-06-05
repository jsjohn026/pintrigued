import { connect } from 'react-redux'
import { fetchUserBoards } from '../../actions/board_actions'
import BoardsIndex from './boards_index'

const msp = (state, ownProps) => {
  return {
    // userId: state.entities.user  Need Entities reducer
  }
}

const mdp = (dispatch) => {
  return {
    fetchUserBoards: userId => dispatch(fetchUserBoards(userId))
  }
}

export default connect(msp, mdp)(BoardsIndex)
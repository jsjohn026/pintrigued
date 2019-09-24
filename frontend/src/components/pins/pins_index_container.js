import { connect } from 'react-redux'
import { fetchPins } from '../../actions/pin_actions'
import { fetchUserBoards } from '../../actions/board_actions'
import { openModal } from '../../actions/modal_actions'
import PinsIndex from './pins_index'

const msp = (state) => {
  const userId = state.session.user ? state.session.user.id : null
  return {
    pins: Object.values(state.entities.pins),
    userId
  }
}

const mdp = (dispatch) => {
  return {
    fetchPins: () => dispatch(fetchPins()),
    fetchUserBoards: userId => dispatch(fetchUserBoards(userId)),
    openModal: type => dispatch(openModal(type))
  }
}

export default connect(msp, mdp)(PinsIndex)
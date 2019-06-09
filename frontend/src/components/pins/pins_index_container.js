import { connect } from 'react-redux'
import { fetchPins } from '../../actions/pin_actions'
import { openModal } from '../../actions/modal_actions'
import PinsIndex from './pins_index'

const msp = (state) => {
  return {
    pins: Object.values(state.entities.pins)
  }
}

const mdp = (dispatch) => {
  return {
    fetchPins: () => dispatch(fetchPins()),
    openModal: type => dispatch(openModal(type))
  }
}

export default connect(msp, mdp)(PinsIndex)
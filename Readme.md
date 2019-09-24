# **[Pintigue](https://pintrigue-app.herokuapp.com/)**




Live Site: [Pintigue](https://pintrigue-app.herokuapp.com/)





# **Tech Stack**

<a href="https://www.mongodb.com"><img src="./common/images/mongodb-original.svg" width="50" height="50"/></a>
<a href="https://www.mongodb.com"><img src="./common/images/mongoose-logo.png" width="50" height="50"/></a>
<a href="https://expressjs.com/"><img src="./common/images/express-original.svg" width="50" height="50"/></a>
<a href="https://reactjs.org/"><img src="./common/images/react-original.svg" width="50" height="50"/></a>
<a href="https://redux.js.org/"><img src="./common/images/redux-plain.svg" width="auto" height="55"/></a>
<a href="https://nodejs.org/en/"><img src="./common/images/nodejs-original.svg" width="50" height="50"/></a>
<a href="https://react-dropzone.js.org/"><img src="./common/images/react-stack-grid-logo.png" width="50" height="50"/></a>
<a href="https://react-dropzone.js.org/"><img src="./common/images/react-drop-zone-logo.png" width="45" height="45"/></a>

Designed using the MERN (MongoDB, Express.Js, React.Js, Node.JS) solution stack along with Redux, Mongoose, React-Stack-Grid, and React Drop Zone, Pintrigue allows uers to share content from across the net for entertainment and enrichment.


#### Uploading content is quick and intuitive:

<img src="./common/videos/PintrigueDemo.gif" width="700" height="400"/>

#### 

```
class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.renderErrors = this.renderErrors.bind(this)
  }

  renderErrors() {
    const sessionErrors = this.props.errors.map((error, i) => {
      return <li key={`error-${i + 1}`}>{ error }</li>
    })

    return (
      <ul className="modal-form-error-container">
        { sessionErrors }    
      </ul>
    )
  }

  render () {
    const { modal, closeModal } = this.props
    if (!modal) return null
  
    let component
    switch (modal) {
      case 'login':
        component = <LoginForm />
        break
      case 'signup':
        component = <SignupForm />
        break
      default:
        return null
    }
    return (
      <div className="modal-background" onClick={ closeModal } >
        <div className={ `modal-child modal-${modal}` } onClick={ e => e.stopPropagation() } >
          { component }
        </div>
        <div>
          { this.renderErrors() }
        </div>
      </div>
    )
  }
}

export default Modal
```

Verifying global state via reducer:
```
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions'

const modalReducer = (state = null, action) => {
  Object.freeze(state)
  switch (action. type) {
    case OPEN_MODAL:
      return action.modal
    case CLOSE_MODAL:
      return null
    default:
      return state
  }
}

export default modalReducer
```
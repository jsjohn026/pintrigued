# **[Pintigued](https://pintrigued.herokuapp.com/)**

Users upload, save, sort, and manage images—known as pins—through collections known as pinboards.  The images can also be linked to relevant websites to provide other users access to other informative pages from the internet. 

Content found outside Pintrigued can similarly be uploaded to a board via the "Pin It" button. Pins can be saved from one user's board from another user's board via the "RePin" button.

Boards are collections that are generally thematic; grouping subject matters such as quotations, humorous imagery, travel locales, party gift ideas, etc.


Live Site: [Pintigued](https://pintrigued.herokuapp.com/)





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

#### The Item Model Schema built via Mongoose.js:

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  pinId: {
    type: Schema.Types.ObjectId,
    ref: 'pins'
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'boards'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('items', ItemSchema);
```

#### Snippet of the Modal Form for creating a new Pin:
```
class CreateItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoardName: 'Select',
      selectedBoardId: null,
      optionsOpen: false,
      itemSaved: false
    };
    this.toggleOptions = this.toggleOptions.bind(this);
    this.selectBoard = this.selectBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

...

  render() {
    const { optionsOpen, selectedBoardName, itemSaved } = this.state;
    const { userBoards, openModal, currentUser } = this.props;
    if (!currentUser) return null;
    const boardOptions = userBoards.map((board, i) => {
      return (
        <ul key={i} onClick={() => this.selectBoard(board)}>
          {board.title}
        </ul>
      );
    });

    if (itemSaved) {
      return (
        <div className='item-saved-display-container'>
          <div className='item-saved-display'>{selectedBoardName}</div>
        </div>
      );
    }
    return (
      <div className='create-pin-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='create-pin-save'>
            <div className='select-board-button'>
              <button onClick={this.toggleOptions}>
                <div className='selected-board-name'>{selectedBoardName}</div>
                <i className='fas fa-chevron-down' />
              </button>
            </div>
            <input type='submit' value='Save' />
          </div>
          {optionsOpen && (
            <div className='create-pin-board-options-container'>
              <div className='create-pin-board-options'>
                <div className='board-options-list'>{boardOptions}</div>
                <div
                  className='board-options-create-board'
                  onClick={() => openModal('createBoard')}
                >
                  <i className='fas fa-plus-circle' />
                  Create board
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}
...
```

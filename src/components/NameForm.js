import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userId: '', friendId: '', chatRoom: ''};

    this.handleUserIdChange = this.handleUserIdChange.bind(this);
    this.handleFriendIdChange = this.handleFriendIdChange.bind(this);
    this.handleChatRoomChange = this.handleChatRoomChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserIdChange(event) {
    this.setState({userId: event.target.value});
  }

  handleFriendIdChange(event) {
    this.setState({friendId: event.target.value});
  }

  handleChatRoomChange(event) {
    this.setState({chatRoom: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.chatRoom);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>
          Chat Room:
          <input type="text" value={this.state.chatRoom} onChange={this.handleChatRoomChange} />
        </span>
        {/* <span>
          Your Friend Id:
          <input type="text" value={this.state.value} onChange={this.handleFriendIdChange} />
        </span> */}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
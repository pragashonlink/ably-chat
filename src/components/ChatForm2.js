import React from 'react';
import Ably from 'ably';
import { useParams } from 'react-router-dom';

class ChatForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: '', receivedMessages: []};

    const queryParams = new URLSearchParams(window.location.search);
    const channelId = queryParams.get('q');

    this.addMessage = this.addMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    const client = new Ably.Realtime({ key: 'a_vN3g.VvxKog:8w9mbaEMq8IszFxl' });
    this.channel = client.channels.get(channelId);

    const that = this;
    this.channel.subscribe(function(message) {
      const messages = [...that.state.receivedMessages, message.data];
      that.setState({
        receivedMessages: messages
      })
    });
  }

  addMessage(event) {
    this.setState({message: event.target.value});
  }

  sendMessage(event) {
    event.preventDefault();
    this.channel.publish('event', this.state.message);
    this.setState({ message: '' });
  }

  render() {
    return (
      <div>
        <div id="messages">
          {this.state.receivedMessages.map(item => {
            return <div key={item}>{item}</div>;
          })}
        </div>
        
        <form onSubmit={this.sendMessage}>
          <span>
            <input type="text" value={this.state.message} onChange={this.addMessage} />
          </span>
          <span>
            <input type="submit" value="Send" />
          </span>
        </form>
      </div>
    );
  }
}

  export default ChatForm2;
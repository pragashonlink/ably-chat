import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NameForm from './components/NameForm';
import ChatForm from './components/ChatForm';
import ChatForm2 from './components/ChatForm2';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/form">
            <NameForm />
          </Route>
          <Route path="/chat/:channelId">
            <ChatForm />
          </Route>
          <Route path="/chatold/:channelId">
            <ChatForm2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

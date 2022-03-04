import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '80db972d-9f56-498d-a4df-caa52f752383';

const App = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="TestUser01"
      userSecret="xuandat@123"
      // userName="DatDX"
      // userSecret="DatDXreactappchat"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;

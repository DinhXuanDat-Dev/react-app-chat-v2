import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

  // Get user from localStorage
  if(!localStorage.getItem('username')) return <LoginForm />

  console.log('projectID',process.env.REACT_APP_USERSECRET);

  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName= {process.env.REACT_APP_USERNAME}
      userSecret= {process.env.REACT_APP_USERSECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;

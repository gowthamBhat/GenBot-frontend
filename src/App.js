import './App.css'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './bot/config.js'
import MessageParser from './bot/MessageParser'
import ActionProvider from './bot/ActionProvider.js'
function App() {
  return (
    <div className="App">
      <center style={{ marginTop: '100px' }}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </center>
    </div>
  )
}

export default App

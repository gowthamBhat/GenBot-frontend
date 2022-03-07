import { createChatBotMessage } from 'react-chatbot-kit'
import FileHandler from '../widgets/FileHandler'

const config = {
  initialMessages: [
    createChatBotMessage(`Hello Genpactian`),
    createChatBotMessage(`specify your email`)
  ],
  botName: 'Gen-bot',
  state: {
    username: '',
    email: ''
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E'
    },
    chatButton: {
      backgroundColor: '#5ccc9d'
    }
  },
  widgets: [
    {
      widgetName: 'fhandle',
      widgetFunc: (props) => <FileHandler {...props} />,
      mapStateToProps: ['files']
    }
  ]
}

export default config

import { createChatBotMessage } from 'react-chatbot-kit'
import FileHandler from '../widgets/FileHandler'
import StartupPrompt from './../widgets/StartupPrompt'
import StatusCheck from './../widgets/StatusCheck'
import Interview from './../widgets/Interview'

const config = {
  initialMessages: [
    createChatBotMessage(`Hello Genpacter, choose one to continue`, {
      widget: 'startupprompt'
    })
  ],
  botName: 'Gen-bot',
  state: {
    username: '',
    email: ''
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#070F1B'
    },
    chatButton: {
      backgroundColor: '#FF555F'
    }
  },
  widgets: [
    {
      widgetName: 'fhandle',
      widgetFunc: (props) => <FileHandler {...props} />
      // mapStateToProps: ['files']
    },
    {
      widgetName: 'startupprompt',
      widgetFunc: (props) => <StartupPrompt {...props} />
    },
    {
      widgetName: 'statusCheck',
      widgetFunc: (props) => <StatusCheck {...props} />
    },

    {
      widgetName: 'interview',
      widgetFunc: (props) => <Interview {...props} />
    }
  ]
}

export default config

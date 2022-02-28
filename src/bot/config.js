import { createChatBotMessage } from 'react-chatbot-kit'
import FileHandler from '../widgets/FileHandler'

const config = {
  initialMessages: [
    createChatBotMessage(`Hello Genpactian`),
    createChatBotMessage(`specify your email`)
  ],
  botName: 'Gen-bot',
  state: {
    files: null
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

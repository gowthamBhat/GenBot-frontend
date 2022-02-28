class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage
    this.setState = setStateFunc
    this.createClientMessage = createClientMessage
  }

  emailVerifyResponse = () => {
    const mes = this.createChatbotMessage(
      'verified, type "ready" to upload doc'
    )
    this.setChatBotMessage(mes)
  }
  //when the user message is irrelevant
  notFoundCaller = () => {
    const mes = this.createChatbotMessage('sorry!, say that again ')
    this.setChatBotMessage(mes)
  }
  //response for file upload
  docFileCaller = () => {
    const mes = this.createChatbotMessage('Here you can upload', {
      widget: 'fhandle'
    })
    this.setChatBotMessage(mes)
  }
  //to show number of files selected
  allFilesUploadedAlert = () => {
    const mes = this.createChatbotMessage(`all files uploaded`)
    this.setChatBotMessage(mes)
  }
  setChatBotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }))
  }
}

export default ActionProvider

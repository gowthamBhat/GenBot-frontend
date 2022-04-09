class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage
    this.setState = setStateFunc
    this.createClientMessage = createClientMessage
    this.user = ''
    this.email = ''
  }

  //response for file upload
  docFileCaller = () => {
    const mes = this.createChatbotMessage('Here you can upload', {
      widget: 'fhandle'
    })
    this.setChatBotMessage(mes)
  }
  checkStatus = () => {
    const mes = this.createChatbotMessage(
      'Checking status...,wait for few seconds',
      {
        widget: 'statusCheck'
      }
    )
    this.setChatBotMessage(mes)
  }
  //to show number of files selected
  simpleAlert = (msg) => {
    this.setChatBotMessage(this.createChatbotMessage(msg))
  }
  scheduleInterview = () => {
    const mes = this.createChatbotMessage('Select date and time', {
      widget: 'interview'
    })
    this.setChatBotMessage(mes)
  }
  setUserEmail = (email) => {
    this.email = email
    this.setState((state) => ({ ...state, email: email }))
    localStorage.setItem('botuseremail', email)
  }
  setUserName = (username) => {
    this.user = username
    localStorage.setItem('botusername', username)
    this.setState((state) => ({ ...state, username: username }))
  }

  setChatBotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }))
  }
}

export default ActionProvider

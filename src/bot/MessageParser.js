class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider
    this.state = state
  }

  parse(message) {
    let lowercaseMes = message.toLowerCase()
    if (lowercaseMes.includes('@') && lowercaseMes.includes('.com')) {
      //here it will parse the message and decides which response to give, the responses are declared in the action provider class
      this.actionProvider.emailVerifyResponse()
    } else if (lowercaseMes.includes('ready')) {
      //here it will parse the message and decides which response to give, the responses are declared in the action provider class
      this.actionProvider.docFileCaller()
    } else {
      this.actionProvider.notFoundCaller()
    }
  }
}

export default MessageParser

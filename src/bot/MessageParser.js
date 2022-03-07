class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider
    this.state = state
    // console.log(this.state, 'state from message parser')
  }

  parse(UserInputedMessage) {
    let lowercaseMes = UserInputedMessage.toLowerCase()

    if (
      this.state.messages[this.state.messages.length - 1].message ===
      'specify your email'
    ) {
      // console.log('user email', lowercaseMes)
      this.actionProvider.setUserEmail(lowercaseMes)

      this.actionProvider.simpleAlert('enter the name')
    } else if (
      this.state.messages[this.state.messages.length - 1].message ===
      'enter the name'
    ) {
      this.actionProvider.setUserName(lowercaseMes)

      this.actionProvider.simpleAlert('verified!, press "ready" to upload doc')
    } else if (lowercaseMes.includes('ready')) {
      this.actionProvider.docFileCaller()
    } else {
      this.actionProvider.simpleAlert('sorry!, say that again ')
    }
  }
}

export default MessageParser

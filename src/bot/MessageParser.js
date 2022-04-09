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
      'Enter your email for verification'
    ) {
      //verifying and saving user email address
      this.actionProvider.setUserEmail(lowercaseMes)

      this.actionProvider.simpleAlert('enter the name')
    } else if (
      this.state.messages[this.state.messages.length - 1].message ===
      'enter the name'
    ) {
      //setting username
      this.actionProvider.setUserName(lowercaseMes)

      this.actionProvider.simpleAlert('verified!, press "ready" to upload doc')
    } else if (
      this.state.messages[this.state.messages.length - 1].message ===
      'Enter your email address for status check'
    ) {
      //check status handler triggerd
      localStorage.setItem('checkStatusCandidate', lowercaseMes)

      this.actionProvider.checkStatus()
    } else if (lowercaseMes.includes('ready')) {
      //fileupload handler triggerd
      this.actionProvider.docFileCaller()
    } else {
      this.actionProvider.simpleAlert('sorry!, say that again ')
    }
  }
}

export default MessageParser

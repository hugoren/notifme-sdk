/*
TODO:
  - define notification model
  - define provider configuration
  - enqueue received notification
  - dequeue notifications and send it to provider
  - retry request in case of failure
*/

class NotifmeSdk {
  options

  constructor (options) {
    this.options = options
  }

  send (notification) {
  }
}

module.exports = NotifmeSdk
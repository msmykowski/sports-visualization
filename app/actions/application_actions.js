const Dispatcher = require('../dispatchers/dispatcher');

const ApplicationActions = {
  fetchData() {
    Dispatcher.dispatch({type: 'fetchData'});
  }
};

module.exports = ApplicationActions;

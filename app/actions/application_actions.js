const Dispatcher = require('../dispatchers/dispatcher');

const ApplicationActions = {
  fetchData() {
    Dispatcher.dispatch({type: 'fetchData'});
  },

  updateIndex(data) {
    Dispatcher.dispatch({type: 'updateIndex', data});
  }
};

module.exports = ApplicationActions;

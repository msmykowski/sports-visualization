require('../spec_helper');

describe('Application', () => {
  
  beforeEach(() => {
    const Application = require('../../../app/components/application');
    ReactDOM.render(<Application Dispatcher={Dispatcher}/>, root);
  });

});

require('babel-polyfill');
const Bootstrap = require('../bootstrap');
const React = require('react');
const StatCards = require('./stat_cards');
const types = React.PropTypes;
const useStore = require('./use_store');
const useRouter = require('./use_router');

class Application extends React.Component {
  static propTypes = {
    store: types.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {store: {data, dataIndex}} = this.props;

    return (
      <div className = "application-container">
        <header className = "application-header">
          <input className = "header-input"/>
        </header>
        <StatCards {...{data, dataIndex}} />
      </div>
    );
  }
}

Bootstrap.init(useStore(useRouter(Application)));

module.exports = useStore(useRouter(Application));

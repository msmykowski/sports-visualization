const Actions = require('../actions/application_actions');
const React = require('react');

const types = React.PropTypes;

class Router extends React.Component {
  static propTypes = {
    router: types.oneOfType([types.object, types.func])
  };

  render() {
    return null;
  }

  componentDidMount() {
    const {router} = this.props;
    if(super.componentDidMount) super.componentDidMount();
    router.configure({strict: false, html5history: true, resource: this});
    router.init();
  }

  root() {
    Actions.fetchData();
  }
}

module.exports = Router;

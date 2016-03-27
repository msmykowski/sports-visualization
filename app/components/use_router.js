const React = require('react');
const director = require('director');
const AppRouter = require('./router');
const routes = require('../../config/routes');

const useRouter = Component => class extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const props = this.props;
    const router = new director.Router(routes);

    return (
      <div>
        <AppRouter {...{router}}/>
        <Component {...props} />
      </div>
    );
  }
};

module.exports = useRouter;

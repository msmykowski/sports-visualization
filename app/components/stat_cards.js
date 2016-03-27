const React = require('react');
const StatCard = require('./stat_card');
const types = React.PropTypes;

class StatCards extends React.Component {
  static propTypes = {
    data: types.object.isRequired
  };

  render() {
    const {data} = this.props;

    const statCards = Object.keys(data).map((stat, i) => {
      const {[stat]: statData} = data;

      return (
        <StatCard key={i} {...{stat, data: statData}} />
      );
    });

    return (
      <div className="stat-cards-container">
        {statCards}
      </div>
    );
  }
}

module.exports = StatCards;

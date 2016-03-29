const Actions = require('../actions/application_actions');
const React = require('react');
const StatCard = require('./stat_card');
const types = React.PropTypes;

class StatCards extends React.Component {
  static propTypes = {
    data: types.object.isRequired,
    dataIndex: types.number.isRequired
  };

  onClick(direction) {
    const {dataIndex} = this.props;
    const newIndex = direction === 'left' ? dataIndex + 3 : dataIndex - 3;
    Actions.updateIndex(newIndex);
  }

  render() {
    const {data, dataIndex} = this.props;
    const dataToDisplay = Object.keys(data).slice(dataIndex, dataIndex + 3);
    const statCards = dataToDisplay.map((stat, i) => {
      const {[stat]: statData} = data;

      return (
        <StatCard key={i} {...{stat, data: statData}} />
      );
    });

    return (
      <div className="stat-cards-container">
        <div onClick={this.onClick.bind(this, 'left')}>Left</div>
        {statCards}
        <div onClick={this.onClick.bind(this, 'right')}>Right</div>
      </div>
    );
  }
}

module.exports = StatCards;

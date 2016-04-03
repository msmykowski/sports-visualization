const Actions = require('../actions/application_actions');
const React = require('react');
const StatCard = require('./stat_card');
const types = React.PropTypes;

function wrapIndex(max, min, index) {
  if (index > max )return (min - 1) + (index - max);
  if (index < min) return (max + 1) - (min - index);
  return index;
}

class StatCards extends React.Component {
  static propTypes = {
    data: types.object.isRequired,
    dataIndex: types.number.isRequired
  };

  onClick(direction) {
    const {dataIndex, data} = this.props;
    const maxIndex = Object.keys(data).length - 1;
    let newIndex = direction === 'left' ? wrapIndex(maxIndex, 0, dataIndex - 1) : wrapIndex(maxIndex, 0, dataIndex + 1);
    Actions.updateIndex(newIndex);
  }

  render() {
    const {data, dataIndex} = this.props;
    const statTypes = Object.keys(data);

    if (!statTypes.length) return null;

    const maxIndex = statTypes.length - 1;
    const dataToDisplay = [wrapIndex(maxIndex, 0, dataIndex - 1), dataIndex, wrapIndex(maxIndex, 0, dataIndex + 1)].map(i => statTypes[i]);

    const statCards = dataToDisplay.map((stat, i) => {
      const {[stat]: statData} = data;
      return (
        <StatCard key={i} {...{stat, data: statData}} />
      );
    });

    return (
      <div className="stat-cards-container">
        <button className="scroll-stats" onClick={this.onClick.bind(this, 'left')}> L </button>
        {statCards}
        <button className="scroll-stats" onClick={this.onClick.bind(this, 'right')}> R </button>
      </div>
    );
  }
}

module.exports = StatCards;

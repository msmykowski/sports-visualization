const React = require('react');
const types = React.PropTypes;

class PlayerListItem extends React.Component{
  static propTypes = {
    name: types.string.isRequired,
    stat: types.number.isRequired,
    ranking: types.number.isRequired
  };

  render() {
    const {name, stat, ranking} = this.props;
    return (
    <li className="player-list-item">
      <div className="player-ranking">{ranking}</div>
      <img className="player-image" src="http://lorempixel.com/40/40/sports/" />
      <span className="player-name">{name}</span>
      <span className="stat-value"><b>{stat}</b></span>
    </li>);
  }
}

module.exports = PlayerListItem;

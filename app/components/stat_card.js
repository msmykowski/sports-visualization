const React = require('react');
const PlayerListItem = require('./player_list_item');
const types = React.PropTypes;

class StatCard extends React.Component{
  static propTypes = {
    data: types.array.isRequired,
    stat: types.string.isRequired
  };

  renderPlayerList() {
    const {stat, data} = this.props;
    const playerList = data.map((player, i) => {
      const {name, [stat]: playerStat} = player;
      const ranking = i + 1;
      return <PlayerListItem key={i} {...{ranking, name, stat: playerStat}} />;
    });

    return playerList;
  }

  render() {
    const {stat} = this.props;
    const playerList = this.renderPlayerList();
      return (
        <div className="stat-card">
          <div className="stat-header">{stat}</div>
          <div className="stat-body">{playerList}</div>
        </div>
      );

  }
}

module.exports = StatCard;

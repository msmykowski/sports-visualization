require('../spec_helper');

describe('PlayerCard', () => {
  const playerListItem = require('../../../app/components/player_list_item');

  beforeEach(() => {
    const stat = 'ppg';
    const StatCard = require('../../../app/components/stat_card');
    ReactDOM.render(<StatCard {...{stat}} />, root);
  });

  it('renders the player card', () => {
    expect('.stat-card').toContainText('ppg');
  });

  it('renders the player list', () => {
    expect(playerListItem.prototype.render).toHaveBeenCalled();
  });
});

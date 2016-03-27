require('../spec_helper');

describe('playerListItem', () => {
  beforeEach(() => {
    const name = 'LeBron';
    const stat = '2';
    const PlayerListItem = require('../../../app/components/player_list_item');
    ReactDOM.render(<PlayerListItem {...{name, stat}} />, root);
  });

  it('renders the name and stat of the player', () => {
    expect('.player-list-item').toContainText('LeBron');
    expect('.player-list-item').toContainText('2');
  });
});

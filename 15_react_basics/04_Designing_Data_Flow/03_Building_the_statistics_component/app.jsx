var PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andrew Chalkley",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Holligan",
    score: 42,
    id: 3,
  },
];

function Stats(props) {
  var totalPlayers = props.players.length;
  var totalPoints = props.players.reduce(function(total, player){
    return total + player.score;
  },0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
         <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired,
};

function Header(props) {
  return(
    <div className="header">
      <Stats players={props.players} />
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={function() {props.onChange(-1);}}> - </button>
      <div className="counter-score">{props.score} </div>
      <button className="counter-action increment"onClick={function() {props.onChange(+1);}}> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,

}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
};

var Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired,
    })).isRequired,
  },

  getDefaultProps: function() {
    return {
      title: "Scoreboard",
    }
  },

  getInitialState: function() {
    return {
      players: this.props.initialPlayers,
    };
  },

  onScoreChange: function(index, delta) {
    console.log('onScoreChange', index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  render: function() {
      return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map(function(player, index) {
            return (
              <Player
                onScoreChange={function(delta) {this.onScoreChange(index,delta)}.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id}/>
            );
          }.bind(this))}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));

import MatchItem from './match-item.component';

const MatchesList = (props) => {
  const { matches } = props;

  return matches.map((match) => <MatchItem match={match} key={match.id} />);
};

export default MatchesList;

import { Card } from '@blueprintjs/core';
import MatchHeader from './match-header.component';
import MatchScore from './match-score.component';

const MatchItem = (props) => {
  const { match } = props;
  const isFinished = match.status === 'finished';

  return (
    <Card key={match.id} className="!py-1 px-3 rounded-sm mb-3">
      <MatchHeader match={match} isFinished={isFinished} />
      <MatchScore match={match} isFinished={isFinished} />
    </Card>
  );
};
export default MatchItem;

import { Row, Col } from 'react-grid-system';

import TeamItem from './team-item.component';

const Teams = (props) => {
  const { teams } = props;

  return (
    <Row style={{ alignItems: 'stretch' }}>
      {teams.map((team) => (
        <TeamItem team={team} />
      ))}
    </Row>
  );
};

export default Teams;

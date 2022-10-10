import { Row } from 'react-grid-system';

import TeamItem from './team-item.component';

const Teams = (props) => {
  const { teams } = props;

  return (
    <Row style={{ alignItems: 'stretch' }}>
      {teams.map((team) => (
        <TeamItem key={team.id} team={team} />
      ))}
    </Row>
  );
};

export default Teams;

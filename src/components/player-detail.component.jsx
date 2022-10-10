import { Card } from '@blueprintjs/core';
import { Col, Row } from 'react-grid-system';

const PlayerDetail = (props) => {
  const { player } = props;

  return (
    <Card className="mb-2">
      <Row>
        <Col sm={6}>
          <h2 className="mb-1">{player.name}</h2>

          <ul className="list-none text1 pl-0 p-2 m-0">
            {player.age && (
              <li>
                Age <b>{player.age}</b>
              </li>
            )}

            {player.birthday && (
              <li>
                Birthday <b>{player.birthday}</b>
              </li>
            )}

            {player.nationality && (
              <li>
                Country <b>{player.nationality}</b>
              </li>
            )}

            {(player.first_name || player.last_name) && (
              <li>
                Full Name <b>{`${player.first_name} ${player.last_name}`}</b>
              </li>
            )}
          </ul>
        </Col>
        {player.image_url && (
          <Col>
            <a href={`${player.image_url}`} target="_blank" rel="noreferrer">
              <img
                className="w-full"
                src={`${player.image_url}`}
                alt={player.name}
              />
            </a>
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default PlayerDetail;

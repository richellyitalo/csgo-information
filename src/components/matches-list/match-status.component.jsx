import { Icon, IconSize } from '@blueprintjs/core';
import { Col, Row } from 'react-grid-system';
import DateFormat from '../date-format.component';

const MatchStatus = (props) => {
  const { match, games, opponentHome, opponentAway, isFinished } = props;
  const { status, begin_at, end_at } = match;
  const isComming = status === 'not_started';
  const isRunning = status === 'running';

  return (
    <>
      <div>
        {!isComming &&
          games.map((game) => {
            return (
              <Row key={game.id} className="text-center">
                <Col className="text-center">
                  {isFinished &&
                    (game.winner.id === opponentHome.id ? (
                      <Icon icon="dot" intent="success" size={IconSize.LARGE} />
                    ) : (
                      <Icon icon="dot" intent="danger" size={IconSize.LARGE} />
                    ))}
                </Col>
                <Col>{game.status}</Col>
                <Col className="text-center">
                  {isFinished &&
                    (game.winner.id === opponentAway.id ? (
                      <Icon icon="dot" intent="success" size={IconSize.LARGE} />
                    ) : (
                      <Icon icon="dot" intent="danger" size={IconSize.LARGE} />
                    ))}
                </Col>
              </Row>
            );
          })}
      </div>

      {!isRunning && (
        <p className="text-center border-0 border-t border-solid">

          {isFinished && 'Finished at'}
          {isComming && 'Begin at'}

          <br />

          <Icon icon="calendar" />

          {isFinished ? (
            <DateFormat date={end_at} />
          ) : (
            <DateFormat date={begin_at} />
          )}
        </p>
      )}
    </>
  );
};

export default MatchStatus;

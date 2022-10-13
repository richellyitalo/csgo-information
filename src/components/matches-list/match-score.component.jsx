import { Icon } from '@blueprintjs/core';
import { Col, Row } from 'react-grid-system';
import MatchStatus from './match-status.component';
import cs from 'classnames';

const MatchScore = (props) => {
  const { match, isFinished } = props;
  const { number_of_games, opponents, live, games, winner, results } = match;
  const opponentHome = opponents[0].opponent;
  const opponentAway = opponents[1].opponent;

  const ScoreComponent = () => {
    return isFinished ? (
      <b className="mt-3 block">
        <span
          className={cs('text-lg', {
            'text-green-600': winner && opponentHome.id === winner.id,
            'text-red-600': winner && opponentHome.id !== winner.id,
          })}
        >
          {results[0].score}
        </span>
        <Icon icon="small-cross" />

        <span
          className={cs('text-lg', {
            'text-green-600': winner && opponentAway.id === winner.id,
            'text-red-600': winner && opponentAway.id !== winner.id,
          })}
        >
          {results[1].score}
        </span>
      </b>
    ) : (
      <b className="mt-3 block">
        <Icon icon="small-cross" />
      </b>
    );
  };

  return (
    <>
      <h5 className="mb-1 mt-0 p-1 border-t border-0 border-solid border-stone-400 text-center">
        Best of{' '}
        <small className="bg-slate-700 text-yellow-300 px-1 rounded-sm">
          {number_of_games}
        </small>
      </h5>

      <Row>
        <Col sm={4} className="text-center">
          {opponentHome.image_url && (
            <>
              <img
                src={`${opponentHome.image_url}`}
                height={35}
                alt={`${opponentHome.name}`}
              />
              <br />
            </>
          )}
          <b>{opponentHome.name}</b>
        </Col>

        <Col sm={4} className="text-center">
          <ScoreComponent />
          {live.url && (
            <div className="text-center">
              <a
                href={`${live.url}`}
                target="_blank"
                rel="noreferrer"
                className=""
              >
                Watch Live
              </a>
            </div>
          )}
        </Col>

        <Col sm={4} className="text-center">
          {opponentAway.image_url && (
            <img
              src={`${opponentAway.image_url}`}
              height={35}
              alt={`${opponentAway.name}`}
            />
          )}
          <br />
          <b>{opponentAway.name}</b>
        </Col>
      </Row>

      <MatchStatus
        games={games}
        isFinished={isFinished}
        opponentHome={opponentHome}
        opponentAway={opponentAway}
        match={match}
      />
    </>
  );
};

export default MatchScore;

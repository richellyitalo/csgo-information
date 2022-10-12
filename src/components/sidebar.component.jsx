import { Card, Icon } from '@blueprintjs/core';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import api from '../utils/api';

const Sidebar = () => {
  const [currentMatches, setCurrentMatches] = useState([]);
  const [nextMatches, setNextMatches] = useState([]);
  const [lastMatches, setLastMatches] = useState([]);

  useEffect(() => {
    Promise.all([
      api.get('matches/running?per_page=3'),
      api.get('matches/upcoming?per_page=3'),
      api.get('matches/past?per_page=3'),
    ]).then((response) => {
      setCurrentMatches(response[0].data);
      setNextMatches(response[1].data);
      setLastMatches(response[2].data);
      //   for (const res of response) {
      //   const {
      //     data: { login, bio }
      //   } = res;
      //   setUsers((state) => [...state, { login, bio }]);
      //   }
    });
  }, []);

  return (
    <aside>
      <h3>Current matches</h3>
      {lastMatches.map((match) => {
        return (
          <Card
            key={match.id}
            className=" py-2 px-3 rounded-sm mb-2"
          >
            <Row>
              <Col sm={match.league.image_url ? 9 : 12}>
                <h3 className="m-0">
                  {match.league.url ? (
                    <a
                      href={`${match.league.url}`}
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      League: {match.league.name}
                    </a>
                  ) : (
                    <>League: ${match.league.name}</>
                  )}
                </h3>
              </Col>
              {match.league.image_url && (
                <Col className="text-right">
                  <img
                    src={`${match.league.image_url}`}
                    alt={`${match.league.name}`}
                    // height={30}
                    className="w-auto max-w-full max-h-8"
                  />
                </Col>
              )}
            </Row>
            <h5 className="mb-1 mt-0 p-1 border-t border-0 border-solid border-stone-400 text-center">
              Best of{' '}
              <small className="bg-slate-700 text-yellow-300 px-1 rounded-sm">
                {match.number_of_games}
              </small>
            </h5>
            <Row>
              <Col sm={4} className="text-center">
                {match.opponents[0].opponent.image_url && (
                  <>
                    <img
                      src={`${match.opponents[0].opponent.image_url}`}
                      height={50}
                      alt={`${match.opponents[0].opponent.name}`}
                    />
                    <br />
                  </>
                )}
                <b>{match.opponents[0].opponent.name}</b>
              </Col>
              <Col sm={4} className="text-center">
                <b className="mt-3 block">
                  <Icon icon="small-cross" />
                </b>

                {match.live.url && (
                  <div className="text-center">
                    <a
                      href={`${match.live.url}`}
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
                {match.opponents[1].opponent.image_url && (
                  <img
                    src={`${match.opponents[1].opponent.image_url}`}
                    height={50}
                    alt={`${match.opponents[1].opponent.name}`}
                  />
                )}
                <br />
                <b>{match.opponents[1].opponent.name}</b>
              </Col>
            </Row>

            <div>
              {match.games.map((game) => {
                return (
                  <Row key={game.id} className="text-center">
                    <Col></Col>
                    <Col>{game.status}</Col>
                    {/* {game.finished && game.winner.id} */}
                    <Col></Col>
                  </Row>
                );
              })}
            </div>
          </Card>
        );
      })}
    </aside>
  );
};

export default Sidebar;

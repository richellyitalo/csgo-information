import { Card, Icon, IconSize } from '@blueprintjs/core';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import api from '../utils/api';
import MatchesList from './matches-list/matches-list.component';

const Sidebar = () => {
  const [currentMatches, setCurrentMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [pastMatches, setPastMatches] = useState([]);

  useEffect(() => {
    Promise.all([
      api.get('matches/running?per_page=2'),
      api.get('matches/upcoming?per_page=2'),
      api.get('matches/past?per_page=2'),
    ]).then((response) => {
      setCurrentMatches(response[0].data);
      setUpcomingMatches(response[1].data);
      setPastMatches(response[2].data);

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
      {currentMatches.length > 0 && (
        <>
          <h3 className="mb-1">Current matches</h3>
          <MatchesList matches={currentMatches} />
        </>
      )}

      {upcomingMatches.length > 0 && (
        <>
          <h3 className="mb-1">Upcoming matches</h3>
          <MatchesList matches={upcomingMatches} />
        </>
      )}

      {pastMatches.length > 0 && (
        <>
          <h3 className="mb-1">Past matches</h3>
          <MatchesList matches={pastMatches} />
        </>
      )}
    </aside>
  );
};

export default Sidebar;

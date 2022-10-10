import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import api from './utils/api';
import Teams from './components/teams.component';
import SearchInputTeam from './components/search-input-team.component';
import { Spinner, SpinnerSize } from '@blueprintjs/core';

function App() {
  const [isRequesting, setIsRequesting] = useState(false);
  const [teams, setTeams] = useState([]);

  const [searchParams, setSearchParams] = useState({
    location: 'BR',
    name: '',
  });

  useEffect(() => {
    setIsRequesting(true);

    async function fetchData() {
      try {
        const params = {
          'search[location]': searchParams.location,
          'search[name]': searchParams.name,
          page: 1,
          sort: '-modified_at',
          per_page: 12,
        };

        const response = await api.get('/teams', { params });
        // console.log(response.headers); // total pages ...
        setTeams(response.data);
      } catch (error) {
        // TODO: add message in modal
        alert(error);
      }

      setIsRequesting(false);
    }

    fetchData();
  }, [searchParams]);

  const onSearchSubmitHandle = (values) => {
    setSearchParams({
      location: values.location,
      name: values.name,
    });
  };

  return (
    <Container className="app mt-5">
      <h1 className="mb-0 text-yellow-800">
        CSGO Information <small>by @richellyitalo</small>
      </h1>
      <hr className="my-4" />
      <Row>
        <Col sm={8}>
          <SearchInputTeam onSubmitHandle={onSearchSubmitHandle} />

          {isRequesting ? (
            <Spinner size={SpinnerSize.SMALL} />
          ) : teams.length === 0 ? (
            <p className="p-5 bg-slate-100">Sorry. No results found</p>
          ) : (
            <Teams teams={teams} />
          )}
        </Col>
        <Col sm={4}>
          <h2>Last Matches</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

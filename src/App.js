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
      <Row>
        <Col sm={8}>
          <div className="mb-5">
            <SearchInputTeam onSubmitHandle={onSearchSubmitHandle} />
          </div>

          {isRequesting ? (
            <Spinner size={SpinnerSize.SMALL} />
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

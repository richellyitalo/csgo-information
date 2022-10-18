import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import api from './utils/api';
import Teams from './components/teams.component';
import SearchInputTeam from './components/search-input-team.component';
import { Spinner, SpinnerSize } from '@blueprintjs/core';
import Header from './components/header.component';
import Sidebar from './components/sidebar.component';
import Pagination from './components/pagination.component';

function App() {
  const [isRequesting, setIsRequesting] = useState(false);
  const [teams, setTeams] = useState([]);
  const [total, setTotal] = useState(null);

  const [searchParams, setSearchParams] = useState({
    location: null,
    name: '',
    currentPage: 1,
    perPage: 12,
  });

  useEffect(() => {
    setIsRequesting(true);

    async function fetchData() {
      try {
        const params = {
          'search[name]': searchParams.name,
          page: searchParams.currentPage,
          sort: '-modified_at',
          per_page: searchParams.perPage,
        };

        if (searchParams.location !== '' && searchParams.location !== null) {
          params['search[location]'] = searchParams.location;
        }

        
        const response = await api.get('/teams', { params });
        setTotal(parseInt(response.headers['x-total']));

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
      ...searchParams,
      location: values.location,
      name: values.name,
      currentPage: 1,
    });
  };

  const onCurrentChange = (page) => {
    setSearchParams({
      ...searchParams,
      currentPage: page,
    });
  };

  return (
    <Container className="app mt-5 pb-10">
      <Header />

      <Row>
        <Col sm={8}>
          <SearchInputTeam onSubmitHandle={onSearchSubmitHandle} />

          <Pagination
            total={total}
            currentPage={searchParams.currentPage}
            perPage={searchParams.perPage}
            limitButtonsPage={4}
            onHandleCurrentChange={onCurrentChange}
          />

          {isRequesting ? (
            <Spinner size={SpinnerSize.SMALL} />
          ) : teams.length === 0 ? (
            <p className="p-5 bg-slate-100">Sorry. No results found</p>
          ) : (
            <Teams teams={teams} />
          )}
        </Col>
        <Col sm={4}>
          <Sidebar />
        </Col>
      </Row>

      {/* -------- pagination */}
    </Container>
  );
}

export default App;

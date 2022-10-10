import {
  Button,
  ControlGroup,
  HTMLSelect,
  InputGroup,
} from '@blueprintjs/core';
import { useRef, useState } from 'react';

const SearchInputTeam = (props) => {
  const { onSubmitHandle } = props;

  const OPTIONS = {
    ALL_WORLD: {
      label: 'All World',
      slug: '',
    },
    BRAZIL: {
      label: 'Brazil',
      slug: 'BR',
    },
    USA: {
      label: 'United States',
      slug: 'US',
    },
    POLONY: {
      label: 'Polony',
      slug: 'PL',
    },
  };

  const [countryLocation, setCountryLocation] = useState(OPTIONS.BRAZIL.slug);

  const searchInputRef = useRef();

  const optionsCountry = Object.keys(OPTIONS).map((key) => {
    return {
      label: OPTIONS[key].label,
      value: OPTIONS[key].slug,
    };
  });

  const onCountryChangeHandle = (event) => {
    setCountryLocation(event.target.value);
  };

  const onClickSubmit = (values) => {
    onSubmitHandle({
      location: countryLocation,
      name: searchInputRef.current.value,
    });
  };

  return (
    <ControlGroup>
      <HTMLSelect
        options={optionsCountry}
        onChange={onCountryChangeHandle}
        value={countryLocation}
      />
      <InputGroup
        inputRef={searchInputRef}
        placeholder="Enter with a team name..."
        onSubmit={onClickSubmit}
      />
      <Button icon="arrow-right" onClick={onClickSubmit} />
    </ControlGroup>
  );
};

export default SearchInputTeam;

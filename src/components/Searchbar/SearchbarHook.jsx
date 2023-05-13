import PropTypes from 'prop-types';
import { ReactComponent as SearchButton } from '../icons/SearchButton.svg';
// import { Component } from 'react';
import { useState } from 'react';

import {
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  FormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('введите');
    }
    console.log(query);
    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <header className="searchbar">
      <SearchForm className="form" onSubmit={handleSubmit}>
        <SearchFormButton type="submit" className="button">
          <ButtonLabel>
            <SearchButton />
          </ButtonLabel>
        </SearchFormButton>

        <FormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

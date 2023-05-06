// import PropTypes from 'prop-types';
import { ReactComponent as SearchButton } from '../icons/SearchButton.svg';
import { Component } from 'react';

import {
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  FormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('введите');
    }
    this.props.onSubmit(this.state.query.trim());
    console.log(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <ButtonLabel>
              <SearchButton />
            </ButtonLabel>
          </SearchFormButton>
          {/* <SearchFormButton type="submit" className="button">
            <ButtonLabel className="button-label">Search</ButtonLabel>
          </SearchFormButton> */}

          <FormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </header>
    );
  }
}

// Searchbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node,
// };
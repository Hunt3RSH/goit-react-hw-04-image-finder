import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';

class Searchbar extends Component {
  state = { value: '' };

  onHandleInput = e => {
    this.setState({ value: e.currentTarget.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      toast.info('Enter your search data 💖');
      return;
    }
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <ToastContainer />
        <SearchForm onSubmit={this.onHandleSubmit}>
          <SearchFormBtn type="submit">
            <FaSearch size="25" />
            <SearchFormLabel> Search</SearchFormLabel>
          </SearchFormBtn>
          <SearchFormInput
            type="text"
            name="search"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleInput}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;

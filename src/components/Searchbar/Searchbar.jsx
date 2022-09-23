import React from 'react';
import { useState } from 'react';

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

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onHandleInput = e => {
    setValue(e.currentTarget.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.info('Enter your search data 💖');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchbarHeader>
      <ToastContainer />
      <SearchForm onSubmit={onHandleSubmit}>
        <SearchFormBtn type="submit">
          <FaSearch size="25" />
          <SearchFormLabel> Search</SearchFormLabel>
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          name="search"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleInput}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;

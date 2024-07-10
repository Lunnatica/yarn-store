import React, { ChangeEvent, memo, useState } from 'react';

import useDebounce from '../../hooks/useDebounce';
import SearchIcon from '../../icons/search.svg';
import { StyledVisuallyHiddenLabel } from '../StyledVisuallyHiddenComponents';
import { StyledForm, StyledIconWrapper, StyledSearchField } from './StyledSearchBar';

interface SearchBarProps {
  fetchProducts: (query?: string) => Promise<void>;
}

export const SearchBar: React.FC<SearchBarProps> = memo(({ fetchProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedFetchProducts = useDebounce(fetchProducts, 500);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    debouncedFetchProducts(e.target.value);
  };

  return (
    <StyledForm>
      <StyledSearchField
        id="search"
        type="text"
        placeholder="Search products by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <StyledVisuallyHiddenLabel htmlFor="search">Search</StyledVisuallyHiddenLabel>
      <StyledIconWrapper>
        <SearchIcon />
      </StyledIconWrapper>
    </StyledForm>
  );
});

SearchBar.displayName = 'SearchBar';

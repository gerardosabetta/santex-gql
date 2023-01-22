import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('displays the current search term', () => {
    const term = 'test';
    const { getByTestId } = render(
      <SearchBar term={term} onSearch={() => {}} />
    );
    expect(getByTestId('search-bar')).toHaveValue(term);
  });

  it('calls the onSearch function with the updated search term when the input value changes', () => {
    const onSearch = jest.fn();
    const { getByTestId } = render(<SearchBar term="" onSearch={onSearch} />);
    const searchBar = getByTestId('search-bar');
    fireEvent.change(searchBar, { target: { value: 'test' } });
    expect(onSearch).toHaveBeenCalledWith('test');
  });

  it('passes through additional props to the input element', () => {
    const { getByTestId } = render(
      <SearchBar term="" onSearch={() => {}} placeholder="Search" />
    );
    const searchBar = getByTestId('search-bar');
    expect(searchBar).toHaveAttribute('placeholder', 'Search');
  });
});

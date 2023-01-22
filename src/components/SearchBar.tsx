import styled from 'styled-components';

type Props = {
  className?: string;
  term: string;
  onSearch: (term: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchBar = styled(({ className, term, onSearch, ...props }: Props) => {
  return (
    <input
      className={className}
      value={term}
      onChange={(e) => onSearch(e.target.value)}
      data-testid="search-bar"
      {...props}
    />
  );
})`
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  margin: 1rem 0;
  box-sizing: border-box;
  outline: none;
`;

export default SearchBar;

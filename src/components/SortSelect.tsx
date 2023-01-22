import styled from 'styled-components';
import { SORTING_OPTIONS } from '../constants';

type Props = {
  sort: typeof SORTING_OPTIONS[0];
  setSort: (sort: typeof SORTING_OPTIONS[0]) => void;
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const SortSelect = styled(({ sort, setSort, className, ...props }: Props) => {
  return (
    <select
      className={className}
      value={sort.displayName}
      onChange={(e) => {
        setSort(
          SORTING_OPTIONS.find(
            (option) => option.displayName === e.target.value
          ) as typeof SORTING_OPTIONS[0]
        );
      }}
      {...props}
    >
      {SORTING_OPTIONS.map((option) => {
        return (
          <option key={option.displayName} value={option.displayName}>
            {option.displayName}
          </option>
        );
      })}
    </select>
  );
})`
  margin: 1rem 0;
  outline: none;
  border: none;
`;

export default SortSelect;

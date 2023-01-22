import { render, fireEvent } from '@testing-library/react';
import SortSelect from './SortSelect';
import { SORTING_OPTIONS } from '../constants';

describe('SortSelect', () => {
  it('displays the current sorting option', () => {
    const sort = SORTING_OPTIONS[0];
    const { getByDisplayValue } = render(
      <SortSelect sort={sort} setSort={() => {}} />
    );
    expect(getByDisplayValue(sort.displayName)).toBeInTheDocument();
  });

  it('calls the setSort function with the updated sorting option when the select value changes', () => {
    const setSort = jest.fn();
    const { getByDisplayValue } = render(
      <SortSelect sort={SORTING_OPTIONS[0]} setSort={setSort} />
    );
    const select = getByDisplayValue(SORTING_OPTIONS[0].displayName);
    fireEvent.change(select, {
      target: { value: SORTING_OPTIONS[1].displayName },
    });
    expect(setSort).toHaveBeenCalledWith(SORTING_OPTIONS[1]);
  });

  it('passes through additional props to the select element', () => {
    const { getByDisplayValue } = render(
      <SortSelect sort={SORTING_OPTIONS[0]} setSort={() => {}} required />
    );
    const select = getByDisplayValue(SORTING_OPTIONS[0].displayName);
    expect(select).toHaveAttribute('required');
  });

  it('renders all the sorting options', () => {
    const { container } = render(
      <SortSelect sort={SORTING_OPTIONS[0]} setSort={() => {}} />
    );
    SORTING_OPTIONS.forEach((option) => {
      expect(
        container.querySelector(`option[value="${option.displayName}"]`)
      ).toBeInTheDocument();
    });
  });
});

import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('displays the current page and total pages', () => {
    const { getByText } = render(
      <Pagination
        handleNextPage={() => {}}
        handlePreviousPage={() => {}}
        currentPage={2}
        totalPages={5}
      />
    );
    expect(getByText('Page 2 of 5')).toBeInTheDocument();
  });

  it('disables the "previous" button on the first page', () => {
    const { getByLabelText } = render(
      <Pagination
        handleNextPage={() => {}}
        handlePreviousPage={() => {}}
        currentPage={1}
        totalPages={5}
      />
    );
    const previousButton = getByLabelText('Previous page');
    expect(previousButton).toBeDisabled();
  });

  it('disables the "next" button on the last page', () => {
    const { getByLabelText } = render(
      <Pagination
        handleNextPage={() => {}}
        handlePreviousPage={() => {}}
        currentPage={5}
        totalPages={5}
      />
    );
    const nextButton = getByLabelText('Next page');
    expect(nextButton).toBeDisabled();
  });

  it('calls the handleNextPage function when the "next" button is clicked', () => {
    const handleNextPage = jest.fn();
    const { getByLabelText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        handlePreviousPage={() => {}}
        handleNextPage={handleNextPage}
      />
    );
    getByLabelText('Next page').click();
    expect(handleNextPage).toHaveBeenCalled();
  });

  it('calls the handlePreviousPage function when the "previous" button is clicked', () => {
    const handlePreviousPage = jest.fn();
    const { getByLabelText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        handleNextPage={() => {}}
        handlePreviousPage={handlePreviousPage}
      />
    );
    getByLabelText('Previous page').click();
    expect(handlePreviousPage).toHaveBeenCalled();
  });
});

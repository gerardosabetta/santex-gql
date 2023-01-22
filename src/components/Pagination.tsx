import styled from 'styled-components';

type Props = {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  className?: string;
};

const Pagination = styled(
  ({
    currentPage,
    totalPages,
    handleNextPage,
    handlePreviousPage,
    className,
  }: Props) => {
    return (
      <div className={className}>
        <PaginationButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          &lt;
        </PaginationButton>
        Page {currentPage} of {totalPages}
        <PaginationButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          &gt;
        </PaginationButton>
      </div>
    );
  }
)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const PaginationButton = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 0.5rem;
  color: #333;
  ${(props: { disabled: boolean }) => {
    if (props.disabled) {
      return `
        opacity: 0.5;
        cursor: not-allowed;
      `;
    }
  }}
`;

export default Pagination;

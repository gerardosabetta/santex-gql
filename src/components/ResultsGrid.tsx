import styled from 'styled-components';

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  @media (max-width: 768px) {
    grid-template-columns: minmax(200px, 1fr) 2fr;
  }
`;

export default ResultsGrid;

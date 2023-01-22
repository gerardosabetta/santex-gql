import { useState } from 'react';
import { useSearchProductsQuery } from './graphql/queries';
import { PAGE_SIZE, SORTING_OPTIONS } from './constants';

import Header from './components/Header';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import Container from './components/Container';
import Spinner from './components/Spinner';
import NoResults from './components/NoResults';
import ResultsGrid from './components/ResultsGrid';
import FacetList from './components/FacetList';
import ProductList from './components/ProductList';
import SortSelect from './components/SortSelect';
import useDebounce from './hooks/useDebounce';

function App() {
  const [term, setTerm] = useState('');
  const [skip, setSkip] = useState(0);
  const [facetValueIds, setFacetValueIds] = useState<string[]>([]);
  const [sort, setSort] = useState(SORTING_OPTIONS[2]);
  const deferredTerm = useDebounce(term, 200); // useDeferredValue is not available in React 17
  const { data, loading } = useSearchProductsQuery({
    variables: {
      term: deferredTerm,
      take: PAGE_SIZE,
      skip,
      sort: sort.value,
      facetValueIds,
    },
  });

  const currentPage = skip / PAGE_SIZE + 1;
  const totalPages = Math.ceil(data?.search.totalItems || 0 / PAGE_SIZE);

  const handleNextPage = () => {
    setSkip(skip + PAGE_SIZE);
  };

  const handlePreviousPage = () => {
    setSkip(skip - PAGE_SIZE);
  };

  const handleSearch = (searchValue: string) => {
    setTerm(searchValue);
    setSkip(0);
  };

  return (
    <>
      <Header />
      <Container>
        <SearchBar
          onSearch={handleSearch}
          term={term}
          placeholder="Search Products"
        />
        {loading ? (
          <Spinner data-testid="spinner-product-results" />
        ) : data?.search.totalItems === 0 ? (
          <NoResults>
            No results found for <strong>{term}</strong>
          </NoResults>
        ) : (
          <ResultsGrid>
            <aside>
              <label>
                <strong>Sort:</strong>
                <br />
                <SortSelect sort={sort} setSort={setSort} />
              </label>

              <div>
                <strong>Filters:</strong>
                <FacetList
                  facetValues={data?.search.facetValues || []}
                  facetValueIds={facetValueIds}
                  setFacetValueIds={(ids) => {
                    setFacetValueIds(ids);
                    setSkip(0);
                  }}
                />
              </div>
            </aside>
            <main>
              <ProductList items={data?.search.items || []} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
              />
            </main>
          </ResultsGrid>
        )}
      </Container>
    </>
  );
}

export default App;

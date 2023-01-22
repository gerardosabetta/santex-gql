import { render } from '@testing-library/react';
import FacetList from './FacetList';
import { FacetValueResult } from '../generated/types';

describe('FacetList', () => {
  const mockFacetValues = [
    { facetValue: { id: '1', name: 'Color' }, count: 5 },
    { facetValue: { id: '2', name: 'Size' }, count: 2 },
    { facetValue: { id: '3', name: 'Brand' }, count: 3 },
  ] as FacetValueResult[];

  const mockSetFacetValueIds = jest.fn();

  test('renders all facet values with correct name and count', () => {
    const { getByText } = render(
      <FacetList
        facetValues={mockFacetValues}
        facetValueIds={[]}
        setFacetValueIds={mockSetFacetValueIds}
      />
    );

    expect(getByText('Color (5)')).toBeInTheDocument();
    expect(getByText('Size (2)')).toBeInTheDocument();
    expect(getByText('Brand (3)')).toBeInTheDocument();
  });

  test('checks the correct facet value checkbox when already selected', () => {
    const { getByRole } = render(
      <FacetList
        facetValues={mockFacetValues}
        facetValueIds={['1']}
        setFacetValueIds={mockSetFacetValueIds}
      />
    );

    const colorCheckbox = getByRole('checkbox', { name: /color \(5\)/i });
    expect(colorCheckbox).toBeChecked();
  });

  test('adds selected facet value to ids and calls setFacetValueIds', () => {
    const { getByRole } = render(
      <FacetList
        facetValues={mockFacetValues}
        facetValueIds={[]}
        setFacetValueIds={mockSetFacetValueIds}
      />
    );

    getByRole('checkbox', {
      name: /color \(5\)/i,
    }).click();
    expect(mockSetFacetValueIds).toHaveBeenCalledWith(['1']);
  });

  test('removes unselected facet value from ids and calls setFacetValueIds', () => {
    const { getByRole } = render(
      <FacetList
        facetValues={mockFacetValues}
        facetValueIds={['1']}
        setFacetValueIds={mockSetFacetValueIds}
      />
    );

    getByRole('checkbox', {
      name: /color \(5\)/i,
    }).click();

    expect(mockSetFacetValueIds).toHaveBeenCalledWith([]);
  });
});

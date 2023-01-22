import Facet from './Facet';
import { FacetValueResult } from '../generated/types';

type Props = {
  facetValues: FacetValueResult[];
  facetValueIds: string[];
  setFacetValueIds: (ids: string[]) => void;
};
const FacetList = ({ facetValues, facetValueIds, setFacetValueIds }: Props) => {
  return (
    <>
      {facetValues.map(({ facetValue, count }) => {
        return (
          <Facet data-testid="facet" key={facetValue.id}>
            <input
              type="checkbox"
              checked={facetValueIds.includes(facetValue.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setFacetValueIds([...facetValueIds, facetValue.id]);
                } else {
                  setFacetValueIds(
                    facetValueIds.filter((id) => id !== facetValue.id)
                  );
                }
              }}
            />
            {facetValue.name} ({count})
          </Facet>
        );
      })}
    </>
  );
};

export default FacetList;

import { Key } from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import useAllProperty from "../../hook/useAllProperty";
import SearchingHous from "./SearchingHous";
import useSearchingProperty from "../../hook/useSearchingProperty";

const SearchingHouse = () => {
  const [allProperty] = useAllProperty();
  const [availableProperty] = useSearchingProperty();
  const lastSearchingProperty = availableProperty[availableProperty.length - 1];

  const searchingAvailableProperty = allProperty.filter(
    (availableProperty: { location: string; bedroom: number }) =>
      availableProperty?.location
        ?.toLowerCase()
        .includes(lastSearchingProperty?.location?.toLowerCase()) &&
      availableProperty?.bedroom == lastSearchingProperty?.bedroom
  );

  return (
    <>
      <div>
        <div className="mt-24">
          <SectionTitle first="Available" second="For You"></SectionTitle>
          <div className="max-w-7xl mx-auto p-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
            {searchingAvailableProperty.map(
              (
                searching: {
                  name: string;
                  location: string;
                  description: string;
                  rent_price: number;
                  available_quantity: string;
                  image: string;
                  bedroom: number;
                  bathroom: number;
                  area: number;
                  agent_name: string;
                  agent_image: string; // useEffect(() => {
                },
                idx: Key | null | undefined
              ) => (
                <SearchingHous key={idx} searching={searching}></SearchingHous>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchingHouse;

import React, { useEffect } from "react";
import {
  VerticalResults,
  ResultsCount,
  AppliedFilters,
  StandardCard,
  DirectAnswer,
} from "@yext/search-ui-react";
import ClothingCard from "../cards/ClothingCard";

import usePageSetupEffect from "../hooks/defaultInitialSearch";
import { useSearchState } from "@yext/search-headless-react";

const SearchResults = () => {
  const verticalResults = useSearchState((state) => state.vertical.results) || [
    "",
  ];
  usePageSetupEffect("products");

  return (
    <div className="flex flex-col">
      {verticalResults.length !== 0 ? (
        <ResultsCount
          customCssClasses={{
            resultsCountContainer: "text-xl  p-4 mx-2",
          }}
        />
      ) : (
        <div className="bg-slate-500 text-xl">
          No Results Available, Try another search!
        </div>
      )}
      <AppliedFilters
        customCssClasses={{
          appliedFiltersContainer: "mx-4",
          // clearAllButton: "bg-slate-300 rounded border-2 border-black p-2",
          // removableFilter: "bg-sky-500 text-white",
        }}
        hierarchicalFacetsDelimiter={"woah"}
        hierarchicalFacetsFieldIds={["c_hierarchicalFacet"]}
      />
      <DirectAnswer
        customCssClasses={{ directAnswerContainer: "mx-20 my-8" }}
      />
      <VerticalResults
        displayAllOnNoResults={false}
        customCssClasses={{
          verticalResultsContainer: "text-left grid grid-cols-6 gap-6 mx-6",
        }}
        CardComponent={({ result }: any) => {
          return (
            // <StandardCard result = {result}/>
            <ClothingCard
              result={result}
              customCssClasses={{
                container:
                  "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer",
                header: "font-medium",
              }}
              fieldMappings={{
                title: {
                  apiName: "name",
                  mappingType: "FIELD",
                },
                description: {
                  apiName: "richTextDescription",
                  mappingType: "FIELD",
                },
                price: {
                  apiName: "price.value",
                  mappingType: "FIELD",
                },

                cta1: {
                  apiName: "c_primaryCTA",
                  mappingType: "FIELD",
                },
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default SearchResults;

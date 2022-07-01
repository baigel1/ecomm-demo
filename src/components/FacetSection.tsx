import React from "react";
import { ApplyFiltersButton, StandardFacets, NumericalFacets } from "@yext/answers-react-components";
import { divide } from "lodash";
// import { Fragment } from "react";
// import { Facets } from "@yext/answers-react-components/lib/components/Filters";
// import { NumberRangeValue } from "@yext/answers-headless-react";

const FacetSection = () => {
  

  return (
    <>
    <StandardFacets 
      collapsible={true}
      searchable={true}
      customCssClasses={{container: "py-1 px-8", optionLabel: "font-bold"}}
    />
    {/* <NumericalFacets 
      // inputPrefix={<p>test</p>} this is broken
    /> */}
    {/* <ApplyFiltersButton /> */}
    
          
      
    </>
  );
};

export default FacetSection;

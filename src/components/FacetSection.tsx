import React from "react";
import { ApplyFiltersButton, StandardFacets, NumericalFacets, HierarchicalFacets } from "@yext/answers-react-components";
import { divide } from "lodash";
// import { Fragment } from "react";
// import { Facets } from "@yext/answers-react-components/lib/components/Filters";
// import { NumberRangeValue } from "@yext/answers-headless-react";

const FacetSection = () => {
  

  return (
    <div className="border-r-4 border-cyan-600 p-4">
    <StandardFacets 
      collapsible={true}
      searchable={true}
      customCssClasses={{container: "py-1 px-8", optionLabel: "font-bold"}}
      excludedFieldIds={["c_hierarchicalFacet"]}
    />
    <NumericalFacets 
      inputPrefix={<p>$</p>} 
      customCssClasses={{container: "py-1 px-8"}}
    />
    <HierarchicalFacets includedFieldIds={["c_hierarchicalFacet"]} customCssClasses={{treeContainer: "w-64", container: "px-8", parentCategory: "font-bold", currentCategory: "font-bold"}} />
    
    </div>
  );
};

export default FacetSection;

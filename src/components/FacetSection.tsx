import {
  ApplyFiltersButton,
  StandardFacets,
  NumericalFacets,
  HierarchicalFacets,
} from "@yext/search-ui-react";

const FacetSection = () => {
  return (
    <div className="border-r-4 border-cyan-600 p-4">
      <div className="text-center font-bold border-2 p-2">Filters</div>
      <StandardFacets
        collapsible={true}
        defaultExpanded={false}
        customCssClasses={{
          standardFacetsContainer: "py-2 px-8",
          optionLabel: "font-bold",
        }}
        excludedFieldIds={["c_hierarchicalFacet"]}
        searchOnChange={false}
      />
      <NumericalFacets
        inputPrefix={<p>$</p>}
        customCssClasses={{ numericalFacetsContainer: "py-1 px-8" }}
      />
      <HierarchicalFacets
        includedFieldIds={["c_hierarchicalFacet"]}
        customCssClasses={{
          treeContainer: "w-64",
          hierarchicalFacetsContainer: "px-8",
          parentCategory: "font-bold",
          currentCategory: "font-bold",
        }}
      />

      <ApplyFiltersButton
        customCssClasses={{
          button: "bg-black text-white rounded border-2 border-slate p-2 ",
        }}
        label={"Search"}
      />
    </div>
  );
};

export default FacetSection;

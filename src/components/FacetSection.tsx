import React from "react";
import { Filters } from "@yext/answers-react-components";
// import { Fragment } from "react";
// import { Facets } from "@yext/answers-react-components/lib/components/Filters";
// import { NumberRangeValue } from "@yext/answers-headless-react";

const FacetSection = () => {
  /**
   * Creates the filter's display name based on the number range.
   */
  // function getFilterDisplayName(numberRange: NumberRangeValue) {
  //   const start = numberRange.start;
  //   const end = numberRange.end;

  //   if (start && end) {
  //     return `$${start.value} - $${end.value}`;
  //   } else if (start && !end) {
  //     return `Over $${start.value}`;
  //   } else if (end && !start) {
  //     return `Up to $${end.value}`;
  //   }
  //   return "";
  // }

  return (
    <>
      {/**hierarchical facets from rose's project */}
      {/** add this as a conditional in the below filters.facets */}
      {/* <Filters.Facets searchOnChange={true} className='mr-8 text-left min-w-[12rem] mx-4 mt-4'>
                    {facets => facets.map((f, i) => {
                        console.log("f is: ", f)
                        if (f.options.length === 0) {
                            console.log("no facets")
                            return null;
                        }
                        
                            return (
                                <Fragment key={f.fieldId}>
                                    <Filters.HierarchicalFacet facet={f} /> <div className="w-full h-px bg-gray-200 my-4"></div>
                                    {(i < facets.length - 1)}
                                </Fragment>
                            )
                        
                    })}
            </Filters.Facets> */}

      {/**normal facets from rose's project */}
      <Filters.Facets
        searchOnChange={true}
        className="mr-8 text-left min-w-[12rem] mx-4 mt-4"
      >
        {(facets) =>
          facets.map((f, i) => {
            if (f.options.length === 0) {
              return null;
            }

            return (
              <div key={f.fieldId} className="md:w-40 mr-10">
                <hr className="border-t-4 slate-700 my-4"></hr>
                <Filters.FilterGroup fieldId={f.fieldId}>
                  <Filters.CollapsibleLabel label={f.displayName} />
                  <Filters.CollapsibleSection>
                    {/* <Filters.SearchInput />{" "} */}
                    {/* search bar within the collapsible section */}
                    {f.options.map((o) => (
                      <Filters.CheckboxOption
                        key={o.displayName}
                        value={o.value}
                        label={`${o.displayName} (${o.count})`}
                      />
                    ))}
                    {/**numerical facets */}
                    {/* {f.fieldId === "price.value" && (
                      <Filters.RangeInput
                        getFilterDisplayName={getFilterDisplayName}
                        inputPrefix={<>$</>}
                      />
                    )} */}
                  </Filters.CollapsibleSection>
                </Filters.FilterGroup>
              </div>
            );
          })
        }
      </Filters.Facets>
    </>
  );
};

export default FacetSection;

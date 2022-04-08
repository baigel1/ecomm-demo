import React from "react";
import { Filters } from "@yext/answers-react-components";
import { Fragment } from "react";
import { Facets } from "@yext/answers-react-components/lib/components/Filters";

const FacetSection = () => {
  return (
    <>

      {/**hierarchical facets from rose's project */}

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

            if (f.fieldId == "c_category") {
              return (
                <Fragment key={f.fieldId}>
                  <Filters.HierarchicalFacet facet={f} />{" "}
                  <div className="w-full h-px bg-gray-200 my-4"></div>
                  {i < facets.length - 1}
                </Fragment>
              );
            }

            return (
              <div key={f.fieldId} className="md:w-40 mr-10">
                <Filters.FilterGroup>
                  {/* <div>{f.displayName}</div> */}
                  <Filters.CollapsibleLabel label={f.displayName} />
                  <Filters.CollapsibleSection>
                    {/* <Filters.SearchInput /> */}
                    {f.options.map((o) => (
                      <Filters.CheckboxOption
                        key={o.displayName}
                        value={o.value}
                        fieldId={f.fieldId}
                      />
                    ))}
                  </Filters.CollapsibleSection>
                  {/* {(i < facets.length - 1)} */}
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

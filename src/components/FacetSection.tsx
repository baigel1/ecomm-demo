import React from 'react'
import { Filters } from '@yext/answers-react-components';
import { Fragment } from 'react';
import { Facets } from '@yext/answers-react-components/lib/components/Filters';

const FacetSection = () => {
    return (
        <>
        <Facets >
            {facets => {
                console.log(`facets are: ${facets}`)
                
                return (
                    <div>
                        here are facets
                    </div>
                )
            }}
        </Facets>
            
            {/**ask questions */}
       
            {/* <Filters.Facets searchOnChange={true} className='mr-8 text-left min-w-[12rem]'>
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
        </>
    )
}

export default FacetSection
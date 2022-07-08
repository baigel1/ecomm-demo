import React, {useEffect} from 'react'
import { VerticalResults, ResultsCount, AppliedFilters, StandardCard } from '@yext/answers-react-components'
import ClothingCard from '../cards/ClothingCard'
import { useAnswersState } from '@yext/answers-headless-react'
import usePageSetupEffect from '../hooks/defaultInitialSearch';


const SearchResults = () => {

    const verticalResults = useAnswersState(state => state.vertical.results) || [""];
    usePageSetupEffect("products");


    
    return (
        <div className="flex flex-col">
            {verticalResults.length !== 0 ?
            <ResultsCount 
                customCssClasses={{
                    resultCountText: "text-xl text-cyan-600 p-4 mx-2",
                    
                }}
                
            />
            :
            <div className="bg-slate-500 text-xl">No Results Available, Try another search!</div>
            } 
           <AppliedFilters/>
            <VerticalResults
                displayAllOnNoResults={false}
                customCssClasses={{ results: "text-left grid grid-cols-6 gap-6 mx-6"}}
                CardComponent={
                    ({ result }) => {
                        
                    return (
                        // <StandardCard result = {result}/>
                    <ClothingCard
                        result={result}
                        customCssClasses={{ container: "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer", header: "font-medium" }}
                        fieldMappings={{
                            title: {
                                apiName: "name",
                                mappingType: "FIELD"
                            },
                            description: {
                                apiName: "richTextDescription",
                                mappingType: "FIELD"
                            },
                            price: {
                                apiName: "price.value",
                                mappingType: "FIELD"
                            },
                           
                            cta1: {
                                apiName: 'c_primaryCTA',
                                mappingType: 'FIELD'
                            }
                        }}
                    />
                    )
                    }
                }

            />
        </div>
    )
}

export default SearchResults
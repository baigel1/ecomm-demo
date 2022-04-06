import React, {useEffect} from 'react'
import { VerticalResults, ResultsCount } from '@yext/answers-react-components'
import ClothingCard from '../cards/ClothingCard'
import { useAnswersState } from '@yext/answers-headless-react'
import usePageSetupEffect from '../hooks/defaultInitialSearch';

/**
 * for the search results we want photos (product prominent image cards)
 * maybe a category, title, descriptiong (cap at 50 characters with an ellipsis), price, rating
 * 
 * phase 2: upon clicking a result we want to pop open a modal to get more details with an option to add to cart
 * 
 */
const SearchResults = () => {

    const verticalResults = useAnswersState(state => state.vertical.results) || [""];
    usePageSetupEffect("products");

    // useEffect(() => {
    //     console.log(verticalResults)
        
    // }, [verticalResults])

    
    return (
        <>
            {verticalResults.length !== 0 ?
            <ResultsCount 
                customCssClasses={{
                    resultCountText: "text-xl text-cyan-500"
                }}
            />
            :
            <div className="bg-slate-500 text-xl">No Results Available, Try another search!</div>
            }
            <VerticalResults
                displayAllOnNoResults={false}
                customCssClasses={{ results: "text-left grid grid-cols-4 gap-6 ", container: "pt-6" }}
                CardComponent={
                    ({ result }) => {
                        
                    return (
                    <ClothingCard
                        result={result}
                        // cssCompositionMethod={"replace"}
                        customCssClasses={{ container: "flex flex-col justify-start rounded-lg mb-4 p-4 shadow-lg bg-white hover:shadow-xl hover:cursor-pointer", header: "font-medium" }}
                        fieldMappings={{
                            title: {
                                apiName: "name",
                                mappingType: "FIELD"
                            },
                            description: {
                                apiName: "price.value",
                                mappingType: "FIELD"
                            }
                            // },
                            // cta1: {
                            //     apiName: 'c_primaryCTA.label',
                            //     mappingType: 'FIELD'
                            // }
                        }}
                    />
                    )
                    }
                }

            />
        </>




        // <VerticalResults 
        //     CardComponent={
        //     ({result}) => {
        //         console.log(result)
        //         return (
        //             <StandardCard result={result}/>
        //         )
        //     }

        //     }
        // />
    )
}

export default SearchResults
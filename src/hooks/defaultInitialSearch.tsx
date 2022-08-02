import { useLayoutEffect } from "react";
import {
  SearchActions,
  useSearchActions,
  SearchIntent,
} from "@yext/search-headless-react";

const defaultGeolocationOptions: PositionOptions = {
  enableHighAccuracy: false,
  timeout: 6000,
  maximumAge: 300000,
};

/**
 * If the provided search intents include a 'NEAR_ME' intent and there's no existing
 * user's location in state, retrieve and store user's location in headless state.
 */
async function updateLocationIfNeeded(
  searchActions: SearchActions,
  intents: SearchIntent[],
  geolocationOptions?: PositionOptions
) {
  if (
    intents.includes(SearchIntent.NearMe) &&
    !searchActions.state.location.userLocation
  ) {
    try {
      const position = await getUserLocation(geolocationOptions);
      searchActions.setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (e) {
      console.error(e);
    }
  }
}

/**
 * Executes a universal/vertical search
 */
async function executeSearch(
  searchActions: SearchActions,
  isVertical: boolean
) {
  isVertical
    ? searchActions.executeVerticalQuery()
    : searchActions.executeUniversalQuery();
}

/**
 * Get search intents of the current query stored in headless using autocomplete request.
 */
async function getSearchIntents(
  searchActions: SearchActions,
  isVertical: boolean
) {
  const results = isVertical
    ? await searchActions.executeVerticalAutocomplete()
    : await searchActions.executeUniversalAutocomplete();
  return results?.inputIntents;
}

/**
 * Retrieves user's location using nagivator.geolocation API
 */
async function getUserLocation(
  geolocationOptions?: PositionOptions
): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (err) => {
          console.error(
            "Error occured using geolocation API. Unable to determine user's location."
          );
          reject(err);
        },
        { ...defaultGeolocationOptions, ...geolocationOptions }
      );
    } else {
      reject(
        "No access to geolocation API. Unable to determine user's location."
      );
    }
  });
}

/**
 * Sets up the state for a page
 * @param verticalKey - The verticalKey associated with the page, or undefined for universal pages
 */
export default function usePageSetupEffect(verticalKey?: string) {
  const searchActions = useSearchActions();
  useLayoutEffect(() => {
    const stateToClear = {
      filters: {},
      universal: {},
      vertical: {},
    };
    searchActions.setState({
      ...searchActions.state,
      ...stateToClear,
    });
    verticalKey
      ? searchActions.setVertical(verticalKey)
      : searchActions.setUniversal();
    const executeQuery = async () => {
      let searchIntents: SearchIntent[] = [];
      // if (!answersActions.state.location.userLocation) {
      //   searchIntents = await getSearchIntents(answersActions, !!verticalKey) || [];
      //   await updateLocationIfNeeded(answersActions, searchIntents);
      // }
      executeSearch(searchActions, !!verticalKey); //comment out for removing default initital search
    };
    executeQuery();
  }, [searchActions, verticalKey]);
}

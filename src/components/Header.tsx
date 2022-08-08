import logo from "../images/yextLogo.png";
import { searchConfig } from "../searchConfig";
import {
  provideHeadless,
  VerticalResults as VerticalResultsData,
} from "@yext/search-headless-react";
import {
  SearchBar,
  FocusedItemData,
  DropdownItem,
} from "@yext/search-ui-react";
import { Product } from "../types/products";
import classnames from "classnames";

const Header = () => {
  const entityPreviewSearcher = provideHeadless({
    ...searchConfig,
    headlessId: "entity-preview-searcher",
  });

  const renderProductPreview = (product: Product): JSX.Element => {
    // getting the smallest thumbnail image from the primaryPhoto field
    const numThumbnails =
      product.photoGallery?.[0].image?.thumbnails?.length || 0;
    const productThumbnail =
      product.photoGallery?.[0].image?.thumbnails?.[numThumbnails - 1];

    return (
      <div className="flex flex-col items-center cursor-pointer hover:bg-gray-100 ">
        {productThumbnail && (
          <img
            className="w-32"
            src={productThumbnail.url}
            alt="clothing preview"
          />
        )}
        <div className="font-semibold pl-3">{product.name}</div>
      </div>
    );
  };

  const renderEntityPreviews = (
    autocompleteLoading: boolean,
    verticalKeyToResults: Record<string, VerticalResultsData>,
    dropdownItemProps: {
      onClick: (
        value: string,
        _index: number,
        itemData?: FocusedItemData
      ) => void;
      ariaLabel: (value: string) => string;
    }
  ): JSX.Element | null => {
    // casting the products vertical to a list of products
    const productResults = verticalKeyToResults["products"]?.results.map(
      (result) => result.rawData
    ) as unknown as Product[];

    return productResults ? (
      <div
        // laying out the product previews in a grid
        className={classnames("grid grid-cols-4 px-8", {
          // fading the results if they're loading
          "opacity-50": autocompleteLoading,
        })}
      >
        {productResults.map((result, i) => (
          // DropdownItem is impored from @yext/search-ui-react
          <DropdownItem
            value={result.name}
            // when an item is clicked, it will change the URL
            {...dropdownItemProps}
            key={result.name + i}
          >
            {renderProductPreview(result)}
          </DropdownItem>
        ))}
      </div>
    ) : null;
  };

  return (
    <div className="bg-gradient-to-r from-slate-600 to-cyan-400 h-68">
      <div className="flex flex-col items-center">
        <img src={logo} className="h-40 my-5" alt="yext logo" />
        <div className="my-2 text-2xl">Find some cool clothes below</div>
        <div className="my-2 w-3/6 mt-10">
          <SearchBar
            placeholder="search here..."
            visualAutocompleteConfig={{
              entityPreviewSearcher: entityPreviewSearcher,
              includedVerticals: ["products"],
              renderEntityPreviews: renderEntityPreviews,
              universalLimit: { products: 4 },
              entityPreviewsDebouncingTime: 300,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

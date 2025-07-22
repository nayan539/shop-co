import React, { useState, useEffect } from 'react'
import NewsLater from '../Components/NewsLater'
import products from '../Objects/ProductsObj'
import { useNavigate, useLocation } from 'react-router-dom'

const Shop = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  });

  // MULTI-SELECT STATES
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedDressStyles, setSelectedDressStyles] = useState([]);

  // PRICE RANGE STATE
  const [priceRange, setPriceRange] = useState([0, 2500]); // [min, max]
  const [priceMin, priceMax] = priceRange;

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Dress styles for filter
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  // Get category from navigation (ArrivalsCategories)
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.category) {
      setSelectedCategories([location.state.category]);
      setCurrentPage(1);
    }
    // eslint-disable-next-line
  }, [location.state]);

  // FILTER LOGIC
  const filteredProducts = products.filter((product) => {
    const inCategory = selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true;
    const inPrice = product.price >= priceMin && product.price <= priceMax;
    const hasColor = selectedColors.length > 0
      ? product.colors.some(c => selectedColors.map(sc => sc.toLowerCase()).includes(c.toLowerCase()))
      : true;
    const hasSize = selectedSizes.length > 0
      ? product.size.some(s => selectedSizes.includes(s))
      : true;
    const hasDressStyle = selectedDressStyles.length > 0
      ? product.dressStyle && selectedDressStyles.includes(product.dressStyle)
      : true;
    return inCategory && inPrice && hasColor && hasSize && hasDressStyle;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Pagination logic
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleToggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const categories = [
    "T-shirts",
    "Shorts",
    "Shirts",
    "Hoodie",
    "Jeans",
    "New In"
  ];

  const colorOptions = [
    { name: "Green", value: "Green", class: "bg-green-500" },
    { name: "Red", value: "Red", class: "bg-red-600" },
    { name: "Blue", value: "Blue", class: "bg-blue-500" },
    { name: "Pink", value: "Pink", class: "bg-pink-500" },
    { name: "Yellow", value: "Yellow", class: "bg-yellow-500" },
    { name: "Orange", value: "Orange", class: "bg-orange-500" },
    { name: "Dark Green", value: "Green", class: "bg-green-800" },
    { name: "Purple", value: "Purple", class: "bg-purple-500" },
    { name: "White", value: "White", class: "bg-white" },
    { name: "Black", value: "Black", class: "bg-black" },
    { name: "Grey", value: "Grey", class: "bg-gray-400" },
    { name: "Navy", value: "Navy", class: "bg-blue-900" },
    { name: "Beige", value: "Beige", class: "bg-yellow-200" },
    { name: "Olive", value: "Olive", class: "bg-green-600" },
    { name: "Khaki", value: "Khaki", class: "bg-yellow-300" }
  ];

  const sizeOptions = ["S", "M", "L", "XL", "XXL"];

  // SIDEBAR SECTIONS
  const categoriesList = (
    <ul>
      {categories.map((cat) => (
        <li
          key={cat}
          className={`flex justify-between items-center px-1 cursor-pointer my-1 rounded
            ${selectedCategories.includes(cat)
              ? 'bg-gray-300 dark:bg-gray-600'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-white'
            }`}
          onClick={() => {
            setSelectedCategories(selectedCategories.includes(cat)
              ? selectedCategories.filter(c => c !== cat)
              : [...selectedCategories, cat]);
            setCurrentPage(1);
          }}
        >
          <p>{cat}</p>
          {selectedCategories.includes(cat) && <i className="fa-solid fa-check text-xs ml-2"></i>}
        </li>
      ))}
      {selectedCategories.length > 0 && (
        <li
          className="flex justify-center items-center px-1 cursor-pointer my-1 rounded bg-gray-200 text-black font-semibold"
          onClick={() => {
            setSelectedCategories([]);
            setCurrentPage(1);
          }}
        >
          Clear Filter
        </li>
      )}
    </ul>
  );

  // DOUBLE RANGE SLIDER FOR PRICE (WORKS BOTH SIDES)
  const minPossible = 0;
  const maxPossible = 2500;
  const sliderStep = 10;

  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), priceMax - sliderStep);
    setPriceRange([newMin, priceMax]);
    setCurrentPage(1);
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), priceMin + sliderStep);
    setPriceRange([priceMin, newMax]);
    setCurrentPage(1);
  };

  const priceRangeSlider = (
    <div className="flex flex-col gap-2 my-2">
      <div className="flex justify-between text-xs">
        <span>₹{priceMin}</span>
        <span>₹{priceMax}</span>
      </div>
      <div className="relative h-8 flex items-center">
        {/* Track */}
        <div className="absolute left-0 right-0 h-1 bg-gray-200 rounded-full z-0" />
        {/* Range highlight */}
        <div
          className="absolute h-1 bg-black rounded-full z-10"
          style={{
            left: `${((priceMin - minPossible) / (maxPossible - minPossible)) * 100}%`,
            right: `${100 - ((priceMax - minPossible) / (maxPossible - minPossible)) * 100}%`,
          }}
        />
        {/* Min Thumb */}
        <input
          type="range"
          min={minPossible}
          max={priceMax - sliderStep}
          step={sliderStep}
          value={priceMin}
          onChange={handleMinChange}
          className="absolute w-full pointer-events-auto accent-black z-20"
          style={{ pointerEvents: 'auto', background: 'transparent' }}
        />
        {/* Max Thumb */}
        <input
          type="range"
          min={priceMin + sliderStep}
          max={maxPossible}
          step={sliderStep}
          value={priceMax}
          onChange={handleMaxChange}
          className="absolute w-full pointer-events-auto accent-black z-20"
          style={{ pointerEvents: 'auto', background: 'transparent' }}
        />
      </div>
      <div className="flex justify-between text-xs">
        <span>Min</span>
        <span>Max</span>
      </div>
    </div>
  );

  // COLORS MULTISELECT
  const colorsList = (
    <div className="grid grid-cols-5 gap-3 my-3">
      {colorOptions.map((color, idx) => (
        <div
          key={color.name + idx}
          className={`col-span-1 w-8 h-8 rounded-full border border-gray-400 cursor-pointer flex items-center justify-center relative
            ${color.class}
            ${selectedColors.includes(color.value) ? 'ring-2 ring-black' : ''}
          `}
          title={color.name}
          onClick={() => {
            setSelectedColors(selectedColors.includes(color.value)
              ? selectedColors.filter(c => c !== color.value)
              : [...selectedColors, color.value]);
            setCurrentPage(1);
          }}
        >
          {selectedColors.includes(color.value) && (
            <i className="fa-solid fa-check text-xs text-white absolute"></i>
          )}
        </div>
      ))}
      {selectedColors.length > 0 && (
        <div
          className="col-span-5 text-xs text-center cursor-pointer bg-gray-200 py-2 font-semibold"
          onClick={() => setSelectedColors([])}
        >
          Clear Colors
        </div>
      )}
    </div>
  );

  // SIZES MULTISELECT
  const sizeButtons = (
    <div className='flex flex-wrap gap-2 my-3'>
      {sizeOptions.map(size => (
        <button
          key={size}
          className={`border border-gray-300 rounded-lg px-3 py-1 text-xs md:text-base
            ${selectedSizes.includes(size) ? 'bg-black dark:bg-gray-600 text-white' : 'hover:bg-black dark:hover:bg-gray-700 hover:text-white'}
          `}
          onClick={() => {
            setSelectedSizes(selectedSizes.includes(size)
              ? selectedSizes.filter(s => s !== size)
              : [...selectedSizes, size]);
            setCurrentPage(1);
          }}
        >
          {size}
        </button>
      ))}
      {selectedSizes.length > 0 && (
        <button
          className="flex justify-center items-center px-1 cursor-pointer my-1 rounded bg-gray-200 text-black font-semibold"
          onClick={() => setSelectedSizes([])}
        >
          Clear Sizes
        </button>
      )}
    </div>
  );

  // DRESS STYLE MULTISELECT
  const dressStyleList = (
    <div>
      <ul>
        {dressStyles.map(style => (
          <li
            key={style}
            className={`flex justify-between items-center px-1 cursor-pointer my-1 rounded
              ${selectedDressStyles.includes(style)
                ? 'bg-gray-200 dark:bg-gray-700'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-white'
              }`}
            onClick={() => {
              setSelectedDressStyles(selectedDressStyles.includes(style)
                ? selectedDressStyles.filter(s => s !== style)
                : [...selectedDressStyles, style]);
              setCurrentPage(1);
            }}
          >
            <p>{style}</p>
            {selectedDressStyles.includes(style) && (
              <i className="fa-solid fa-check text-xs ml-2"></i>
            )}
          </li>
        ))}
        {selectedDressStyles.length > 0 && (
          <li
            className="flex justify-center items-center px-1 cursor-pointer my-1 rounded bg-gray-200 text-black font-semibold"
            onClick={() => setSelectedDressStyles([])}
          >
            Clear Dress Styles
          </li>
        )}
      </ul>
    </div>
  );

  const SidebarSection = ({ title, sectionKey, children }) => (
    <>
      <div
        className="flex justify-between cursor-pointer select-none"
        onClick={() => handleToggleSection(sectionKey)}
      >
        <p className='font-bold'>{title}</p>
        <i
          className={`fa-solid fa-angle-up items-center transition-transform duration-300 ${openSections[sectionKey] ? '' : 'rotate-180'}`}
        ></i>
      </div>
      <div
        style={{
          maxHeight: openSections[sectionKey] ? '500px' : '0px',
          opacity: openSections[sectionKey] ? 1 : 0,
          transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s'
        }}
        className="overflow-hidden"
      >
        {children}
      </div>
      <hr className='my-4' />
    </>
  );

  const navigate = useNavigate();

  // Like functionality for products
  const [likedProducts, setLikedProducts] = useState([]);
  const toggleLike = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id)
        ? prev.filter(pid => pid !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <div className='dark:bg-black'>
        <hr className='mb-5'/>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5 dark:bg-black">
            {/* Filter Sidebar */}
            <div className="col-span-12 md:col-span-3 dark:bg-black">
              {/* Filter Button for Small Devices */}
              <button
                className="md:hidden flex items-center gap-2 mb-4 px-4 py-2 mx-2 border rounded-full bg-white shadow"
                onClick={() => setShowFilter(true)}
              >
                <i className="fa-solid fa-filter"></i>
                <span>Show Filters</span>
              </button>
              {/* Overlay and Sidebar for Small Devices */}
              <div
                className={`
                  fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300
                  ${showFilter ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                  md:hidden
                `}
                onClick={() => setShowFilter(false)}
              ></div>
              <div
                className={`
                  fixed top-0 left-0 z-50 h-full w-4/5 max-w-xs bg-white shadow-lg border-r border-gray-200
                  transform transition-transform duration-300
                  ${showFilter ? "translate-x-0" : "-translate-x-full"}
                  md:hidden
                `}
                style={{ transitionProperty: "transform" }}
              >
                {/* Sidebar content for small screens only */}
                <div className="border border-gray-300 rounded-lg p-4 h-full bg-white overflow-y-auto"
                  style={{ maxHeight: "100vh" }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className='font-bold'>Filters</p>
                    <button
                      className="text-2xl"
                      onClick={() => setShowFilter(false)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <hr className='my-4' />
                  <SidebarSection title="Categories" sectionKey="categories">
                    {categoriesList}
                  </SidebarSection>
                  <SidebarSection title="Price" sectionKey="price">
                    {priceRangeSlider}
                  </SidebarSection>
                  <SidebarSection title="Colors" sectionKey="colors">
                    {colorsList}
                  </SidebarSection>
                  <SidebarSection title="Size" sectionKey="size">
                    {sizeButtons}
                  </SidebarSection>
                  <SidebarSection title="Dress Style" sectionKey="dressStyle">
                    {dressStyleList}
                  </SidebarSection>
                </div>
              </div>
              {/* Sidebar for big screens (unchanged, always visible) */}
              <div className="hidden md:block border border-gray-300 rounded-lg p-4 bg-white mt-0 dark:bg-black dark:text-white">
                <div className="flex justify-between items-center mb-2">
                  <p className='font-bold'>Filters</p>
                  <i className="fa-solid fa-filter"></i>
                </div>
                <hr className='my-4' />
                <SidebarSection title="Categories" sectionKey="categories">
                  {categoriesList}
                </SidebarSection>
                <SidebarSection title="Price" sectionKey="price">
                  {priceRangeSlider}
                </SidebarSection>
                <SidebarSection title="Colors" sectionKey="colors">
                  {colorsList}
                </SidebarSection>
                <SidebarSection title="Size" sectionKey="size">
                  {sizeButtons}
                </SidebarSection>
                <SidebarSection title="Dress Style" sectionKey="dressStyle">
                  {dressStyleList}
                </SidebarSection>
              </div>
            </div>
            {/* End Filter Sidebar */}

            {/* Product Grid */}
            <div className="col-span-12 md:col-span-9">
              <div className="flex justify-between mb-4">
                <p className='font-medium text-xl'>
                  {selectedCategories.length > 0 ? selectedCategories.join(', ') : "All Products"}
                </p>
                <div></div>
                <div className='flex gap-2'>
                  <p className='text-gray-500'>
                    Showing {filteredProducts.length === 0 ? 0 : (currentPage - 1) * productsPerPage + 1}
                    -
                    {Math.min(currentPage * productsPerPage, filteredProducts.length)}
                    {" "}of {filteredProducts.length} Products
                  </p>
                  <p className='text-gray-500'>Sort by: <span className='text-black'>Most Popular <i className="fa-solid fa-angle-down"></i></span></p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-5 px-5">
                {paginatedProducts.length === 0 ? (
                  <div className="col-span-12 text-center text-gray-500 py-10">
                    No products found for this filter.
                  </div>
                ) : (
                  paginatedProducts.map((product) => (
                    <div key={product.id} className="col-span-6 lg:col-span-4 ">
                      <div className="relative">
                        <div
                          onClick={() => navigate(`/productdetails/${product.id}`)}
                          className="cursor-pointer product-card bg-white dark:bg-black dark:text-white p-4 rounded-lg shadow hover:shadow-lg transition w-full h-full"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded"
                          />
                          <p className='my-3 font-bold'>{product.title}</p>
                          <div className="flex items-center mb-2">
                            <span className="text-yellow-400 mr-1">★</span>
                            <span className="text-gray-600 text-sm">{product.reviews} reviews</span>
                          </div>
                          <div className='flex justify-between items-center my-3'>
                            <p className='font-bold text-[1rem] md:text-2xl'>₹{product.price}</p>
                            <p className='font-bold text-[1rem] md:text-2xl text-gray-400 '>
                              <strike>₹{product.mainprice}</strike>
                            </p>
                            <p className='bg-red-100 px-2 sm:px-3 py-1 rounded-full text-red-500 text-[0.8rem]'>
                              -{product.discount}%
                            </p>
                          </div>
                        </div>
                        <i
                          className={`fa-heart absolute top-4 right-4 text-2xl cursor-pointer fa-${likedProducts.includes(product.id) ? 'solid text-red-500' : 'regular'}`}
                          onClick={(e) => { e.stopPropagation(); toggleLike(product.id); }}
                        ></i>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {/* pagination */}
              <div className="flex justify-between items-center my-5 mx-2">
                <div>
                  <button
                    className='flex gap-3 items-center border border-gray-400 rounded-lg py-2 px-4 hover:bg-black hover:text-white transition'
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                    <p>Previous</p>
                  </button>
                </div>
                <div>
                  <ul className='flex gap-2 sm:gap-3'>
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <li
                        key={idx}
                        className={`w-8 h-8 rounded-lg flex justify-center items-center cursor-pointer ${
                          currentPage === idx + 1
                            ? 'bg-gray-200'
                            : 'hover:bg-gray-200'
                        } ${idx > 1 && idx < totalPages - 2 ? 'hidden sm:block' : ''}`}
                        onClick={() => handlePageClick(idx + 1)}
                        style={{
                          backgroundColor: currentPage === idx + 1 ? '#e5e7eb' : undefined,
                        }}
                      >
                        {idx === 2 && totalPages > 5 && (
                          <span className="block sm:hidden">...</span>
                        )}
                        {(idx < 2 || idx >= totalPages - 2 || (idx + 1 === currentPage)) && (idx + 1)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <button
                    className='flex gap-3 items-center border border-gray-400 rounded-lg py-2 px-4 hover:bg-black hover:text-white transition'
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                    <p>Next</p>
                  </button>
                </div>
              </div>
              {/* pagination */}
            </div>
            {/* End Product Grid */}
          </div>
          <NewsLater/>
        </div>
      </div>
    </>
  )
}

export default Shop
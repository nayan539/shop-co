import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Switch from './Switch';
import Likeicon from './Likeicon';
import CartIcon from './Carticon';
const searchForSentences = [
"products...",
"clothes...",
"your favorite brands...",
"new arrivals...",
"trending styles...",
"the latest collections..."
];
const Navbar = () => {
const [search, setSearch] = useState("");
const [showMenu, setShowMenu] = useState(false);
const [sentenceIdx, setSentenceIdx] = useState(0);
const [displayed, setDisplayed] = useState("");
const [isDeleting, setIsDeleting] = useState(false);
const [typingSpeed, setTypingSpeed] = useState(60);
const [showMobileSearch, setShowMobileSearch] = useState(false);
const [navbarHeight, setNavbarHeight] = useState(72); // default height
const [searchFixed, setSearchFixed] = useState(false);
const [products, setProducts] = useState([]); // State to hold products
const navigate = useNavigate();
const mobileInputRef = useRef(null);
const navbarRef = useRef(null);
const searchInputRef = useRef(null);
// Fetch products on component mount
useEffect(() => {
const fetchProducts = async () => {
// Replace the URL below with the actual endpoint you want to fetch products from
const response = await fetch('/api/products');
const data = await response.json();
setProducts(data); // Assuming the response contains an array of products
};
fetchProducts().catch(err => console.error("Failed to fetch products:", err));
}, []);
// Typewriter effect for placeholder
useEffect(() => {
let timeout;
const fullSentence = searchForSentences[sentenceIdx];
if (!isDeleting && displayed.length < fullSentence.length) {
setTypingSpeed(60);
timeout = setTimeout(() => {
setDisplayed(fullSentence.substring(0, displayed.length + 1));
}, typingSpeed);
} else if (isDeleting && displayed.length > 0) {
setTypingSpeed(30);
timeout = setTimeout(() => {
setDisplayed(fullSentence.substring(0, displayed.length - 1));
}, typingSpeed);
} else if (!isDeleting && displayed.length === fullSentence.length) {
timeout = setTimeout(() => setIsDeleting(true), 1800); // Pause before deleting
} else if (isDeleting && displayed.length === 0) {
setIsDeleting(false);
setSentenceIdx((prev) => (prev + 1) % searchForSentences.length);
}
return () => clearTimeout(timeout);
}, [displayed, isDeleting, sentenceIdx]);
// Focus input when mobile search opens
useEffect(() => {
if (showMobileSearch && mobileInputRef.current) {
mobileInputRef.current.focus();
}
}, [showMobileSearch]);
// Measure navbar height for correct mobile search input placement
useEffect(() => {
if (navbarRef.current) {
setNavbarHeight(navbarRef.current.offsetHeight);
}
}, []);
// Scroll behavior for mobile search input
useEffect(() => {
if (!showMobileSearch) {
setSearchFixed(false);
return;
}
const handleScroll = () => {
if (!searchInputRef.current || !navbarRef.current) return;
const navbarRect = navbarRef.current.getBoundingClientRect();
// If navbar is out of view, fix the search input to top
if (navbarRect.bottom <= 0) {
setSearchFixed(true);
} else {
setSearchFixed(false);
}
};
window.addEventListener('scroll', handleScroll, { passive: true });
return () => window.removeEventListener('scroll', handleScroll);
}, [showMobileSearch]);
const handleSearch = (e) => {
if (e.key === "Enter" && search.trim()) {
// Redirect to the shop page with the search query
navigate(`/shop?search=${encodeURIComponent(search.trim())}, { state: { products } }`);
setSearch("");
setShowMobileSearch(false);
}
};
// Close mobile search when clicking outside
const handleOverlayClick = () => {
setShowMobileSearch(false);
};
return (
<>
<div
ref={navbarRef}
className='flex justify-between md:justify-around py-3 md:py-5 items-center px-5 sm:px-10 md:px-2 lg:px-14 bg-white dark:bg-black relative z-50'
>
<div className='flex items-center gap-4 text-3xl dark:text-white'>
{/* Hamburger */}
<i
className="fa-solid fa-bars block lg:hidden cursor-pointer"
onClick={() => setShowMenu(true)}
></i>
<div className='logo text-5xl dark:text-white'><NavLink to="/">SHOP.CO</NavLink></div>
</div>
<div>
<ul className='hidden lg:flex lg:block gap-5'>
<NavLink to="/shop"><li className='dark:text-white'>Shop</li></NavLink>
<NavLink to="/sale"><li className='dark:text-white'>On Sale</li></NavLink>
<NavLink to="/newarrivals"><li className='dark:text-white'>New Arrivals</li></NavLink>
</ul>
</div>
{/* Desktop Search */}
<div className='hidden md:block w-[45%] bg-gray-200 dark:bg-gray-800 rounded-full '>
<div className='flex items-center gap-2 px-5 py-3 '>
<i className="fa-solid fa-magnifying-glass text-gray-500 "></i>
<input
className='bg-transparent w-full transition-colors duration-300 dark:text-white outline-none'
type="text"
placeholder={`Search for ${displayed}`}
value={search}
onChange={e => setSearch(e.target.value)}
onKeyDown={handleSearch}
style={{
fontFamily: 'inherit'
}}
/>
</div>
{/* Product Suggestions (Desktop) */}
{search && (
<ul className="absolute bg-white dark:bg-black shadow-lg border z-10 w-full mt-1 rounded">
{products
.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
.map(product => (
<li key={product.id} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
{product.name}
</li>
))}
</ul>
)}
</div>
{/* Cart and Profile icons */}
<div className="flex gap-4 items-center">
<i
className="fa-solid fa-magnifying-glass text-xl cursor-pointer md:hidden"
onClick={() => setShowMobileSearch(true)}
></i>
<div>
<CartIcon />
</div>
<NavLink to="/like"><Likeicon /></NavLink>
<NavLink to="/login">
<i className="fa-regular fa-circle-user text-xl dark:text-white"></i>
</NavLink>
<Switch />
</div>
</div>
{/* Mobile Menu Overlay */}
<div
className={
`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300
${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
lg:hidden`
}
onClick={() => setShowMenu(false)}
></div>
{/* Mobile Menu */}
<div
className={
`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-white dark:bg-black shadow-lg border-l border-gray-200 dark:border-gray-700
transform transition-transform duration-300
${showMenu ? "translate-x-0" : "translate-x-full"}
lg:hidden`
}
>
<div className="flex justify-between items-center px-5 py-4 border-b dark:border-gray-700">
<div className="text-3xl font-bold tt dark:text-white"><NavLink to="/">SHOP.CO</NavLink></div>
<button className="text-2xl" onClick={() => setShowMenu(false)}>
<i className="fa-solid fa-xmark"></i>
</button>
</div>
<ul className="flex flex-col gap-4 px-8 py-8 text-xl">
<NavLink to="/shop" onClick={() => setShowMenu(false)}><li className='tt text-2xl dark:text-white'>Shop</li></NavLink>
<NavLink to="/sale" onClick={() => setShowMenu(false)}><li className='tt text-2xl dark:text-white'>On Sale</li></NavLink>
<NavLink to="/newarrivals" onClick={() => setShowMenu(false)}><li className='tt text-2xl dark:text-white'>New Arrivals</li></NavLink>
<li className='tt text-2xl dark:text-white'>Brands</li>
<NavLink to="/cart" onClick={() => setShowMenu(false)}><li className='tt text-2xl dark:text-white'>Cart</li></NavLink>
<NavLink to="/login" onClick={() => setShowMenu(false)}><li className='tt text-2xl dark:text-white'>Login</li></NavLink>
<li className='block md:hidden'><Switch /></li>
</ul>
</div>
{/* Mobile Search Overlay and Highlighted Input */}
{showMobileSearch && (
<div>
{/* Overlay */}
<div
className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-30"
onClick={handleOverlayClick}
></div>
{/* Highlighted Search Input */}
<div
ref={searchInputRef}
className={`md:hidden ${searchFixed ? 'fixed left-0 right-0 top-0 z-50' : 'absolute left-0 right-0 z-50'} bg-white dark:bg-black transition-all duration-300 overflow-hidden shadow-lg border-2 dark:border-gray-700
${showMobileSearch ? 'max-h-32 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`
}
style={{
top: searchFixed ? 0 : navbarHeight + 30,
borderRadius: '0 0 1rem 1rem'
}}
>
<div
className="flex items-center gap-2 px-5"
onClick={e => e.stopPropagation()} // Prevent closing when clicking inside input
>
<i className="fa-solid fa-magnifying-glass text-gray-500"></i>
<input
ref={mobileInputRef}
className="bg-transparent w-full py-2 outline-none"
type="text"
placeholder={`Search for ${displayed}`}
value={search}
onChange={e => setSearch(e.target.value)}
onKeyDown={handleSearch}
style={{ fontFamily: 'inherit' }}
/>
<button
className="text-2xl text-gray-400"
onClick={() => setShowMobileSearch(false)}
tabIndex={-1}
>
<i className="fa-solid fa-xmark"></i>
</button>
</div>
{/* Product Suggestions (Mobile) */}
{search && (
<ul className="absolute bg-white dark:bg-black transition-all w-full mt-1 rounded">
{products
.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
.map(product => (
<li key={product.id} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
{product.name}
</li>
))}
</ul>
)}
</div>
</div>
)}
</>
);
}
export default Navbar;
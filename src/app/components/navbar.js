import NavbarItems from "./navbarItems";

export default function Navbar() {
  return (
    <div className="flex justify-center lg:text-lg dark:bg-gray-600 bg-amber-100 p-4a">
      <NavbarItems title="Trending" slug="fetch_trending" />
      <NavbarItems title="Top Rated" slug="fetch_top_rated" />
    </div>
  );
}

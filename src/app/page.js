import Image from "next/image";
import Results from "./components/results";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const url_opt =
    searchParams?.genre == "fetch_top_rated"
      ? "movie/top_rated"
      : "trending/all/week";

  const response = await fetch(
    `https://api.themoviedb.org/3/${url_opt}?api_key=${API_KEY}&language=en-US`,
    { revalidate: 10000 }
  );

  if (!response.ok) {
    throw new Error("Faild to Fetch")
  }
  const data = await response.json();

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}

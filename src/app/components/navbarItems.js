"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItems({ title, slug }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`p-4 hover:text-amber-600 m-4 font-semibold ${
          genre &&
          genre == slug &&
          "underline underline-offset-8 decoration-amber-500 decoration-4 rounded-lg"
        }`}
        href={`/?genre=${slug}`}
      >
        {title}
      </Link>
    </div>
  );
}

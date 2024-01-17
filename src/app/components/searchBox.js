'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    function handelSubmit(e) {
        e.preventDefault()
        if (!search) return;

        router.push(`/search/${search}`)

    }

    return (
        <form onSubmit={handelSubmit} className="flex justify-between items-center max-w-6xl mx-auto px-5">
            <input
                value={search}
                type="text"
                className="w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1"
                placeholder="Search Keywords..."
                onChange={(e) => setSearch(e?.target?.value)}
            />
            <button
                type="submit"
                className="text-amber-600 disabled:text-gray-400"
                disabled={!search}
            >Search</button>
        </form>
    )
}
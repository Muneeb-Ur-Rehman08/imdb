import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";


export default function Card({cardData}) {
    return (
        <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
            <Link href={`/movie/${cardData?.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        cardData?.backdrop_path|| cardData?.poster_path
                    }`}
                    height={300}
                    width={500}
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="Image is not available"
                    style={{
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                />
                <div className="p-2 ">
                    <p className="line-clamp-2 text-md">{cardData?.overview}</p>
                    <h1 className="text-lg truncate font-bold">{cardData?.title || cardData?.name}</h1>
                    <p className="flex items-center ">
                        {cardData?.release_date || cardData?.first_air_date}
                        <FiThumbsUp  className="mr-1 ml-3 h-5"/>
                        {cardData?.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}
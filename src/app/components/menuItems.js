import Link from "next/link"

export const MenuItems = ({ name, address, Icon }) => {
    return (
        <div>
            <div>
                <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600" >
                    <Icon className='sm:hidden' />
                    <p className="sm:inline hidden my-2 text-sm">
                        {name}
                    </p>
                </Link>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
} 
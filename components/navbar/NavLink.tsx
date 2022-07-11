import Link from "next/link";
import { FC } from 'react';

interface NavLinkProps {
    value: string
    link: string
    current: string
}

const NavLink: FC<NavLinkProps> = ({ value, link, current }) => {
    return (
        <Link href={link} >
            <a
                className={`lg:py-4 border-b-4 border-${(current === link)?'red-500':'transparent'} hover:(text-red-500 border-red-500) cursor-pointer rubik`}
            >
                {value}
            </a>
        </Link>
    )
}

export default NavLink;

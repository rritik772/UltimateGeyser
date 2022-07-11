import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useTrail, a } from '@react-spring/web';

interface link {
    value: string
    endpoint: string
}

interface NavDropLinkProps {
    value: string
    links?: link[]
    endIcon?: string
}

interface TrailPorps {
    open: boolean,
    links: link[]
}

const Trail: FC<TrailPorps> = ({ open, links }) => {

    const trail = useTrail(links.length, {
        config: { mass: 10, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 30 : 0,
        from: { opacity: 0, x: 20, height: 23 }
    });

    return (
        <div className='z-10 bg-white'>
            {
                trail.map(({ height, ...style }, index) => (
                    <a.div key={index} style={style}>
                        <a.div style={{ height }}>
                            <Link href={links[index].endpoint} key={index}>
                                <a>
                                    <span className='hover:(text-red-500)'>
                                        {links[index].value}
                                    </span>
                                </a>
                            </Link>
                        </a.div>
                    </a.div>
                ))
            }
        </div>
    )
}

const NavDropLink: FC<NavDropLinkProps> = ({ value, links, endIcon }) => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false)
    return (
        <div className='relative'>
            <span
                className="lg:py-4 border-b-4 border-transparent hover:(text-red-500 border-red-500) cursor-pointer"
                onClick={() => setMenuToggle(!menuToggle)}
            >
                {value}
                <i className={`bi bi-${endIcon} ml-2`}></i>
            </span>
            {
                links && 
                <section
                    className='lg:(mt-5 absolute) flex flex-col gap-2'
                >
                    <Trail open={menuToggle} links={links} />
                </section>
            }
        </div>
    )
}

export default NavDropLink

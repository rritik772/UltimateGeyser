import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

interface link {
    value: string
    endpoint: string
}

interface FooterDropLinksProps {
    topic: string
    links: link[]
}

const FooterDropLinks: FC<FooterDropLinksProps> = ({ topic, links }) => {
    const [toggled, setToggled] = useState(true);
    useEffect(() => {
        if (window.innerWidth <= 640) setToggled(false);
    }, [])

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between gap-4'>
                <span className='font-bold text-lg uppercase'>{topic}</span>
                <i className='<md:(inline) md:(hidden) bi bi-plus-square cursor-pointer' onClick={() => setToggled(!toggled)}/>
            </div>
            <section className={`<md:(${toggled && 'hidden'}) lg:() flex flex-col gap-1`}>
                {
                    toggled && 
                    links.map((item, key) => (
                        <Link href={item.endpoint} key={key}>
                            <a>
                                <span className='hover:(underline text-blue-500)'>{item.value}</span>
                            </a>
                        </Link>
                    ))
                }
            </section>
        </div>
    )
}

export default FooterDropLinks
import Link from 'next/link'
import { FC } from 'react'

interface link {
    value: string
    endpoint: string
}

interface FooterDropLinksProps {
    topic: string
    links: link[]
}

const FooterDropLinks: FC<FooterDropLinksProps> = ({ topic, links }) => {
  return (
    <div className='flex flex-col gap-3'>
        <span className='font-bold text-lg uppercase'>{topic}</span>
        <section className='flex flex-col gap-1'>
            {
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
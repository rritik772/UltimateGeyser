import { FC } from 'react';

interface SingleKnowledgeCardProps  {
    tag: string
    topic: string
    date: string
}

// const SingleKnowledgeCard: FC<SingleKnowledgeCardProps> = ({ tag, topic, date }) => {

// }

const KnowledgeCenter = () => {
  return (
    <div className='py-10 bg-gray-100'>

      <section className='flex flex-col items-center'>
        <span className='font-bold uppercase tracking-wide text-4xl text-red-500 underline'>Knowledge Center</span>
        <span className='mt-2 font-mono font-xl uppercase tracking-widest'>Be Inspired to be reborn everyday</span>
      </section>

      <section className='sm:(grid-cols-1) md:(grid-cols-2) lg:(grid-cols-4) justify-items-center gap-5 grid my-10'>
      </section>
    </div>
  )
}

export default KnowledgeCenter
import { FC } from "react";
import whyracold from "./whyracoldcards.json";

interface SingleCardProps {
  topic: string;
  img: string;
  desc: string;
}

const SingleCard: FC<SingleCardProps> = ({ topic, img, desc }) => {
  return (
    <section className="flex flex-col justify-center gap-5 p-5 border shadow <md:w-full md:w-76 rounded-lg">
      <span className="text-center text-2xl text-red-500 font-bold tracking-wide">
        {topic}
      </span>
      <div className="w-[150px] h-[150px] relative bg-gray-700 self-center rounded-lg overflow-hidden">
        <img alt="topic" src={img} />
      </div>
      <span className="text-gray-700 text-justify">{desc}</span>
    </section>
  );
};

const WhyRacold = () => {
  return (
    <div className="my-10">
      <section className="flex flex-col items-center p-5">
        <span
          className="font-bold uppercase tracking-wide text-4xl text-red-500 underline-black"
          id="why-willerhot"
        >
          Why WillerHot?
        </span>
        <span className="mt-5 font-xl uppercase tracking-widest text-center">
          WillerHot Geysers are equipped with path-breaking technologies in
          water heating
        </span>
      </section>
      <section className="mt-10 flex flex-wrap justify-center gap-5 p-5">
        {whyracold.map((item, key) => (
          <SingleCard
            key={key}
            topic={item.topic}
            img={item.img}
            desc={item.desc}
          />
        ))}
      </section>
    </div>
  );
};

export default WhyRacold;


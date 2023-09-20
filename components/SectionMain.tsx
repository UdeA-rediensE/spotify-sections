import { MainCard } from "./MainCard";

interface SectionMainProps {
    text: string;
    cardData: {
        title: string;
        description: string;
        image: string;
    }[]
}
const SectionMain = ({text, cardData}: SectionMainProps) => {
    return (
        <section className="mb-4">
        <div className="flex flex-row justify-between items-center mb-4">
            <h1 className="text-2xl font-[800] text-white hover:underline cursor-pointer">{text}</h1>
            <span className="text-secondary-text text-sm font-extrabold hover:underline cursor-pointer">Show all</span>
        </div>
        <div className='grid grid-flow-col grid-cols-7 m-0 p-0 auto-rows-[0] grid-rows-[1fr] gap-6 min-w-[372px] overflow-y-hidden'>
            {cardData.map((card, index) => (
                <MainCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    </section>
    );
}

export { SectionMain }
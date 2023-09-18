import { Button } from "./Button";

interface SidebarCardProps {
    title: string;
    description: string;
    buttonText: string;
}
const SidebarCard = ({ title, description, buttonText }: SidebarCardProps) => {
    return (
        <section className='flex flex-col gap-4 bg-[#242424] rounded-lg p-5'>
            <div className='flex flex-col gap-2'>
                <span className='font-bold'>{title}</span>
                <span className="text-[0.9rem] font-semibold">{description}</span>
            </div>
            <div>
                <Button text={buttonText}/>
            </div>
        </section>
    );
}

export { SidebarCard };
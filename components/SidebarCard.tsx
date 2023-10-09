import { Button } from "./Button";

interface SidebarCardProps {
  title: string;
  description: string;
  buttonText: string;
}
const SidebarCard = ({ title, description, buttonText }: SidebarCardProps) => {
  return (
    <section className="flex flex-col gap-y-5 bg-[#242424] rounded-lg px-5 py-[18px] my-2">
      <div className="flex flex-col gap-2 w-fit">
        <span className="font-bold">{title}</span>
        <span className="text-[0.85rem] font-semibold">{description}</span>
      </div>
      <div>
        <Button text={buttonText} />
      </div>
    </section>
  );
};

export { SidebarCard };

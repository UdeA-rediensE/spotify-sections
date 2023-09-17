interface ButtonProps {
    text: string;
}
const Button = ({ text }: ButtonProps) => {
    return (
        <button className="bg-white text-black font-semibold px-4 py-1 rounded-full hover:scale-105">{text}</button>
  );
};

export { Button };


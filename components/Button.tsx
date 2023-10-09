interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-white text-black font-extrabold rounded-full text-sm hover:scale-105 px-4 py-[6px]">
      {text}
    </button>
  );
};

export { Button };

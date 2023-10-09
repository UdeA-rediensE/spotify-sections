interface TextButtonProps {
  text: string;
}
const TextButton = ({ text }: TextButtonProps) => {
  return (
    <button className="tracking-widest hover:text-white hover:scale-105">
      {text}
    </button>
  );
};

export { TextButton };

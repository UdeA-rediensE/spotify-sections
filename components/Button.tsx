interface ButtonProps {
    text: string;
    height?: string;
    width?: string;
}
const Button = ({ text, height, width }: ButtonProps) => {
    const classes = 'bg-white text-black text-[0.9rem] font-extrabold px-4 py-1 rounded-full hover:scale-105';
    const style = { width, height };

    return (
        <button className={classes} style={style}>{text}</button>
    );
};

export { Button };


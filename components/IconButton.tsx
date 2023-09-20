import { IconType } from 'react-icons';
import { useState } from 'react';

interface IconButtonProps {
    InactiveIcon: IconType;
    ActiveIcon: IconType;
    text: string;
}

const IconButton = ({ InactiveIcon, ActiveIcon, text }: IconButtonProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleFocus = () => setIsActive(true)
    const handleBlur = () => setIsActive(false)    

    return (
        <button
            className={`flex gap-4 ${isActive ? 'text-white' : 'text-secondary-text'
                } hover:text-white items-center cursor-pointer`}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            {isActive ? (
                <ActiveIcon className='text-3xl' />
            ) : (
                <InactiveIcon className='text-3xl' />
            )}
            <span className='font-bold'>{text}</span>
        </button>
    );
};

export { IconButton };

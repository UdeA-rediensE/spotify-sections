import { IconType } from 'react-icons';
import { useState } from 'react';

interface IconButtonProps {
    InactiveIcon: IconType;
    ActiveIcon: IconType;
    text: string;
}

const IconButton = ({ InactiveIcon, ActiveIcon, text }: IconButtonProps) => {
    const [isActive, setIsActive] = useState(false);

    const toggleIcon = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`flex gap-4 ${isActive ? 'text-white' : 'text-secondary-text'} hover:text-white items-center cursor-pointer`} onClick={toggleIcon}>
            {isActive ? <ActiveIcon className='text-3xl' /> : <InactiveIcon className='text-3xl' />}
            <span className='font-bold'>{text}</span>
        </div>
    );
}

export { IconButton };

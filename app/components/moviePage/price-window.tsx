import React, {FC, MouseEventHandler, ReactNode} from 'react'

interface PriceWindowProps {
	handleClose: MouseEventHandler
}

const PriceWindow: FC<PriceWindowProps> = ({ handleClose }) => {
    return (
        <div className='absolute'>
            <div className="relative ml-48 mt-2 bg-white p-2 rounded-lg border-2 w-32 h-12">
                <h3 className="font-bold text-xs">300 руб</h3>
                <p className="text-xs">1 ряд, 5 место</p>
                <button className="btn absolute top-1 right-1" 
                        onClick={handleClose}>
                    ✕
                </button>
            </div>
        </div>
    );
};

export default PriceWindow;

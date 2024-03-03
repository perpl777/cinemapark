import React, {FC, MouseEventHandler} from 'react'


interface MiniModalProps {
	handleClose: MouseEventHandler
    price: string
    selectedSeat: string
}


const MiniModal: FC<MiniModalProps> = ({ handleClose, price, selectedSeat }) => {
    return (
        <div className='absolute'>
            <div className="relative ml-56 mt-12 bg-white p-2 rounded-lg border-2 w-32 h-12">

                <h3 className="font-bold text-xs"> {price} </h3>
                <p className="text-xs"> {selectedSeat} </p>

                <button className="btn absolute top-1 right-1" onClick={handleClose}>✕</button>
            </div>
        </div>
    );
};

export default MiniModal;

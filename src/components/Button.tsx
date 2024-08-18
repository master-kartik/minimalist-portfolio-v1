import React from 'react';
type TextType = {
    textVal: String
}
const JoinWaitlistButton = ({textVal}:TextType) => {
    return (
        <button
            type="button"
            className="relative tracking-tighter inline-flex items-center justify-center bg-white md:bg-transparent hover:text-white hover:bg-neutral-950 duration-300 px-10 md:px-16 py-4 text-neutral-900"
        >
            <div
                className="z-10 md:-z-10 absolute left-0 right-0 top-0 flex justify-center"
               
            >
                <div className="flex justify-between" style={{ width: '100%', opacity: 1, transform: 'none' }}>
                    <div className="border-t border-l" style={{ width: '8px', height: '8px', borderColor: 'rgb(0, 0, 0)' }}></div>
                    <div className="border-r border-t" style={{ width: '8px', height: '8px', borderColor: 'rgb(0, 0, 0)' }}></div>
                </div>
            </div>
            <div >
                <div className='z-30' >{textVal || "check it out"}</div>
            </div>
            <div className="z-10 md:-z-10 absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="flex justify-between" style={{ width: '100%', opacity: 1, transform: 'none' }}>
                    <div className="border-b border-l" style={{ width: '8px', height: '8px', borderColor: 'rgb(0, 0, 0)' }}></div>
                    <div className="border-b border-r" style={{ width: '8px', height: '8px', borderColor: 'rgb(0, 0, 0)' }}></div>
                </div>
            </div>
            
        </button>
    );
};

export default JoinWaitlistButton;
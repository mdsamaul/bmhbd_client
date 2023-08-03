import React from 'react';

const ImageType = ({ imgSrc }) => {



    return (
        <>
            <div className="w-full flex justify-center items-center h-[23vh] text-center mt-10 mb-5">
                <div className="w-1/3 ">
                    <img src={imgSrc} alt="logo" />
                </div>
            </div>

        </>
    );
};

export default ImageType;
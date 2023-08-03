import React from 'react';

const UploadedImage = ({ selectedFile, handleFileChange }) => {
    return (
        <div className='w-full p-20 flex justify-center items-center h-[23vh] text-center mb-5'>
            <div className='file_upload'>
                <div className='flex flex-col  text-center'>
                    <label>
                        <input
                            className='cursor-pointer hidden'
                            type='file'
                            name='image'
                            id='image'
                            accept='image/*'
                            hidden
                            onChange={handleFileChange}
                        />
                        <div className='cursor-pointer'>
                            <img src={selectedFile} alt="" />

                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default UploadedImage;
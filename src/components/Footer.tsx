import NextImage from 'next/image';

export const Footer = () => {
    return (
        <div
            className={
                'text-white bg-black grid grid-cols-1 md:grid-cols-3 gap-12 min-h-32 flex-grow'
            }
        >
            <div className={'text-center md:text-left uppercase font-bold'}>
                hello@superculture.io
            </div>
            <div className={'flex justify-center items-start'}>
                <NextImage src={'/logo1.svg'} alt={'logo'} height={150} width={82} />
            </div>
            <div className={'text-center md:text-right'}>
                <div className={'font-bold space-x-4'}>
                    <span>Contact Us</span>
                    <span>Instagram</span>
                </div>
                <div className={'text-gray-400 text-sm my-4'}>
                    SUPERCULTURE ©2020. All Rights Reserved Found everywhere on the Internet
                </div>
            </div>
        </div>
    );
};

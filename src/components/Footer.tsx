import NextImage from 'next/image';

export const Footer = () => {
    return (
        <div className={'text-white bg-black fixed bottom-0 left-0 right-0 z-0 pt-20'}>
            <div className={'container grid grid-cols-1 md:grid-cols-3 gap-12 min-h-32 flex-grow'}>
                <div className={'text-left'}>
                    <h4 className={'font-semibold text-xl'}>Contact Us</h4>
                    <div>On the internet</div>
                </div>
                <div className={'flex justify-start md:justify-center items-start'}>
                    {/*<NextImage src={'/logo1.svg'} alt={'logo'} height={150} width={82} />*/}
                    BRANDING
                </div>
                <div className={'text-left md:text-right'}>
                    <div className={'font-bold space-x-4'}>
                        <span>Contact Us</span>
                        <span>Instagram</span>
                    </div>
                </div>
            </div>
            <div className={'container text-gray-400 text-sm mt-12 mb-4'}>
                BRANDING ©2020. All Rights Reserved Found everywhere on the Internet
            </div>
        </div>
    );
};

import NextImage from 'next/image';
import { clsx } from 'clsx';

interface CardOverImageProps {
    imageSrc: string;
    cardSubheading: string;
    cardHeading: string;
    cardBody: string;
    cardLink: string;
}

export const CardOverImage = ({
    imageSrc,
    cardSubheading,
    cardHeading,
    cardBody,
    cardLink,
}: CardOverImageProps) => {
    return (
        <div className={'h-max text-white'}>
            <div className="flex md:hidden justify-center">
                <div className="mt-24 bg-black border-[1px] border-amber-50 p-12">
                    <div>
                        <h3 className="text-lg font-semibold mb-8">{cardSubheading}</h3>
                        <h1 className="text-5xl font-serif mb-8">{cardHeading}</h1>
                        <p className="mb-8">{cardBody}</p>
                        <a
                            className={clsx(
                                'text-red-600 hover:text-red-800 font-bold',
                                'after:content after:border-b-[1px] after:bg-white after:inline-block after:border-red-500 after:w-20 after:h-full after:-mr-[120%] after:mb-[4px] after:ml-4'
                            )}
                            href={cardLink}
                        >
                            EXPLORE MORE
                        </a>
                    </div>
                    <div className={'max-w-sm mt-16'}>
                        <NextImage src={imageSrc} alt={'pic'} width={490} height={735} />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex justify-center">
                <div className="w-2/5">
                    <div className="transform translate-x-12 translate-y-12">
                        <NextImage
                            className="max-h-fit w-auto"
                            src={imageSrc}
                            alt="picture"
                            width={490}
                            height={735}
                        />
                    </div>
                </div>

                <div className="w-1/2 mt-24 bg-black border-[1px] border-amber-50 p-12 relative">
                    <div>
                        <h3 className="text-lg font-semibold mb-8">{cardSubheading}</h3>
                        <h1 className="text-5xl font-serif mb-8">{cardHeading}</h1>
                        <p className="mb-8">{cardBody}</p>
                        <a
                            className={clsx(
                                'text-red-600 hover:text-red-800 font-bold',
                                'after:content after:border-b-[1px] after:bg-white after:inline-block after:border-red-500 after:w-20 after:h-full after:-mr-[120%] after:mb-[4px] after:ml-4'
                            )}
                            href={cardLink}
                        >
                            EXPLORE MORE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

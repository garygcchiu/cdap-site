import Link from 'next/link';

interface CenteredCTAProps {
    header: string;
    subheader: string;
    body: string;
    link: string;
}

export const CenteredCTA = ({ header, subheader, body, link }: CenteredCTAProps) => (
    <div className={'text-white flex flex-col justify-center items-center'}>
        <h1 className={'text-5xl mb-4'}>{header}</h1>
        <h3 className={'italic mb-4'}>{subheader}</h3>
        <p className={'mb-8 md:px-16'}>{body}</p>
        <Link
            href={link}
            className={
                'uppercase border-red-500 border-b-2 text-red-500 hover:text-red-800 hover:border-red-800'
            }
        >
            Explore More{' '}
        </Link>
    </div>
);

import NextImage from '@/components/ui/NextImage';

interface TeamProps {
    data: TeamProfileProps[];
}

interface TeamProfileProps {
    name: string;
    title: string;
    picture: string;
    biography: string;
}

const TeamProfile = ({ name, title, picture, biography }: TeamProfileProps) => {
    return (
        <div className={'w-full mb-8'}>
            <NextImage
                alt={name}
                src={picture}
                width={0}
                height={0}
                useSkeleton
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className={'md:w-11/12'}
            />
            <h3 className={'text-4xl font-light mt-4 mb-2'}>{name}</h3>
            <h5 className={'text-muted-foreground font-normal mb-2'}>{title}</h5>
            <div>
                {biography.split('\n').map((i, key) => {
                    return (
                        <p className={'mb-2 font-[350] text-sm'} key={key}>
                            {i}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export const Team = ({ data }: TeamProps) => {
    return (
        <section className={'pt-[100px] container mb-12 md:mb-16'}>
            <h1 className={'font-light text-4xl text-foreground mb-12'}>Our Team</h1>
            <div className={`grid grid-cols-1 md:grid-cols-${data.length} md:space-x-8`}>
                {data.map((d, index) => (
                    <TeamProfile
                        name={d.name}
                        title={d.title}
                        picture={d.picture}
                        biography={d.biography}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
};

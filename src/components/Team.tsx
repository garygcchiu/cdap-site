import NextImage from '@/components/ui/NextImage';
import { TeamMember } from '@/lib/types';
import { urlFor } from '@/lib/utils';

interface TeamProps {
    data: TeamMember[];
}

const TeamProfile = ({ name, title, image, biography }: Omit<TeamMember, '_id'>) => {
    return (
        <div className={'md:w-10/12 mb-8'}>
            <NextImage
                alt={name}
                src={urlFor(image).url()}
                width={0}
                height={0}
                useSkeleton
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
            <h3 className={'text-4xl font-light mt-4 mb-2'}>{name}</h3>
            <h5 className={'text-muted-foreground font-normal mb-4'}>{title}</h5>
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
            <div className={`grid grid-cols-1 md:grid-cols-${data.length}`}>
                {data.map((d, index) => (
                    <TeamProfile
                        name={d.name}
                        title={d.title}
                        image={d.image}
                        biography={d.biography}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
};

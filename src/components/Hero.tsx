import React from 'react';

interface HeroProps {
    text: string;
}

export const Hero: React.FC<HeroProps> = ({ text }: HeroProps) => {
    return (
        <section className={'pt-[30vh]'}>
            <div className="relative overflow-hidden container">
                <h1 className={'text-4xl font-light max-w-lg'}>{text}</h1>
            </div>
        </section>
    );
};

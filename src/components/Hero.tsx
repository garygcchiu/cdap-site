import React from 'react';
import { AnimateIn } from '@/components/ui/AnimateIn.client';
import { AnimationType } from '@/lib/types';

interface HeroProps {
    data: string;
}

export const Hero: React.FC<HeroProps> = ({ data }: HeroProps) => {
    return (
        <section className={'pt-[30vh]'}>
            <div className="relative overflow-visible container mb-1">
                <AnimateIn animationType={AnimationType.FADE_IN_TRANSLATE_UP}>
                    <h1 className="text-4xl md:text-6xl font-light max-w-lg md:max-w-4xl">
                        {data}
                    </h1>
                </AnimateIn>
            </div>
        </section>
    );
};

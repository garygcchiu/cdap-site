import { AnimateIn } from '@/components/ui/AnimateIn.client';
import { AnimationType } from '@/lib/types';

interface SubHeroProps {
    data: string[];
}

export const SubHero = ({ data }: SubHeroProps) => {
    return (
        <section className={'py-[100px] container'}>
            <div className={'max-w-2xl flex flex-col'}>
                <AnimateIn animationType={AnimationType.FADE_IN_TRANSLATE_UP} delay={'500ms'}>
                    {data.map((t, index) => (
                        <div key={index} className={'mb-4'}>
                            {t}
                        </div>
                    ))}
                </AnimateIn>
            </div>
        </section>
    );
};

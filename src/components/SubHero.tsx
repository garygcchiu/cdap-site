import { AnimationType } from '@/lib/types';
import { AnimateIn } from '@/components/ui/AnimateIn.client';

interface SubHeroProps {
    text: string[];
}

export const SubHero = ({ text }: SubHeroProps) => {
    return (
        <section className={'pt-[100px] container'}>
            <div className={'max-w-2xl flex flex-col'}>
                <AnimateIn animationType={AnimationType.FADE_IN_TRANSLATE_UP} delay={'500ms'}>
                    {text.map((t, index) => (
                        <div key={index} className={'mb-4'}>
                            {t}
                        </div>
                    ))}
                </AnimateIn>
            </div>
        </section>
    );
};

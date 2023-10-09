import { TabbedSlideshow, TabbedSlideshowProps } from '@/components/ui/TabbedSlideshow';

export const Services = ({ data }: TabbedSlideshowProps) => {
    return (
        <section className={'py-[100px] bg-black'}>
            <div className={'container'}>
                <h1 className={'font-light text-4xl mb-8 text-right'}>Our Services</h1>
                <TabbedSlideshow data={data} />
            </div>
        </section>
    );
};

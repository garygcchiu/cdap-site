import { TabbedSlideshow, TabbedSlideshowProps } from '@/components/ui/TabbedSlideshow';

export const Services = ({ data }: TabbedSlideshowProps) => {
    return (
        <section className={'py-[100px] dark bg-black'} id={'services'}>
            <div className={'container'}>
                <TabbedSlideshow data={data} />
            </div>
        </section>
    );
};

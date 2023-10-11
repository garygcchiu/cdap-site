'use client';

import { useEffect, useRef, useState } from 'react';
import { TabbedSlideshow, TabbedSlideshowProps } from '@/components/ui/TabbedSlideshow';

export const Services = ({ data }: TabbedSlideshowProps) => {
    const containerRef = useRef(null);
    const [spacerHeight, setSpacerHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            // This will get the full height of the content.
            setSpacerHeight(containerRef.current.clientHeight);
        }
    }, [containerRef]);

    return (
        <div ref={containerRef}>
            <section className={'sticky top-0 pt-[100px] container mb-12 md:mb-16'}>
                <div className={'container'}>
                    <TabbedSlideshow data={data} />
                </div>
            </section>
            <div style={{ height: spacerHeight }}></div> {/* Spacer */}
        </div>
    );
};

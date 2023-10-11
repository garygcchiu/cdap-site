'use client';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { StaticImageData } from 'next/image';
import clsx from 'clsx';
import NextImage from '@/components/ui/NextImage';

export interface TabProps {
    title: string;
    body: string;
    listItems?: string[];
    image: StaticImageData;
}

export interface TabbedSlideshowProps {
    data: TabProps[];
}

export const TabbedSlideshow = ({ data }: TabbedSlideshowProps) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [fadingImageIndex, setFadingImageIndex] = useState(0);
    const [fadeOpacity, setFadeOpacity] = useState(1);
    const containerRef = useRef(null);

    useEffect(() => {
        // Start the fade-out effect
        setFadeOpacity(0);

        const timeout = setTimeout(() => {
            // After the transition completes, set the fading image to the current one
            setFadingImageIndex(selectedTab);
            // Reset the opacity for the next fade-out
            setFadeOpacity(1);
        }, 300);
        return () => clearTimeout(timeout);
    }, [selectedTab]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const containerStart = containerRef.current.offsetTop;
            const containerHeight = containerRef.current.clientHeight;
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate the actual scrollable range within the container
            const containerScrollRange = containerHeight - windowHeight;

            // Determine the scroll range per tab
            const tabScrollRange = containerScrollRange / data.length;

            // Calculate the current scroll position within the container
            const currentScrollPosition = scrollPosition + windowHeight / 2 - containerStart;

            // Determine the active tab based on the current scroll position
            let newTabIndex = Math.floor(currentScrollPosition / tabScrollRange);

            // Clamp newTabIndex between 0 and data.length - 1
            newTabIndex = Math.max(0, Math.min(newTabIndex, data.length - 1));

            // Update the active tab if it's different from the current one and data[newTabIndex] is defined
            if (newTabIndex !== selectedTab && data[newTabIndex]) {
                setSelectedTab(newTabIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [selectedTab, data.length]);

    return (
        <div
            ref={containerRef}
            style={{ position: 'sticky', top: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
            <div className="col-span-1 flex flex-col space-y-8">
                <h1 className={'font-light text-4xl mb-4 text-foreground'}>Our Services</h1>
                {data.map((tab, index) => (
                    <h3
                        key={index}
                        className={clsx(
                            'text-2xl cursor-pointer text-left',
                            index === selectedTab ? 'text-foreground' : 'text-muted-foreground'
                        )}
                        onClick={() => setSelectedTab(index)}
                    >
                        {tab.title}
                    </h3>
                ))}
            </div>
            <div className="col-span-2 flex flex-col space-y-16 mt-8 md:mt-0">
                <div className={'flex justify-center max-w-lg self-center relative'}>
                    {/* Back Layer (always visible) */}
                    <NextImage src={data[selectedTab].image} alt={'image'} useSkeleton={true} />
                    {/* Front Layer (fades out) */}
                    <div
                        className={'absolute top-0 left-0 transition-opacity duration-300'}
                        style={{ opacity: fadeOpacity }}
                    >
                        <NextImage
                            src={data[fadingImageIndex].image}
                            alt={'image'}
                            useSkeleton={true}
                        />
                    </div>
                </div>
                <p className={'text-foreground'}>{data[selectedTab].body}</p>
            </div>
        </div>
    );
};

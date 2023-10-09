'use client';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export interface TabProps {
    title: string;
    body: string;
    listItems?: string[];
    image: string;
}

export interface TabbedSlideshowProps {
    data: TabProps[];
}

export const TabbedSlideshow = ({ data }: TabbedSlideshowProps) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col space-y-8">
                {data.map((tab, index) => (
                    <h3
                        key={index}
                        className={clsx(
                            'text-2xl font-light cursor-pointer text-left',
                            index === selectedTab ? 'text-foreground' : 'text-muted-foreground'
                        )}
                        onClick={() => setSelectedTab(index)}
                    >
                        {tab.title}
                    </h3>
                ))}
            </div>
            <div className="col-span-2 flex flex-col">
                <div>
                    <Image src={data[selectedTab].image} alt={'image'} width={500} height={200} />
                </div>
                <div>{data[selectedTab].body}</div>
            </div>
        </div>
    );
};

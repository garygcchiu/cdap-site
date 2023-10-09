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
            <div className="col-span-2 flex flex-col space-y-16">
                <div className={'flex justify-center'}>
                    <Image src={data[selectedTab].image} alt={'image'} width={400} height={200} />
                </div>
                <p className={'text-foreground'}>{data[selectedTab].body}</p>
            </div>
        </div>
    );
};

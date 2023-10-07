import React from 'react';
import { clsx } from 'clsx';
import Marquee from 'react-fast-marquee';

interface TickerProps {
    items: string[];
}

const TickerItem = ({ text, index }: { text: string; index: number }) => {
    return (
        <div className={clsx('inline-block px-8 text-lg text-white uppercase mr-16')}>{text}</div>
    );
};

export const Ticker = ({ items = [] }: TickerProps) => (
    <div className={clsx(' h-16 w-full overflow-hidden -mt-10 relative')}>
        <Marquee loop={0} speed={100} gradient={true} gradientColor={'black'} gradientWidth={64}>
            {items.map((item, index) => (
                <TickerItem text={item} key={index} index={index} />
            ))}
        </Marquee>
    </div>
);

'use client';
import React from 'react';
import NextImage from 'next/image';
import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';

export const ScrollDown = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <>
            <div
                ref={ref}
                style={{ height: '1px', width: '100%', position: 'relative', top: '50vh' }}
            />
            <div
                className={clsx(
                    'absolute z-10 top-[calc(78vh-80px)] md:top-[calc(88vh-80px)] left-[calc(50%-50px)] animate-spin-slow'
                )}
            >
                <div
                    className={clsx(
                        'transition-opacity duration-500',
                        inView ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    <NextImage src={'/scroll.svg'} alt={'scroll down'} height={90} width={90} />
                </div>
            </div>
        </>
    );
};

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { rakkas } from '@/app/fonts';
import { clsx } from 'clsx';
import useMousePosition from '@/hooks/useMousePosition';

interface TextRowProps {
    text: string;
    className: string;
}

const TextRow: React.FC<TextRowProps> = ({ text, className }) => (
    <h1
        className={clsx(
            className,
            'absolute left-1/2 top-1/4 transform -translate-x-1/2 w-11/12',
            'text-center font-bold',
            'text-[4.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] lg:top-[20%]'
        )}
    >
        {text.split(' ').map((word, index) => (
            <React.Fragment key={index}>
                <div key={index} className={`inline-block ${rakkas.className}`}>
                    {word}
                </div>
                {index < text.split(' ').length - 1 && <br />}
            </React.Fragment>
        ))}
    </h1>
);

interface HeroTextProps {
    text: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text }) => (
    <div>
        <TextRow
            text={text}
            className={clsx(
                'z-[4] text-stroke-1 text-stroke-fill-transparent text-stroke-white',
                'leading-none'
            )}
        />
        <TextRow text={text} className={clsx('z-0 text-white tracking-tight', 'leading-none')} />
    </div>
);

export const Hero: React.FC = () => {
    const movementRef = useRef<HTMLDivElement>(null);
    const { x, y } = useMousePosition();
    const initialMovementDone = useRef(false);

    useEffect(() => {
        if (movementRef.current && x && y) {
            const { innerWidth, innerHeight } = window;
            const xPos = -(x - innerWidth / 2) / 1.5;
            const yPos = -(y - innerHeight / 2) / 10;

            if (!initialMovementDone.current) {
                movementRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

                // Mark the initial movement as done
                initialMovementDone.current = true;

                // Remove the transition after it's done to avoid any animation for subsequent movements
                setTimeout(() => {
                    if (movementRef.current) {
                        movementRef.current.style.transition = 'none';
                    }
                }, 500); // 0.5s matches the duration of the transition
            } else {
                movementRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
            }
        }
    }, [x, y]);

    return (
        <div className="h-screen relative overflow-hidden">
            <div
                ref={movementRef}
                className={clsx(
                    'absolute inset-0 transform translate-x-[-50%] translate-y-[-50%] transform-style[preserve-3d] backface-visibility[hidden] z-[1] transition-transform ease-in-out'
                )}
            >
                <div className="bg-black fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 skew-x-[20deg] h-[95%] md:h-4/5 w-1/5" />
            </div>
            <HeroText text="SUPER CULTURE" />
        </div>
    );
};

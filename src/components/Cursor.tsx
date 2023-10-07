'use client';
import React, { useEffect, useState } from 'react';
import useMousePosition from '@/hooks/useMousePosition';
import { clsx } from 'clsx';

export const Cursor = () => {
    const { x, y } = useMousePosition();
    const [trailingX, setTrailingX] = useState<number | null>(null);
    const [trailingY, setTrailingY] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleMouseOver = () => {
            setIsVisible(true);
        };

        const handleMouseOut = () => {
            setIsVisible(false);
        };

        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setTrailingX(x);
            setTrailingY(y);
        }, 100);
    }, [x, y]);

    return (
        <>
            <div
                id="dot-cursor"
                className={clsx(
                    'opacity-0 fixed z-[99] w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out bg-white mix-blend-difference pointer-events-none ',
                    isVisible ? 'md:opacity-100' : 'md:opacity-0'
                )}
                style={{ left: x ? `${x}px` : '0px', top: y ? `${y}px` : '0px' }}
            />
            <div
                id={'trailing-cursor'}
                className={clsx(
                    'opacity-0 fixed z-[98] w-10 h-10 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out mix-blend-difference border-2 border-white pointer-events-none',
                    isVisible ? 'md:opacity-100' : 'md:opacity-0'
                )}
                style={{
                    left: trailingX ? `${trailingX}px` : '0px',
                    top: trailingY ? `${trailingY}px` : '0px',
                }}
            />
        </>
    );
};

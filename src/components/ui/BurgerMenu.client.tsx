'use client';

import React, { FC, useEffect, useState } from 'react';
import { clsx } from 'clsx';
import ReactDOM from 'react-dom';

interface BurgerMenuProps {
    showLabel?: boolean;
    children: React.ReactNode;
}

interface BurgerMenuItemProps {
    children: React.ReactNode;
    style: {
        animationDelay?: string;
    };
    isOpen?: boolean;
}

export const BurgerMenuClient = ({ showLabel, children }: BurgerMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [portalElement, setPortalElement] = useState<Element | null>(null);

    useEffect(() => {
        const element = document.getElementById('portal');
        setPortalElement(element);
    }, []);

    const backdropClasses = clsx(
        'fixed inset-0 bg-white transition-opacity duration-300 z-20',
        isOpen ? 'opacity-90' : 'opacity-0'
    );

    const contentClasses = clsx(
        'fixed top-[10%] w-full h-screen bg-white bg-opacity-90 shadow-lg p-4 overflow-y-auto text-black z-50 transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0'
    );

    return (
        <>
            <div className="relative flex" onClick={() => setIsOpen(!isOpen)}>
                {showLabel && <span className={'mr-3 text-sm cursor-pointer'}>MENU</span>}
                <button className="focus:outline-none">
                    <div
                        className={`${
                            isOpen ? 'translate-y-[5px]' : ''
                        } w-6 h-[1px] bg-black mb-1 transition-transform duration-200`}
                    />
                    <div
                        className={`mb-1 ${
                            isOpen ? 'opacity-0 mb-0' : ''
                        } w-6 h-[1px] bg-black  transition-transform duration-200`}
                    />
                    <div
                        className={`${
                            isOpen ? '-translate-y-[5px]' : ''
                        } w-6 h-[1px] bg-black transition-transform duration-200`}
                    />
                </button>
            </div>
            {portalElement && isOpen
                ? ReactDOM.createPortal(
                      <>
                          <div
                              className={backdropClasses}
                              onClick={() => setIsOpen(false)}
                              style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                          />
                          <div className={contentClasses} onClick={() => setIsOpen(false)}>
                              <div className={'flex flex-col self-end fixed right-[8%]'}>
                                  {isOpen &&
                                      React.Children.map(children, (child, index) =>
                                          React.cloneElement(child as React.ReactElement<any>, {
                                              isOpen,
                                          })
                                      )}
                              </div>
                          </div>
                      </>,
                      portalElement
                  )
                : null}{' '}
        </>
    );
};

const Item: FC<BurgerMenuItemProps> = ({ children, style, isOpen }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timeout = setTimeout(
                () => {
                    setIsAnimated(true);
                },
                style.animationDelay ? parseInt(style.animationDelay) : 0
            );
            return () => clearTimeout(timeout);
        } else {
            setIsAnimated(false);
        }
    }, [style.animationDelay, isOpen]);

    return (
        <div
            className={clsx(
                'text-black text-2xl mb-2 text-right transition-all duration-500 ease-in-out',
                isAnimated ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            )}
            style={style}
        >
            {children}
        </div>
    );
};

BurgerMenuClient.Item = Item;

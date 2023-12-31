'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';
import { ProcessStepData } from '@/lib/types';
import { urlFor } from '@/lib/utils';

type StepProps = Omit<ProcessStepData, '_id'> & {
    setCurrentStepIndex: (index: number) => void;
};

interface ProcessProps {
    data: ProcessStepData[];
}

const Step = ({ stepNumber: stepNumber, header, body, image, setCurrentStepIndex }: StepProps) => {
    const [ref, inView] = useInView({
        threshold: 1,
    });

    useEffect(() => {
        if (inView) {
            setCurrentStepIndex(stepNumber ? stepNumber - 1 : 0);
        }
    }, [inView, stepNumber, setCurrentStepIndex]);

    return (
        <div ref={ref} className={'pt-[50px] pb-[25px] md:pt-[10vh] md:pb-[25vh] md:pr-8'}>
            <h5>0{stepNumber}</h5>
            <h3 className={'font-semibold text-3xl mb-4 mt-1'}>{header}</h3>
            <p className={'max-w-md font-[350]'}>{body}</p>
        </div>
    );
};

export const Process = ({ data }: ProcessProps) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [fadingImageIndex, setFadingImageIndex] = useState(0);
    const [fadeOpacity, setFadeOpacity] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Start the fade-out effect
        setFadeOpacity(0);

        const timeout = setTimeout(() => {
            // After the transition completes, set the fading image to the current one
            setFadingImageIndex(currentStepIndex);
            // Reset the opacity for the next fade-out
            setFadeOpacity(1);
        }, 300);
        return () => clearTimeout(timeout);
    }, [currentStepIndex]);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <section className={'pt-[100px]'} id={'process'}>
            <div className={'container'}>
                <h1 className={'font-light text-4xl'}>Our Process</h1>
                <div className={'grid grid-cols-1 md:grid-cols-2'}>
                    <div className={clsx(isMobile ? 'mb-12' : '')}>
                        {data
                            .sort((a, b) => a.stepNumber - b.stepNumber)
                            .map((t, index) => (
                                <Step
                                    stepNumber={t.stepNumber}
                                    header={t.header}
                                    body={t.body}
                                    key={index}
                                    image={t.image}
                                    setCurrentStepIndex={() => setCurrentStepIndex(index)}
                                />
                            ))}
                    </div>
                    {!isMobile && (
                        <div className={'relative mb-[calc(10vh+200px)] md:mb-[calc(35vh+200px)]'}>
                            {/* Adjusted the margin-bottom */}
                            <div className="sticky top-1/4 mt-4 md:mt-32">
                                {/* Adjusted the top class */}
                                {/* Back Layer (always visible) */}
                                <div className="absolute top-0 left-0">
                                    {data.length && (
                                        <Image
                                            src={urlFor(data[currentStepIndex]?.image).url()}
                                            alt={'image'}
                                            width={500}
                                            height={200}
                                        />
                                    )}
                                </div>
                                {/* Front Layer (fades out) */}
                                <div
                                    className={
                                        'absolute top-0 left-0 transition-opacity duration-300'
                                    }
                                    style={{ opacity: fadeOpacity }}
                                >
                                    {data.length && (
                                        <Image
                                            src={urlFor(data[fadingImageIndex]?.image).url()}
                                            alt={'image'}
                                            width={500}
                                            height={200}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

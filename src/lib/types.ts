import { Image } from '@sanity/types';

export enum AnimationType {
    FADE_IN_TRANSLATE_UP,
    FADE_IN_TRANSLATE_DOWN,
}

export interface AnimateInAnimation {
    initialClass: string;
    finalClass: string;
}

export const ANIMATION_MAPPING: Record<AnimationType, AnimateInAnimation> = {
    [AnimationType.FADE_IN_TRANSLATE_UP]: {
        initialClass: 'translate-y-4 opacity-0',
        finalClass: 'translate-y-0 opacity-100',
    },
    [AnimationType.FADE_IN_TRANSLATE_DOWN]: {
        initialClass: '-translate-y-[4] opacity-0',
        finalClass: 'translate-y-0 opacity-100',
    },
};

export type ProcessStepData = {
    _id: string;
    header: string;
    body: string;
    stepNumber: number;
    image: Image;
};

export type HeroData = {
    _id: string;
    header: string;
    subHeader: string;
};

export type TeamMember = {
    _id: string;
    name: string;
    title: string;
    biography: string;
    image: Image;
};

export type Service = {
    _id: string;
    title: string;
    description: string;
    image: Image;
};

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

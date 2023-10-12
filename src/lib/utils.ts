import imageUrlBuilder from '@sanity/image-url';
import { Image } from '@sanity/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { client } from '@/lib/sanity/client';

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function urlFor(source: Image) {
    return builder.image(source);
}

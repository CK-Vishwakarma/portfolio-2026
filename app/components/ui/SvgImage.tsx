'use client';

import Image, { ImageProps } from 'next/image';

interface SvgImageProps extends Omit<ImageProps, 'src'> {
    /** Path to the SVG file in the public folder (e.g., '/assets/icon.svg') */
    src: string;
    /** Optional class name for the wrapper div */
    className?: string;
    /** Size (width/height) if aspect ratio is square. Use width/height props for non-square */
    size?: number;
}

/**
 * Reusable component to render SVG images from the public assets folder.
 * Wraps Next.js Image component for optimized loading.
 */
export function SvgImage({ src, alt, className, size, width, height, ...props }: SvgImageProps) {
    const defaultSize = size || 24;

    return (
        <div className={`relative flex items-center justify-center ${className || ''}`}>
            <Image
                src={src}
                alt={alt}
                width={width || defaultSize}
                height={height || defaultSize}
                className="w-full h-full object-contain"
                {...props}
            />
        </div>
    );
}

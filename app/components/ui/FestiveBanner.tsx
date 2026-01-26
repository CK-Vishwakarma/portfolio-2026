'use client';

import { festiveThemes, FestiveTheme } from '../../lib/festiveBannerConstants';
export { festiveThemes, getActiveTheme, type FestiveTheme } from '../../lib/festiveBannerConstants';

interface FestiveBannerProps {
    theme?: FestiveTheme;
    height?: string;
    animationDuration?: number;
}

export function FestiveBanner({
    theme = 'republicDay',
    height = 'h-1',
    animationDuration = 4,
}: FestiveBannerProps) {
    const selectedTheme = festiveThemes[theme];

    // Don't render if theme is 'none' or not enabled
    if (theme === 'none' || !selectedTheme.enabled) {
        return null;
    }

    // Generate gradient from theme colors
    const gradientStops = selectedTheme.colors
        .map((color, index) => {
            const position = (index / (selectedTheme.colors.length - 1)) * 100;
            return `${color} ${position}%`;
        })
        .join(', ');

    return (
        <div
            className={`${height} w-full`}
            style={{
                background: `linear-gradient(90deg, ${gradientStops})`,
                backgroundSize: '300% 100%',
                animation: `festive-wave ${animationDuration}s ease-in-out infinite`,
            }}
            aria-label={`${selectedTheme.name} celebration banner`}
        />
    );
}

import { SvgImage } from '../components/ui/SvgImage';

// ============================================================================
// Types
// ============================================================================

export interface FestiveThemeConfig {
    name: string;
    greeting: string;
    icon: React.FC<{ className?: string }>;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
    };
    enabled: boolean;
}

// ============================================================================
// Icons
// ============================================================================

export const IndiaFlagIcon = ({ className }: { className?: string }) => (
    <SvgImage
        src="/assets/india-flag-icon.svg"
        alt="India"
        className={className}
        size={24}  // Default size, overridden by className in usage
    />
);

export const DiyaIcon = ({ className }: { className?: string }) => (
    <SvgImage
        src="/assets/diwali-festival-diya-icon.svg"
        alt="Happy Diwali"
        className={className}
        size={24}
    />
);

export const ChristmasTreeIcon = ({ className }: { className?: string }) => (
    <SvgImage
        src="/assets/christmas-tree-xmas-icon.svg"
        alt="Happy Christmas"
        className={className}
        size={24}
    />
);

export const PartyPopperIcon = ({ className }: { className?: string }) => (
    <SvgImage
        src="/assets/happy-new-year-icon.svg"
        alt="Happy New Year"
        className={className}
        size={24}
    />
);

export const ColorPaletteIcon = ({ className }: { className?: string }) => (
    <SvgImage
        src="/assets/rainbow-icon.svg"
        alt="Happy Holi"
        className={className}
        size={24}
    />
);

// ============================================================================
// Theme Configuration
// ============================================================================

export const celebrationThemes: Record<string, FestiveThemeConfig> = {
    republicDay: {
        name: 'Republic Day',
        greeting: 'Happy Republic Day!',
        icon: IndiaFlagIcon,
        colors: {
            primary: '#ff9933',    // Saffron
            secondary: '#ffffff',  // White
            accent: '#138808',     // Green
        },
        enabled: true,
    },
    independenceDay: {
        name: 'Independence Day',
        greeting: 'Happy Independence Day!',
        icon: IndiaFlagIcon,
        colors: {
            primary: '#ff9933',
            secondary: '#ffffff',
            accent: '#138808',
        },
        enabled: false,
    },
    diwali: {
        name: 'Diwali',
        greeting: 'Happy Diwali!',
        icon: DiyaIcon,
        colors: {
            primary: '#ff6b00',
            secondary: '#ffd700',
            accent: '#ff1493',
        },
        enabled: false,
    },
    christmas: {
        name: 'Christmas',
        greeting: 'Merry Christmas!',
        icon: ChristmasTreeIcon,
        colors: {
            primary: '#c41e3a',
            secondary: '#ffffff',
            accent: '#228b22',
        },
        enabled: false,
    },
    newYear: {
        name: 'New Year',
        greeting: 'Happy New Year!',
        icon: PartyPopperIcon,
        colors: {
            primary: '#ffd700',
            secondary: '#c0c0c0',
            accent: '#ff69b4',
        },
        enabled: false,
    },
    holi: {
        name: 'Holi',
        greeting: 'Happy Holi!',
        icon: ColorPaletteIcon,
        colors: {
            primary: '#ff1493',
            secondary: '#00bfff',
            accent: '#ffd700',
        },
        enabled: false,
    },
};

export function getActiveCelebration(): FestiveThemeConfig | null {
    const activeTheme = Object.values(celebrationThemes).find(theme => theme.enabled);
    return activeTheme || null;
}

export interface FestiveThemeConfig {
    name: string;
    colors: string[];
    enabled: boolean;
}

// Festive themes configuration
// Add new themes here for different occasions
export const festiveThemes: Record<string, FestiveThemeConfig> = {
    // Indian Republic Day - January 26
    republicDay: {
        name: 'Republic Day',
        colors: ['#ff9933', '#ff9933', '#ffffff', '#ffffff', '#138808', '#138808'],
        enabled: true,
    },
    // Indian Independence Day - August 15
    independenceDay: {
        name: 'Independence Day',
        colors: ['#ff9933', '#ff9933', '#ffffff', '#ffffff', '#138808', '#138808'],
        enabled: false,
    },
    // Diwali - Festival of Lights
    diwali: {
        name: 'Diwali',
        colors: ['#ff6b00', '#ffd700', '#ff1493', '#9400d3', '#ffd700', '#ff6b00'],
        enabled: false,
    },
    // Christmas
    christmas: {
        name: 'Christmas',
        colors: ['#c41e3a', '#c41e3a', '#ffffff', '#228b22', '#228b22', '#c41e3a'],
        enabled: false,
    },
    // Holi - Festival of Colors
    holi: {
        name: 'Holi',
        colors: ['#ff1493', '#00bfff', '#ffd700', '#32cd32', '#ff6347', '#9400d3'],
        enabled: false,
    },
    // New Year
    newYear: {
        name: 'New Year',
        colors: ['#ffd700', '#c0c0c0', '#ffd700', '#c0c0c0', '#ffd700', '#c0c0c0'],
        enabled: false,
    },
    // Pride Month - June
    pride: {
        name: 'Pride',
        colors: ['#ff0000', '#ff8c00', '#ffff00', '#008000', '#0000ff', '#4b0082'],
        enabled: false,
    },
    // Halloween
    halloween: {
        name: 'Halloween',
        colors: ['#ff6600', '#000000', '#ff6600', '#800080', '#000000', '#ff6600'],
        enabled: false,
    },
    // None - No festive banner
    none: {
        name: 'None',
        colors: [],
        enabled: false,
    },
};

export type FestiveTheme = keyof typeof festiveThemes;

// Export a helper to get the currently active theme
export function getActiveTheme(): FestiveTheme {
    const activeTheme = Object.entries(festiveThemes).find(
        ([key, value]) => key !== 'none' && value.enabled
    );
    return (activeTheme?.[0] as FestiveTheme) || 'none';
}

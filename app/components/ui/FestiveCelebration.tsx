'use client';

import { useEffect, useState } from 'react';
import { getActiveCelebration, FestiveThemeConfig } from '../../lib/festiveConstants';

// ============================================================================
// Types
// ============================================================================

interface FestiveCelebrationProps {
    autoShow?: boolean;
    showDelay?: number;
    particleCount?: number;
}

// ============================================================================
// Floating Particle Component
// ============================================================================

interface ParticleProps {
    color: string;
    delay: number;
    duration: number;
    size: number;
    left: number;
    shape: 'circle' | 'square' | 'triangle' | 'star';
}

function Particle({ color, delay, duration, size, left, shape }: ParticleProps) {
    const getShape = () => {
        switch (shape) {
            case 'circle':
                return 'rounded-full';
            case 'square':
                return 'rounded-sm rotate-45';
            case 'triangle':
                return 'triangle';
            case 'star':
                return 'star';
            default:
                return 'rounded-full';
        }
    };

    if (shape === 'star') {
        return (
            <div
                className="absolute animate-[float_linear_infinite]"
                style={{
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    bottom: '-20px',
                }}
            >
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={color}
                    className="animate-[spin_3s_linear_infinite]"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>
        );
    }

    return (
        <div
            className={`absolute ${getShape()} animate-[float_linear_infinite]`}
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                bottom: '-20px',
            }}
        />
    );
}

// ============================================================================
// Main Component
// ============================================================================

export function FestiveCelebration({
    autoShow = true,
    showDelay = 500,
    particleCount = 30,
}: FestiveCelebrationProps) {
    const [viewState, setViewState] = useState<'hidden' | 'modal' | 'minimized'>('hidden');
    const [particles, setParticles] = useState<ParticleProps[]>([]);

    const celebration = getActiveCelebration();

    // Generate particles on mount
    useEffect(() => {
        if (!celebration) return;

        const colors = [
            celebration.colors.primary,
            celebration.colors.secondary,
            celebration.colors.accent,
        ];

        const shapes: ParticleProps['shape'][] = ['circle', 'square', 'star'];

        const newParticles: ParticleProps[] = Array.from({ length: particleCount }, (_, i) => ({
            color: colors[i % colors.length],
            delay: Math.random() * 5,
            duration: 4 + Math.random() * 4,
            size: 8 + Math.random() * 16,
            left: Math.random() * 100,
            shape: shapes[Math.floor(Math.random() * shapes.length)],
        }));

        setParticles(newParticles);
    }, [celebration, particleCount]);

    // Initialize state on mount
    useEffect(() => {
        if (!autoShow || !celebration) return;

        const dismissed = sessionStorage.getItem('festive-celebration-dismissed');

        if (dismissed === 'true') {
            setViewState('minimized');
        } else {
            const timer = setTimeout(() => {
                setViewState('modal');
            }, showDelay);
            return () => clearTimeout(timer);
        }
    }, [autoShow, showDelay, celebration]);

    // Lock body scroll when modal is visible
    useEffect(() => {
        if (viewState === 'modal') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [viewState]);

    const handleMinimize = () => {
        setViewState('minimized');
        sessionStorage.setItem('festive-celebration-dismissed', 'true');
    };

    const handleRestore = () => {
        setViewState('modal');
    };

    if (!celebration || viewState === 'hidden') {
        return null;
    }

    const Icon = celebration.icon;

    return (
        <>
            {/* Floating Particles Background - Only visible in modal mode */}
            {viewState === 'modal' && (
                <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
                    {particles.map((particle, index) => (
                        <Particle key={index} {...particle} />
                    ))}
                </div>
            )}

            {/* Minimized Floating Button */}
            {viewState === 'minimized' && (
                <button
                    onClick={handleRestore}
                    className="fixed bottom-6 left-6 z-50 group cursor-pointer animate-[scaleIn_0.3s_ease-out]"
                    aria-label={`Open ${celebration.name} celebration`}
                >
                    <div className="relative w-14 h-14 rounded-full shadow-lg transition-transform duration-300 transform group-hover:scale-110 overflow-hidden ring-4 ring-white dark:ring-gray-800">
                        {/* Animated background */}
                        <div
                            className="absolute inset-0 opacity-90"
                            style={{
                                background: `linear-gradient(135deg, ${celebration.colors.primary}, ${celebration.colors.accent})`,
                            }}
                        />

                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white animate-[spin_10s_linear_infinite]" />
                        </div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute left-16 top-1/2 -translate-y-1/2 ml-2 px-3 py-1 bg-white dark:bg-gray-800 text-sm font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        {celebration.name}
                    </div>
                </button>
            )}

            {/* Celebration Modal */}
            {viewState === 'modal' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
                        onClick={handleMinimize}
                    />

                    {/* Card */}
                    <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden max-w-md w-full animate-[scaleIn_0.4s_ease-out]">
                        {/* Close/Minimize Button */}
                        <button
                            onClick={handleMinimize}
                            className="cursor-pointer absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                            aria-label="Minimize"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Animated Tricolor Header */}
                        <div
                            className="h-2 w-full"
                            style={{
                                background: `linear-gradient(90deg, 
                                    ${celebration.colors.primary} 0%, 
                                    ${celebration.colors.primary} 33%, 
                                    ${celebration.colors.secondary} 33%, 
                                    ${celebration.colors.secondary} 66%, 
                                    ${celebration.colors.accent} 66%, 
                                    ${celebration.colors.accent} 100%)`,
                            }}
                        />

                        {/* Content */}
                        <div className="p-8 text-center">
                            {/* Icon with bounce */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 blur-xl opacity-50" style={{ backgroundColor: celebration.colors.primary }}></div>
                                    <Icon className="w-20 h-20 animate-bounce relative z-10 text-gray-800 dark:text-gray-100" />
                                </div>
                            </div>

                            {/* Greeting */}
                            <h2
                                className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${celebration.colors.primary}, ${celebration.colors.accent})`,
                                }}
                            >
                                {celebration.greeting}
                            </h2>

                            {/* Message */}
                            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                                Wishing you and your loved ones a wonderful celebration! 🎊
                            </p>

                            {/* Decorative circles */}
                            <div className="flex justify-center gap-3 mb-6">
                                <div
                                    className="w-4 h-4 rounded-full animate-pulse"
                                    style={{ backgroundColor: celebration.colors.primary }}
                                />
                                <div
                                    className="w-4 h-4 rounded-full animate-pulse"
                                    style={{ backgroundColor: celebration.colors.secondary, animationDelay: '0.2s', border: '1px solid #ccc' }}
                                />
                                <div
                                    className="w-4 h-4 rounded-full animate-pulse"
                                    style={{ backgroundColor: celebration.colors.accent, animationDelay: '0.4s' }}
                                />
                            </div>

                            {/* Continue Button */}
                            <button
                                onClick={handleMinimize}
                                className="cursor-pointer px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                style={{
                                    background: `linear-gradient(135deg, ${celebration.colors.primary}, ${celebration.colors.accent})`,
                                }}
                            >
                                Continue to Site ✨
                            </button>
                        </div>

                        {/* Bottom decoration */}
                        <div
                            className="h-1 w-full"
                            style={{
                                background: `linear-gradient(90deg, 
                                    ${celebration.colors.accent} 0%, 
                                    ${celebration.colors.secondary} 50%, 
                                    ${celebration.colors.primary} 100%)`,
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default FestiveCelebration;

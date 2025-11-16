/**
 * DreamForge Design Tokens
 * Elder-focused accessibility standards
 */

export const colors = {
  // Primary Palette
  lavender: '#53355A',
  coral: '#C57022',
  lightPurple: '#C5AFCF',
  cream: '#F5F1E8',
  warmGray: '#E5E1DA',
  navy: '#2C3E50',
  
  // Semantic Colors
  textPrimary: '#2C3E50',      // WCAG AAA on light backgrounds
  textSecondary: '#4A5568',
  textInverse: '#F5F1E8',       // For dark backgrounds
  
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Backgrounds
  bgPrimary: '#FFFFFF',
  bgSecondary: '#F5F1E8',
  bgTertiary: '#E5E1DA',
};

export const typography = {
  // Base sizing - larger for elder accessibility
  baseSize: '18px',
  scale: 1.25,
  lineHeight: {
    tight: 1.4,
    normal: 1.6,
    relaxed: 1.8,
    loose: 2.0,
  },
  
  // Font families
  fontFamily: {
    sans: '"Inter", "DM Sans", system-ui, sans-serif',
    heading: '"Outfit", "Space Grotesk", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Consolas", monospace',
  },
  
  // Font weights
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
};

export const borderRadius = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  full: '9999px',
};

export const shadows = {
  soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  medium: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
  large: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Accessibility settings
export const a11y = {
  // Minimum touch target size (WCAG 2.1 Level AAA)
  minTouchTarget: '44px',
  
  // Animation preferences
  reducedMotion: {
    duration: '0.01ms',
    transition: 'none',
  },
  
  // Focus indicators
  focusRing: {
    width: '3px',
    style: 'solid',
    color: colors.lavender,
    offset: '2px',
  },
  
  // Contrast ratios (WCAG AAA)
  contrastRatio: {
    normalText: 7.0,    // AAA for normal text
    largeText: 4.5,     // AAA for large text (18pt+)
  },
};

// Animation durations
export const animation = {
  instant: '0ms',
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slowest: '1000ms',
  
  // Easing functions
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  a11y,
  animation,
};

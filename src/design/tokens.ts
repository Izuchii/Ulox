export const tokens = {
  color: {
    bg: '#F5F7FA',
    surface: '#FFFFFF',
    text: '#10243E',
    muted: '#6A778B',
    line: '#D9E1EC',
    primary: '#1E63FF',
    accent: '#00B894',
    warning: '#FDB022',
    danger: '#E5484D',
  },
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 },
  radius: { sm: 8, md: 12, lg: 16, xl: 20, pill: 999 },
  shadow: '0 8px 24px rgba(16, 36, 62, 0.08)',
  typography: {
    h1: { size: 28, weight: 700 },
    h2: { size: 20, weight: 600 },
    body: { size: 14, weight: 400 },
    meta: { size: 12, weight: 500 },
  },
} as const;

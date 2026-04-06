export const COLORS = {
    // Paleta principal
    purpleStrong:    '#7844E5',
    purpleWeak:      '#8577A3',
    yellowPale:      '#FFEE8C',
  
    // Profundidad y fondos
    purpleDark:      '#3B1A8A',
    purpleDeep:      '#1A0A42',
    purpleMid:       '#5C32B8',
    background:      '#0D0720',
    backgroundCard:  '#160D30',
    backgroundElevated: '#1F1245',
  
    // Neutros
    white:           '#FFFFFF',
    whiteAlpha80:    'rgba(255,255,255,0.8)',
    whiteAlpha40:    'rgba(255,255,255,0.4)',
    whiteAlpha10:    'rgba(255,255,255,0.1)',
  
    // Alphas de acento
    yellowAlpha30:   'rgba(255,238,140,0.3)',
    purpleAlpha30:   'rgba(120,68,229,0.3)',
    purpleAlpha15:   'rgba(120,68,229,0.15)',
  } as const;
  
  export type ColorKey = keyof typeof COLORS;
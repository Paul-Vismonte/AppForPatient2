import { alpha } from '@mui/material/styles';

/**
 * Utility function to create CSS variable with alpha value
 * @param color - The color value
 * @param opacity - The opacity value (0-1)
 * @returns CSS variable string
 */
export function varAlpha(color: string, opacity: number): string {
  return alpha(color, opacity);
}

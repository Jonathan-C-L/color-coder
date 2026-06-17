import { useState } from 'react';
import type { PaletteColors } from '../types/Color';


export const usePalette = (startColor = []) => {
    const [paletteColors, setPaletteColors] = useState<PaletteColors['colors']>(startColor);

    return {paletteColors, setPaletteColors};
};
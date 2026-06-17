import { useState } from 'react';
import type { PaletteColors } from '../types/Colors';


export const usePalette = () => {
    const [paletteColors, setPaletteColors] = useState<PaletteColors['colors']>([]);

    return {paletteColors, setPaletteColors};
};
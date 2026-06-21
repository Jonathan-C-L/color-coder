import type { PaletteColors, Color } from '../types/Color';
import { useState, useCallback } from 'react';

export const usePalette = (initial: PaletteColors['current'] = []) => {
    const [paletteColors, setPaletteColors] = useState<PaletteColors['current']>(initial);


    //Add color to palette
    const addColor = useCallback((hex: Color) => {
        setPaletteColors(prev => {
            // Prevent duplicate colors in exported palette
            if (!prev.includes(hex))
                return [...prev, hex];
            
            return prev;
        });
    }, []); 

    const resetPalette = useCallback(() => {
        setPaletteColors([]);
    }, []);

    return {paletteColors, addColor, resetPalette};
};
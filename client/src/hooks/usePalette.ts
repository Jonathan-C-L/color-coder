import type { Color } from '../types/Color';
import { useState, useCallback } from 'react';

export const usePalette = (initial: string[] = []) => {
    const [paletteColors, setPaletteColors] = useState<string[]>(initial);


    //Add color to palette
    const addColor = useCallback((hex: Color) => {
        setPaletteColors(prev => {
            return [...prev, hex];
        });
        console.log(paletteColors); // Diagnostics
    }, []); 

    const resetPalette = useCallback(() => {
        setPaletteColors([]);
    }, []);

    return {paletteColors, addColor, resetPalette};
};
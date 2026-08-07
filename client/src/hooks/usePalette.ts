import type { PaletteColors, Color } from '../types/Color';
import { useState, useCallback } from 'react';
import { config } from '../config/config';

export const usePalette = (initial: PaletteColors = []) => {
    const [paletteColors, setPaletteColors] = useState<PaletteColors>(initial);

    //Add color to palette
    const addColor = useCallback((hex: Color) => {
        setPaletteColors(prev => {
            // Prevent duplicate colors in exported palette AND limit palette size to MAX_PALETTE_SIZE
            if (!prev.includes(hex) && prev.length < config.MAX_PALETTE_SIZE)
                return [...prev, hex];

            return prev;
        });
    }, []); 

    const resetPalette = useCallback(() => {
        setPaletteColors([]);
    }, []);

    const undoChoice = useCallback(() => {
        setPaletteColors(prev => {
            // Return copy of array with last element removed - original copy preserved
            return [...prev].slice(0, -1);
        });
    }, []);

    const retrieveFromHistory = useCallback((colors: PaletteColors) => {
        setPaletteColors(colors);
    }, []);

    return {paletteColors, addColor, undoChoice, resetPalette, retrieveFromHistory};
};
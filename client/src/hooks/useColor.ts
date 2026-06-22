import type { Color } from '../types/Color';
import useEyeDropper from 'use-eye-dropper';
import { useState, useCallback } from 'react';
import { useError } from './useError';
import { isNotCanceled } from '../utils/Dropper.Error';


export const useColor = (startColor = '', onPick?: (color: Color) => void) => {
    const [color, setColor] = useState<Color>(startColor);
    const { open } = useEyeDropper();
    const { error, setError } = useError();

    // useEyeDropper will reject/cleanup the open() promise on unmount,
    // so setState never fires when the component is unmounted.
    const pickColor = useCallback(() => {
        // Using async/await (can be used as a promise as-well)
        const openPicker = async () => {
            try {
                // Get color hex code in all uppercase
                const picked = (await open()).sRGBHex.toUpperCase();

                // Display selected color
                setColor(picked);
                onPick?.(picked);
            } catch (e: unknown) {
                // Ensures component is still mounted
                // before calling setState
                if (isNotCanceled(e)) setError(e);
                // Here just to satisfy the linter, but this should never be hit since the error state is only set if the component is still mounted.
                if (error) return; 
            }
        };
        openPicker();
    }, [open, onPick]); // onPick allows adding colors when a color selected

    return {color, pickColor};
};
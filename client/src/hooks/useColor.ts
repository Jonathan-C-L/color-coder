import type { Color } from '../types/Color';
import type { DropperError } from '../types/DropperError';
import { useState, useCallback } from 'react';
import useEyeDropper from 'use-eye-dropper';
import { useError } from './useError';

export const useColor = (startColor = '#000000') => {
    const [color, setColor] = useState<Color>(startColor);
    const { open } = useEyeDropper();
    const { error, setError } = useError();

    // useEyeDropper will reject/cleanup the open() promise on unmount,
    // so setState never fires when the component is unmounted.
    const pickColor = useCallback(() => {
    // Using async/await (can be used as a promise as-well)
    const openPicker = async () => {
      try {
        const color = (await open()).sRGBHex.toUpperCase();

        // Display selected color
        setColor(color);
      } catch (e: DropperError | any) {
        // Ensures component is still mounted
        // before calling setState
        if (!e.canceled) setError(e);
        // Here just to satisfy the linter, but this should never be hit since the error state is only set if the component is still mounted.
        if (error) return; 
      }
    };
    openPicker();
    }, [open]);

    return {color, pickColor};
};
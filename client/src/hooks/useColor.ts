import { useState } from 'react';
import type { Color } from '../types/Color';

export const useColor = (startColor = '#000000') => {
    const [color, setColor] = useState<Color>(startColor);

    return {color, setColor};
};
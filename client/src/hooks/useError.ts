import { useState } from 'react';
import type { DropperError } from '../types/DropperError';

export const useError = () => {
    const [error, setError] = useState<DropperError>();

    return { error, setError };
};
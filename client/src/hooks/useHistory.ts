import { useState, useCallback } from 'react';
import type { PaletteColors, PaletteHistoryEntry } from '../types/Color';

export const useHistory = () => {
    const [history, setHistory] = useState<PaletteHistoryEntry[]>([]);

    const addToHistory = useCallback((newPalette: PaletteColors) => {
        const newEntry: PaletteHistoryEntry = {
            id: crypto.randomUUID(),
            colors: newPalette
        };
        
        setHistory(prev => {
            const updated = [newEntry, ...prev];
            return updated;
        });
    }, []);

    const removeFromHistory = useCallback((removeId: string) => {
        setHistory(prev => {
            const updated = prev.filter(entry => entry.id != removeId);
            return updated;
        });
    }, []);

    const deleteHistory = useCallback(() => {
        setHistory([]);
    }, []);

    return {history, addToHistory, removeFromHistory, deleteHistory};
}
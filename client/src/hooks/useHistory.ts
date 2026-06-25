/// <reference types="chrome" />

import { useState, useCallback } from 'react';
import type { PaletteColors, PaletteHistoryEntry } from '../types/Color';

const STORAGE_KEY = 'paletteHistory';

export const useHistory = () => {
    const [history, setHistory] = useState<PaletteHistoryEntry[]>([]);

    const addToHistory = useCallback((newPalette: PaletteColors) => {
        const newEntry: PaletteHistoryEntry = {
            id: crypto.randomUUID(),
            colors: newPalette
        };
        
        setHistory(prev => {
            const updated = [newEntry, ...prev];
            chrome.storage.local.set({[STORAGE_KEY]: updated});
            return updated;
        });
    }, []);

    const removeFromHistory = useCallback((removeId: string) => {
        setHistory(prev => {
            const updated = prev.filter(entry => entry.id != removeId);
            chrome.storage.local.set({[STORAGE_KEY]: updated});
            return updated;
        });
    }, []);

    const deleteHistory = useCallback(() => {
        setHistory([]);
        chrome.storage.local.set({[STORAGE_KEY]: []});
    }, []);

    return {history, setHistory};
}
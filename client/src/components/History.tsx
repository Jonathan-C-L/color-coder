import { config } from "../config/config";
import type { PaletteColors, PaletteHistoryEntry } from "../types/Color";
import { IconTrash } from "@tabler/icons-react";


type HistoryProp = {
    entries: PaletteHistoryEntry[];
    // onRestore?: (colors: PaletteColors) => void;
    onDelete?: (id: string) => void;
    clearHistory?: () => void;
    onRetrieve?: (colors: PaletteColors) => void;
}

export const History = ({entries, onDelete, clearHistory, onRetrieve}: HistoryProp) => {
    return (
        <section className="history">
            <header className="history-header">
                <label className="history-header__label">History</label>
                <div className="history-header__clear" onClick={clearHistory}>
                    <IconTrash size={config.ICON_SIZE} />
                </div>
            </header>

            {/* Conditionally show history empty message */}
            {entries.length === 0 && <p className="history-empty">No history to show.</p>}

            <ul className="history-list">
                {entries.map((entry) => (
                    <li className="history-row" key={entry.id} onClick={() => onRetrieve && onRetrieve(entry.colors)}>
                        <div className="history-row__swatches">
                            {entry.colors.map((c, i) => (
                                <span className="history-row__swatch" key={i} style={{ background: c, width: config.HISTORY_SWATCH_SIZE, height: config.HISTORY_SWATCH_SIZE, display: 'inline-block' }} />
                            ))}
                        </div>
                        {onDelete && <button className="history-row__delete" onClick={() => onDelete(entry.id)}>Delete</button>}
                    </li>
                ))}
            </ul>
        </section>
    );
};
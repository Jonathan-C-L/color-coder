import type { PaletteHistoryEntry } from "../types/Color";

type HistoryProp = {
    entries: PaletteHistoryEntry[];
    // onRestore?: (colors: PaletteColors) => void;
    onDelete?: (id: string) => void;
    clearHistory?: () => void;
}

export const History = ({entries, onDelete, clearHistory}: HistoryProp) => {
    return (
        <section className="history">
            <header className="history-header">
                <label className="history-header__label">History</label>
                <div className="history-header__clear" onClick={clearHistory}>
                    Clear
                </div>
            </header>
            {entries.length === 0 && <p className="history-empty">No history to show.</p>}
            <ul className="history-list">
                {entries.map(entry => (
                <li className="history-row" key={entry.id}>
                    <div className="history-row__swatches">
                        {entry.colors.map((c, i) => (
                            <span className="history-row__swatch" key={i} style={{ background: c, width: 16, height: 16, display: 'inline-block' }} />
                        ))}
                    </div>
                    {/* <time>{new Date(entry.createdAt).toLocaleString()}</time> */}
                    {/* {onRestore && <button onClick={() => onRestore(entry.colors)}>Restore</button>} */}
                    {onDelete && <button className="history-row__delete" onClick={() => onDelete(entry.id)}>Delete</button>}
                </li>
                ))}
            </ul>
        </section>
    );
};
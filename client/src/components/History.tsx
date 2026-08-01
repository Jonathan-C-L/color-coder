// import type { PaletteColors, PaletteHistoryEntry } from "../types/Color";

// type HistoryProp = {
//     entries: PaletteHistoryEntry[];
//     onRestore?: (colors: PaletteColors) => void;
//     onDelete?: (id: string) => void;
// }

export const History = () => {
    return (
        <section className="history">
            <header className="history-header">
                <label className="history-header__label">History</label>
                <div className="history-header__clear">Clear</div>
            </header>
            <div className="history-row">
                <div className="history-row__swatches"></div>
            </div>
        </section>
    );
};
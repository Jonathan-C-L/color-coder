import type { PaletteColors } from '../types/Color';
import { exportPalette } from '../services/exportPalette';

type ExportProp = {
    exportColors: PaletteColors;
    resetCallback: () => void;
}

export const Export = ({ exportColors, resetCallback }: ExportProp) => {
    return (
        <button className="action-row__export" type="button" onClick={() => exportPalette(exportColors).then(resetCallback)}>
            Export
        </button>
    );
};
import type { Color } from '../types/Color';
import { exportPalette } from '../services/exportPalette';

type ExportProp = {
    exportColors: Color[];
    resetCallback: () => void;
}

export const Export = ({ exportColors, resetCallback }: ExportProp) => {
    return (
        <button type="button" onClick={() => exportPalette(exportColors).then(resetCallback)}>
            Export
        </button>
    );
};
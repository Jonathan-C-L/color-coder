import type { Color } from '../types/Color';
import { exportPalette } from '../services/exportPalette';

type ExportProp = {
    exportColors: Color[];
    reset: () => void;
}

export const Export = ({ exportColors, reset }: ExportProp) => {
    return (
        <button type="button" onClick={() => exportPalette(exportColors).then(reset)}>
            Export
        </button>
    );
};
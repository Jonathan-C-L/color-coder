import type { Color } from '../types/Color';
import { exportPalette } from '../services/exportPalette';
import { usePalette } from '../hooks/usePalette';

type ExportProp = {
    exportColors: Color[];
}

export const Export = ({ exportColors }: ExportProp) => {
    const { resetPalette } = usePalette();

    return (
        <button type="button" onClick={() => exportPalette(exportColors).then(resetPalette)}>
            Export Palette
        </button>
    );
};
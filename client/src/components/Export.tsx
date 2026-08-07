import type { PaletteColors } from '../types/Color';
import { exportPalette } from '../services/exportPalette';
import { config } from '../config/config';
import { IconFileExport } from '@tabler/icons-react';

type ExportProp = {
    exportColors: PaletteColors;
    resetCallback: () => void;
    updateHistory?: (colors: PaletteColors) => void;
}

export const Export = ({ exportColors, resetCallback, updateHistory }: ExportProp) => {
    const handleExport = async () => {
        if (exportColors.length === 0) return;

        try {
            await exportPalette(exportColors);
            resetCallback();
            updateHistory && updateHistory(exportColors);
        } catch (err) {
            console.error(`Failed to export palette: ${err}`);
        }
    }

    return (
        <button className="action-row__export" type="button" onClick={handleExport}>
            <IconFileExport size={config.ICON_SIZE} />
            Export
        </button>
    );
};
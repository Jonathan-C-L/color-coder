import type { Color } from '../types/Color';
import { IconArrowBackUp } from '@tabler/icons-react';
import { config } from '../config/config';

type UndoProp = {
    paletteColors: Color[];
    undoCallback: () => void;
}

export const Undo = ({undoCallback}: UndoProp) => {
    return (
        <button type="button" onClick={undoCallback}>
            <IconArrowBackUp size={config.ICON_SIZE} />
            Undo
        </button>
    );
};
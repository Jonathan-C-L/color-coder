import type { Color } from '../types/Color';

type UndoProp = {
    paletteColors: Color[];
    undoCallback: () => void;
}

export const Undo = ({undoCallback}: UndoProp) => {
    return (
        <button type="button" onClick={undoCallback}>
            Undo
        </button>
    );
};
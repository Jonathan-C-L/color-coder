import type { Color } from '../types/Color';

type PaletteProps = {
    paletteColors: Color[];
}

export const Palette = ({ paletteColors }: PaletteProps) => {
    return (
        <div id="palette" className="display">
            <div className="palette-header">
                <div className="palette-header__label">Palette</div>
            </div>
            <div className="palette-grid">
                {paletteColors.map((color, index) => (
                <div className="palette-swatch" key={index} style={{ background: color }}></div>
            ))}
            </div>
        </div>
    );
};
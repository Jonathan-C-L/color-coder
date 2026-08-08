import { config } from '../config/config';
import type { Color } from '../types/Color';

type PaletteProps = {
    paletteColors: Color[];
}

export const Palette = ({ paletteColors }: PaletteProps) => {
    return (
        <div id="palette" className="display">
            <div className="palette-header">
                <div className="palette-header__label">Palette</div>
                <div className="palette-header__label">{paletteColors.length}/{config.MAX_PALETTE_SIZE}</div>     
            </div>

            {/* Conditionally show palette empty message */}
            {paletteColors.length === 0 && <p className="palette-empty">No colors in palette.</p>}

            <div className="palette-grid">
                {paletteColors.map((color, index) => (
                <div className="palette-swatch" key={index} style={{ background: color }}></div>
            ))}
            </div>
        </div>
    );
};
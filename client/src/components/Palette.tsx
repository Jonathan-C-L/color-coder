import type { Color } from '../types/Colors';

type PaletteProps = {
    paletteColors: Color[];
}

export const Palette = ({ paletteColors }: PaletteProps) => {
    return (
        <div id="palette" className="display">
            {paletteColors.map((color, index) => (
                <div className="color-codes" key={index} style={{ background: color }}>
                    {color}
                </div>
            ))}
        </div>
    );
};
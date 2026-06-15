type PaletteProps = {
    paletteColors: string[];
}

export const Palette = ({ paletteColors }: PaletteProps) => {
    return (
        <div id="palette" className="display">
            {paletteColors.map((color, index) => (
                <div key={index} style={{ background: color }}>
                    {color}
                </div>
            ))}
        </div>
    );
};
import type { Color } from "../types/Color";

type SelectionProp = {
    selected: Color;
    supported: () => boolean;
    colorSelect: () => void;
}

export const ColorSelection = ({ selected, supported, colorSelect }: SelectionProp) => {
    return (
        <div>
            <div className="color-codes" style={{ background: selected }}>
                {selected}
            </div>
            {supported() ?  
            <button onClick={colorSelect}>Select Color</button>
            : <span>EyeDropper API not supported in this browser</span>
            }
        </div> 
    )
}
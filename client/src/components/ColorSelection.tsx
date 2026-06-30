import type { Color } from "../types/Color";

type SelectionProp = {
    selected: Color;
    supported: () => boolean;
    colorSelect: () => void;
}

export const ColorSelection = ({ selected, supported, colorSelect }: SelectionProp) => {
    return (
        <div>
            <div className="color-preview" >
                <div className="color-preview__swatch" style={{ background: selected }}></div>
                <div className="color-preview__info">
                    <div className="color-preview__hex">{selected}</div>
                </div>
                {/* THIS WILL BECOME THE COPY FUNCTION LATER */}
                <div className="color-preview__swatch" style={{ background: selected }}></div>
            </div>
            {supported() ?  
            <button className="pick-button" onClick={colorSelect}>Select Color</button>
            : <span>EyeDropper API not supported in this browser</span>
            }
        </div> 
    )
}
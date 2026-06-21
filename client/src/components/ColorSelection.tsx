import type { Color } from "../types/Color";

type SelectionProp = {
    selected: Color;
}

export const ColorSelection = ({ selected }: SelectionProp) => {
    return (
        <>
            <div className="color-codes" style={{ background: selected }}>
                {selected}
            </div>
        </>
    )
}
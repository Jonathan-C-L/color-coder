import type { Color } from "../types/Color";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { useState, useCallback } from "react";

type SelectionProp = {
    selected: Color;
    supported: boolean;
    colorSelect: () => void;
}

export const ColorSelection = ({ selected, supported, colorSelect }: SelectionProp) => {
    const [copied, setCopied] = useState(false);

    const copyToClipBoard = useCallback(async () => {
        if (!selected) return;

        try {
            await navigator.clipboard.writeText(selected);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copy state after 2 seconds
        } catch (err) {
            console.error(`Failed to copy color: ${err}`);
        }
    }, [selected]);

    return (
        <div>
            <div className="color-preview" >
                <div className="color-preview__swatch" style={{ background: selected }}></div>
                <div className="color-preview__info">
                    <div className="color-preview__hex">{selected}</div>
                </div>
                <button className="color-preview__copy" onClick={copyToClipBoard} disabled={!selected}>
                    {copied ? <IconCheck /> : <IconCopy />}
                </button>
            </div>
            {supported ?  
            <button className="pick-button" onClick={colorSelect}>Select Color</button>
            : <span>EyeDropper API not supported in this browser</span>
            }
        </div> 
    )
}
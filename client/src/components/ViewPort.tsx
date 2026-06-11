import { Toggle } from "./Toggle";
import { Palette } from "./Palette";

export const ViewPort = () => {
    return (
        <main className="container">
            <Toggle />
            <canvas id="viewport" className="display">
                {/* Viewport content will be rendered here */}
            </canvas>
            <Palette />
        </main>
    );
};
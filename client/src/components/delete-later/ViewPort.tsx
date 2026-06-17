import { Toggle } from "../Toggle";

export const ViewPort = () => {
    return (
        <main className="container">
            <Toggle />
            <canvas id="viewport" className="display">
                {/* Viewport content will be rendered here */}
            </canvas>
        </main>
    );
};
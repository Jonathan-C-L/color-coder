import './App.css';
// import { Export } from './components/Export'; 
// import { ViewPort } from './components/ViewPort';
import { Palette } from './components/Palette';
import useEyeDropper from 'use-eye-dropper';
import { useState, useCallback } from 'react';

// Global variables
const colors: string[] = [];

type DropperError = { 
  message: string
  canceled?: boolean
}

// const isError = <T, >(err: DropperError | T): err is DropperError => 
//   !!err && err instanceof Error && !!err.message

// const isNotCanceled = <T, >(err: DropperError | T): err is DropperError =>
//   isError(err) && !err.canceled

const resetPalette = () => {
    colors.length = 0;
    console.log(colors);
};

const App = () => {
  const { open, isSupported } = useEyeDropper();

  // Hooks
  const [color, setColor] = useState<string>('#ffffff');
  const [error, setError] = useState<DropperError | null>(null);

  // useEyeDropper will reject/cleanup the open() promise on unmount,
  // so setState never fires when the component is unmounted.
  const pickColor = useCallback(() => {
    // Using async/await (can be used as a promise as-well)
    const openPicker = async () => {
      try {
        const color = await open();
        setColor(color.sRGBHex);
        colors.push(color.sRGBHex);
        console.log(colors);

      } catch (e: DropperError | any) {
        // Ensures component is still mounted
        // before calling setState
        if (!e.canceled) setError(e);
        if (error) return;
      }
    };
    openPicker();
  }, [open]);

  return (
    <>
      {/* Color selection */}
      <div style={{ padding: '64px', background: color }}>{color}</div>
      {isSupported() ?  
          // Could maybe make this a  
          <button onClick={pickColor}>Pick color</button>
        : <span>EyeDropper API not supported in this browser</span>
      }
      
      {/* Palette */}
      <Palette paletteColors={colors} />

      {/* <Export /> */}
      <section id="export" className="container">
        <button type="button" onClick={resetPalette}>
            Export Palette
        </button>
      </section>
    </>
  )
};

export default App;

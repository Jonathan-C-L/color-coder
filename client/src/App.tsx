import './App.css';
// import { Export } from './components/Export'; 
// import { ViewPort } from './components/ViewPort';
import { Palette } from './components/Palette';
import useEyeDropper from 'use-eye-dropper';
import { useState, useCallback } from 'react';

// Global variables

type DropperError = { 
  message: string
  canceled?: boolean
}
type PaletteColors = {
  colors: string[];
}


// const isError = <T, >(err: DropperError | T): err is DropperError => 
//   !!err && err instanceof Error && !!err.message

// const isNotCanceled = <T, >(err: DropperError | T): err is DropperError =>
//   isError(err) && !err.canceled

const App = () => {
  const { open, isSupported } = useEyeDropper();

  // Hooks
  const [color, setColor] = useState<string>('#ffffff');
  const [error, setError] = useState<DropperError | null>(null);
  const [paletteColors, setPaletteColors] = useState<PaletteColors['colors']>([]);

  // Callbacks
  const resetPalette = useCallback(() => {
    setPaletteColors([]);
  }, []);

  // useEyeDropper will reject/cleanup the open() promise on unmount,
  // so setState never fires when the component is unmounted.
  const pickColor = useCallback(() => {
    // Using async/await (can be used as a promise as-well)
    const openPicker = async () => {
      try {
        const color = await open();
        // Display selected color
        setColor(color.sRGBHex);
        // Add color to palette
        setPaletteColors(prev => {
          const updated =[...prev, color.sRGBHex];
          console.log(updated); // Diagnostics
          return updated;
        });

      } catch (e: DropperError | any) {
        // Ensures component is still mounted
        // before calling setState
        if (!e.canceled) setError(e);
        // Here just to satisfy the linter, but this should never be hit since the error state is only set if the component is still mounted.
        if (error) return; 
      }
    };
    openPicker();
  }, [open]);

  return (
    <>
      {/* Color selection */}
      <div className="color-codes" style={{ background: color }}>
        {color}
      </div>

      {/* Color picker */}
      {isSupported() ?  
        <button onClick={pickColor}>Pick color</button>
      : <span>EyeDropper API not supported in this browser</span>
      }
      
      {/* Palette */}
      <Palette paletteColors={paletteColors} />

      {/* <Export /> */}
      <button type="button" onClick={resetPalette}>
          Export Palette
      </button>
    </>
  )
};

export default App;

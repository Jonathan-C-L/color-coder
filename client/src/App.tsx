//----------------------------
// Dependencies
//----------------------------
import { jsPDF } from 'jspdf';
import convert from 'color-convert';
import useEyeDropper from 'use-eye-dropper';
import { useCallback } from 'react';

//----------------------------
// Components
//----------------------------
import './App.css';
import type { PaletteColors } from './types/Color';
import { Palette } from './components/Palette';
// import { Export } from './components/Export'; 

//----------------------------
// Hooks
//----------------------------
import { usePalette } from './hooks/usePalette';
import { useColor } from './hooks/useColor';

//----------------------------
// Entry Point
//----------------------------
const App = () => {
  const { isSupported } = useEyeDropper();

  // Hooks
  const {color, pickColor} = useColor();
  const {paletteColors, setPaletteColors} = usePalette();


  // Callbacks
  const exportPalette = (palette: PaletteColors['colors']) => {
    const doc = new jsPDF();

    palette.forEach((hex, i) => {
      const y = 20 + i * 20;

      // Individual palette color
      doc.setFillColor(hex);
      doc.rect(10, y, 15, 22, 'F');

      // Selectable text
      doc.setFontSize(11);
      doc.setTextColor(0);
      doc.text(`HEX: ${hex}`, 30, y + 8);
      doc.text(`CMYK: ${convert.hex.cmyk(hex)}`, 30, y + 16);
    });

    // Save PDF - palette.pdf is default name
    doc.save('palette.pdf');

    resetPalette();
  };

  const resetPalette = useCallback(() => {
    setPaletteColors([]);
  }, []);

  // useEyeDropper will reject/cleanup the open() promise on unmount,
  // so setState never fires when the component is unmounted.
  // const pickColor = useCallback(() => {
  //   // Using async/await (can be used as a promise as-well)
  //   const openPicker = async () => {
  //     try {
  //       const color = await open();
  //       const hexCode = color.sRGBHex.toUpperCase();

  //       // Display selected color
  //       setColor(hexCode);
  //       // Add color to palette
  //       setPaletteColors(prev => {
  //         const updated =[...prev, hexCode];
  //         console.log(updated); // Diagnostics
  //         return updated;
  //       });

  //     } catch (e: DropperError | any) {
  //       // Ensures component is still mounted
  //       // before calling setState
  //       if (!e.canceled) setError(e);
  //       // Here just to satisfy the linter, but this should never be hit since the error state is only set if the component is still mounted.
  //       if (error) return; 
  //     }
  //   };
  //   openPicker();
  // }, [open]);

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
      <button type="button" onClick={() => exportPalette(paletteColors)}>
          Export Palette
      </button>
    </>
  )
};

export default App;

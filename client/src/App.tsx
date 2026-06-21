//----------------------------
// Dependencies
//----------------------------
import { jsPDF } from 'jspdf';
import convert from 'color-convert';
import useEyeDropper from 'use-eye-dropper';

//----------------------------
// Components
//----------------------------
import './App.css';
import type { PaletteColors } from './types/Color';
import { Palette } from './components/Palette';

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
  const {paletteColors, addColor, resetPalette} = usePalette();
  const {color, pickColor} = useColor('#000000', addColor);
  
  // Callbacks
  const exportPalette = (palette: PaletteColors['current']) => {
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

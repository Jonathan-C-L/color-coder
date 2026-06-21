import useEyeDropper from 'use-eye-dropper';
import './App.css';
import { Export } from './components/Export';
import { Palette } from './components/Palette';
import { usePalette } from './hooks/usePalette';
import { useColor } from './hooks/useColor';

//----------------------------
// Entry Point
//----------------------------
const App = () => {
  const { isSupported } = useEyeDropper();

  // Hooks
  const {paletteColors, addColor } = usePalette();
  const {color, pickColor} = useColor('#000000', addColor);

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
      
      <Palette paletteColors={paletteColors} />
      <Export exportColors={paletteColors}/>
    </>
  )
};

export default App;

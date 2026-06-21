import useEyeDropper from 'use-eye-dropper';
import './App.css';
import { ColorSelection } from './components/ColorSelection';
import { Export } from './components/Export';
import { Palette } from './components/Palette';
import { usePalette } from './hooks/usePalette';
import { useColor } from './hooks/useColor';
import { useEffect } from 'react';

//----------------------------
// Entry Point
//----------------------------
const App = () => {
  const { isSupported } = useEyeDropper();
  const { paletteColors, addColor } = usePalette();
  const { color, pickColor } = useColor();

  // Prevents dups on color selection
  useEffect(() => {
    if (color) 
      addColor(color);
  }, [color, addColor]);


  return (
    <>
      {/* Color selection */}
      {/* <div className="color-codes" style={{ background: color }}>
        {color}
      </div> */}
      <ColorSelection selected={color}/>

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

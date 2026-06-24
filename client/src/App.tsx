import useEyeDropper from 'use-eye-dropper';
import './App.css';
import { ColorSelection } from './components/ColorSelection';
import { Export } from './components/Export';
import { Palette } from './components/Palette';
import { Cancel } from './components/Cancel';
import { Undo } from './components/Undo';
import { usePalette } from './hooks/usePalette';
import { useColor } from './hooks/useColor';

//----------------------------
// Entry Point
//----------------------------
const App = () => {
  const { isSupported } = useEyeDropper();
  const { paletteColors, addColor, resetPalette } = usePalette();
  const { color, pickColor } = useColor('Choose a Color!', addColor);

  return (
    <>
      <ColorSelection selected={color}/>

      {/* Color picker */}
      {isSupported() ?  
        <button onClick={pickColor}>Pick color</button>
      : <span>EyeDropper API not supported in this browser</span>
      }
      
      <Palette paletteColors={paletteColors}/>
      <div>
        <Undo/>
        <Cancel reset={resetPalette}/>
        <Export exportColors={paletteColors} reset={resetPalette}/>
      </div>
    </>
  )
};

export default App;

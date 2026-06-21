import useEyeDropper from 'use-eye-dropper';
import './App.css';
import { ColorSelection } from './components/ColorSelection';
import { Export } from './components/Export';
import { Palette } from './components/Palette';
import { usePalette } from './hooks/usePalette';
import { useColor } from './hooks/useColor';

//----------------------------
// Entry Point
//----------------------------
const App = () => {
  const { isSupported } = useEyeDropper();
  const { paletteColors, addColor } = usePalette();
  const { color, pickColor } = useColor('Choose a Color!', addColor);

  return (
    <>
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

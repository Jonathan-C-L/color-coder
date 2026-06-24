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
  const { paletteColors, addColor, undoChoice, resetPalette } = usePalette();
  const { color, pickColor } = useColor('Choose a Color!', addColor);

  return (
    <>
      <ColorSelection selected={color} supported={isSupported} colorSelect={pickColor}/>
      <Palette paletteColors={paletteColors}/>
      <div>
        <Undo paletteColors={paletteColors} undoCallback={undoChoice}/>
        <Cancel resetCallback={resetPalette}/>
        <Export exportColors={paletteColors} resetCallback={resetPalette}/>
      </div>
    </>
  )
};

export default App;

import useEyeDropper from 'use-eye-dropper';
import './App.css';
import { ColorSelection } from './components/ColorSelection';
import { Export } from './components/Export';
import { Palette } from './components/Palette';
import { Reset } from './components/Reset';
import { Undo } from './components/Undo';
// import { History } from './components/History';
import { usePalette } from './hooks/usePalette';
import { useColor } from './hooks/useColor';

//----------------------------
// Entry Point
//----------------------------
const App = () => {
  const { isSupported } = useEyeDropper();
  const { paletteColors, addColor, undoChoice, resetPalette } = usePalette();
  const { color, pickColor } = useColor("Build Your Palette!", addColor);

  // One time call to check if the EyeDropper API is supported in the browser. This is used to conditionally render the color selection button.
  const dropperSupported = isSupported();

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <span>Color Picker</span>
      </header>

      <ColorSelection selected={color} supported={dropperSupported} colorSelect={pickColor}/>
      <Palette paletteColors={paletteColors}/>
      
      <div className="action-row">
        <Undo paletteColors={paletteColors} undoCallback={undoChoice}/>
        <Reset resetCallback={resetPalette}/>
        <Export exportColors={paletteColors} resetCallback={resetPalette}/>
      </div>

      {/* TO BE ADDED */}
      {/* <History/> */}
    </div>
  )
};

export default App;

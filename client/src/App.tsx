import { Toggle } from './components/Toggle';
import { Export } from './components/Export'; 
import { ViewPort } from './components/ViewPort';
import { Palette } from './components/Palette';
import './App.css';

function App() {
  // const { count, setCount } = useCount();



  return (
    <>
      <Toggle />
      <ViewPort />
      <Palette />
      <Export />
    </>
  )
};

export default App;

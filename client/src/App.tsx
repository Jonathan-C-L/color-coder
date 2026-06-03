import { Toggle } from './components/Toggle';
import { Main } from './components/Main'; 
import { ViewPort } from './components/ViewPort';
import { useCount } from './hooks/useCount';
import './App.css';

function App() {
  const { count, setCount } = useCount();



  return (
    <>
      <Toggle />
      <ViewPort />
      <Main count={count} setCount={setCount} />

      <div className="ticks"></div>

    </>
  )
};

export default App;

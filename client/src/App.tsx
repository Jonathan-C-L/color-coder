import './App.css';
import { Export } from './components/Export'; 
// import { ViewPort } from './components/ViewPort';
import useEyeDropper from 'use-eye-dropper';
import { useState, useCallback } from 'react';

type DropperError = { 
  message: string
  canceled?: boolean
}

// const isError = <T, >(err: DropperError | T): err is DropperError => 
//   !!err && err instanceof Error && !!err.message

// const isNotCanceled = <T, >(err: DropperError | T): err is DropperError =>
//   isError(err) && !err.canceled

const App = () => {
  const { open, isSupported } = useEyeDropper()
  const [color, setColor] = useState('#fff')
  const [error, setError] = useState()
  // useEyeDropper will reject/cleanup the open() promise on unmount,
  // so setState never fires when the component is unmounted.
  const pickColor = useCallback(() => {
    // Using async/await (can be used as a promise as-well)
    const openPicker = async () => {
      try {
        const color = await open();
        console.log(color);
        setColor(color.sRGBHex);
      } catch (e: DropperError | any) {
        console.log(e);

        // Ensures component is still mounted
        // before calling setState
        if (!e.canceled) setError(e);
      }
    };
    openPicker();
  }, [open]);

  return (
    <>
      {/* <ViewPort /> */}
      <div style={{ padding: '64px', background: color }}>Selected color</div>
      {isSupported() ?
          <button onClick={pickColor}>Pick color</button>
        : <span>EyeDropper API not supported in this browser</span>
      }
      {!!error && <div>{Error(error).message}</div>}
      <Export />
    </>
  )
};

export default App;

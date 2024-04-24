import { useAtom } from 'jotai';
import './App.css';
import { darkModeAtom } from 'common/atoms';

const App = () => {

  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  console.log('🚀 ~ App ~ darkMode:', darkMode);

  const onChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="content">
      <label>
        <input type="checkbox" onChange={onChange} />
        { darkMode ? 'Dark' : 'Light' } mode
      </label>
      <h1>Rsbuild with React 6</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;

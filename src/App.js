import React, { useState } from 'react';
import Logo from './images/logo.png';
const App = () => {
  const [result, setResult] = useState('');
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult('');
  };
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult(err);
    }
  };
  return (
    <div className='container'>
      <a href='https://aiyedogbonabraham.vercel.app/'>
        <img src={Logo} alt='Logo' />
      </a>
      <form>
        <input type='text' value={result} />
      </form>
      <div className='keypad'>
        <button onClick={clear} id='clear'>
          Clear
        </button>
        <button onClick={backSpace} id='backspace'>
          C
        </button>
        <button onClick={handleClick} name='/'>
          &divide;
        </button>
        <button onClick={handleClick} name='7'>
          7
        </button>
        <button onClick={handleClick} name='8'>
          8
        </button>
        <button onClick={handleClick} name='9'>
          9
        </button>
        <button onClick={handleClick} name='*'>
          &times;
        </button>
        <button onClick={handleClick} name='4'>
          4
        </button>
        <button onClick={handleClick} name='5'>
          5
        </button>
        <button onClick={handleClick} name='6'>
          6
        </button>
        <button onClick={handleClick} name='-'>
          &ndash;
        </button>
        <button onClick={handleClick} name='1'>
          1
        </button>
        <button onClick={handleClick} name='2'>
          2
        </button>
        <button onClick={handleClick} name='3'>
          3
        </button>
        <button onClick={handleClick} name='+'>
          +
        </button>
        <button onClick={handleClick} name='0'>
          0
        </button>
        <button onClick={handleClick} name='.'>
          .
        </button>
        <button onClick={calculate} id='result'>
          =
        </button>
      </div>
      <div className='footer'>
        <h2>
          Made with ❤ by{' '}
          <a href='https://aiyedogbonabraham.vercel.app/'>LOGiC</a>
        </h2>
      </div>
    </div>
  );
};

export default App;

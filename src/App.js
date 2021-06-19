import './App.css';
import React from 'react';

function App() {

  //const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
  const [val, setVal] = React.useState('choice1');

  // ラジオボタンの変更時ハンドラ
  const handleChange = e => {
    setVal(e.target.value);
    console.log('handleChange:'+ e.target.value);
    //alert("alertの確認");
  }

  /*
  const handleNextButtonClick() {
    console.log('Click happened');
  }
  */
  function handleNextButtonClick() {
    console.log('Click happened');
  }

  return (
    <div className="App">
      <p>
        問題<br/>
        問題文1行目<br/>
        問題文2行目<br/>
        問題文3行目<br/>
        問題文4行目<br/>
      </p>

      {/* 選択肢の表示 */}

      <label>
        <input
          type="radio"
          value="choice1"
          onChange={handleChange}
          checked={val === 'choice1'}
        />
        選択肢1つ目
      </label>
      <br/>
      <label>
        <input
          type="radio"
          value="choice2"
          onChange={handleChange}
          checked={val === 'choice2'}
        />
        選択肢2つ目
      </label>
      <br/>
      <label>
        <input
          type="radio"
          value="choice3"
          onChange={handleChange}
          checked={val === 'choice3'}
        />
        選択肢3つ目
      </label>
      <br/>
      <label>
        <input
          type="radio"
          value="choice4"
          onChange={handleChange}
          checked={val === 'choice4'}
        />
        選択肢4つ目
      </label>
      <br/>

      <button onclick={handleNextButtonClick}>
        次へ
      </button>

    </div>
  );
}

export default App;

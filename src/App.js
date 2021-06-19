import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 'choice1'
    };
  }

  // React hooksを用いてuseStateを利用する例
  // const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
  // const [val, setVal] = React.useState('choice1');
  // https://qiita.com/seira/items/f063e262b1d57d7e78b4

  // ラジオボタンの変更時ハンドラ
  handleChange(value) {
    this.setState({
      val:value,
    });
    console.log('handleChange:'+ value);
  }

  // 次へボタン押下時ハンドラ
  handleNextButtonClick(value) {
    console.log('Click happened:' + value);
    //alert("alertの確認");
  }

  render() {

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
            onChange={() => this.handleChange('choice1')}
            checked={this.state.val === 'choice1'}
          />
          選択肢1つ目
        </label>
        <br/>
        <label>
          <input
            type="radio"
            value="choice2"
            onChange={() => this.handleChange('choice2')}
            checked={this.state.val === 'choice2'}
          />
          選択肢2つ目
        </label>
        <br/>
        <label>
          <input
            type="radio"
            value="choice3"
            onChange={() => this.handleChange('choice3')}
            checked={this.state.val === 'choice3'}
          />
          選択肢3つ目
        </label>
        <br/>
        <label>
          <input
            type="radio"
            value="choice4"
            onChange={() => this.handleChange('choice4')}
            checked={this.state.val === 'choice4'}
          />
          選択肢4つ目
        </label>
        <br/>

        <button 
          onClick={() => this.handleNextButtonClick(this.state.val)}>
          次へ
        </button>

      </div>
    );
  }
}

export default App;

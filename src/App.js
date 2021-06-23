import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      problemRound: 1,
      val: 'choice1',
      problemStatement: '設問1\n設問文1行目\n設問文2行目\n',
      choiceState1: '選択肢1',
      choiceState2: '選択肢2',
      choiceState3: '選択肢3',
      choiceState4: '選択肢4',
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

    // 設問ごとの文字列を設定
    if (this.state.problemRound === 1)
    {
      this.setState({
        problemRound: 2,
        val: 'choice1',
        problemStatement: '設問2\n以下のタスクのうち、最もペアプログラミングに適していないタスクはどれですか？',
        choiceState1: '複数の選択肢が考えられる設計の検討',
        choiceState2: 'どうやって実現するのか分かっていないため事前に調査が必要な実装',
        choiceState3: '発表スライドを作成する前の発表シナリオ検討',
        choiceState4: '設計が明確化しており、手戻るリスクが非常に小さい実装',  
      });    
    }
  }

  render() {

    return (
      <div className="App" style={{whiteSpace: 'pre-line'}}>
        <p>
          {this.state.problemStatement}
        </p>

        {/* 選択肢の表示 */}

        <label>
          <input
            type="radio"
            value="choice1"
            onChange={() => this.handleChange('choice1')}
            checked={this.state.val === 'choice1'}
          />
          {this.state.choiceState1}
        </label>
        <br/>
        <label>
          <input
            type="radio"
            value="choice2"
            onChange={() => this.handleChange('choice2')}
            checked={this.state.val === 'choice2'}
          />
          {this.state.choiceState2}
        </label>
        <br/>
        <label>
          <input
            type="radio"
            value="choice3"
            onChange={() => this.handleChange('choice3')}
            checked={this.state.val === 'choice3'}
          />
          {this.state.choiceState3}
        </label>
        <br/>
        <label>
          <input
            type="radio"
            value="choice4"
            onChange={() => this.handleChange('choice4')}
            checked={this.state.val === 'choice4'}
          />
           {this.state.choiceState4}
       </label>
        <br/>

        <button 
          onClick={() => this.handleNextButtonClick(this.state.val)}>
          次の設問へ
        </button>

      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import QuestionArea from './QuestionArea';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        problemRound: 1,
        problemStatement: 'ペアプログラミングもしくはモブプログラミングについて、\nそれが有効なタスクの特性をチームメンバーが理解した上で、活用できている。',
      },
      {
        problemRound: 2,
        problemStatement: 'レビューで指摘した結果、想定以上に多くの指摘を検出して手戻りが発生した場合に、\nそれがレビューイのみの責任でなく、レビューアにも責任があるという考え方がチームに浸透している',
      }
    ];
  }

  render() {
    return(
      <div className="App">
        <div className="questions">
          <QuestionArea 
            problemRound={this.state[0].problemRound}
            problemStatement={this.state[0].problemStatement}
          />
          <QuestionArea 
            problemRound={this.state[1].problemRound}
            problemStatement={this.state[1].problemStatement}
          />
        </div>
        <br/>
        <button 
        onClick={() => this.handleNextButtonClick(this.state.val)}>
        診断結果へ
        </button>
      </div>
    );
  }

  // React hooksを用いてuseStateを利用する例
  // const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
  // const [val, setVal] = React.useState('choice1');
  // https://qiita.com/seira/items/f063e262b1d57d7e78b4

  // 次へボタン押下時ハンドラ
  handleNextButtonClick(value) {
    console.log('Click happened:' + value);

    
  }

}

export default App;

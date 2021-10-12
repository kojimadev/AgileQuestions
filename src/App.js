import './App.css';
import React from 'react';
import QuestionArea from './QuestionArea';

class App extends React.Component {
  constructor(props) {
    super(props);

    // 設問の定義
    this.state = [
      {
        problemRound: 1,
        problemStatement: 'ペアプログラミングもしくはモブプログラミングについて、\nそれが有効なタスクの特性をチームメンバーが理解した上で、活用できている。',
      },
      {
        problemRound: 2,
        problemStatement: 'レビューで指摘した結果、想定以上に多くの指摘を検出して手戻りが発生した場合に、\nそれがレビューイのみの責任でなく、レビューアにも責任があるという考え方がチームに浸透している。',
      },
      {
        problemRound: 3,
        problemStatement: 'プロジェクトの業務時間の一定比率(比率はプロジェクトの方針による)で、\n各自が主体的にスキルアップや改善を行う活動を毎月実施できている。',
      },
      {
        problemRound: 4,
        problemStatement: '新しいツールや技術やプラクティスを試してみようとする文化があり、\n毎月なんらかの試行が行われている。',
      },
      {
        problemRound: 5,
        problemStatement: 'チームとしての方針を決める打ち合わせにおいて、チーム全員が積極的な姿勢で発言できている(配属して1年未満の新人は除く)。',
      },
      {
        problemRound: 6,
        problemStatement: 'チーム全員が学んだ知見をブログや分報やSNSなどに継続的にアウトプットしている(少なくとも毎月1回以上)。',
      },
      {
        problemRound: 7,
        problemStatement: 'リモートワークにおいて、チーム全員が気軽にビデオ通話に誘える関係性があり、分報を用いて誰が今何をしているか透明性がある。',
      },
    ];
  }

  render() {
    var questionStatements = [];
    for(var index in this.state){
      questionStatements.push(<QuestionArea problemRound={this.state[index].problemRound} problemStatement={this.state[index].problemStatement} />);
    }

    return(
      <div className="App">
        <div className="questions">
          {questionStatements}
        </div>
        <br/>
        <button 
        onClick={() => this.handleNextButtonClick(this.state.val)}>
        診断結果へ
        </button>
        <br/>
        <br/>
      </div>
    );
  }

  // 診断結果ボタン押下時ハンドラ
  handleNextButtonClick(value) {
    console.log('Click happened:' + value);    
  }

}

export default App;

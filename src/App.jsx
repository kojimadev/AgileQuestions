import './App.css';
import React from 'react';
import QuestionTable from './QuestionTable';
import ResultTable from './ResultTable';
import axios from "axios";

class App extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props);

    // 設問の定義
    this.state = {
      questionStates : [
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
          problemStatement: '新しいツールや技術やプラクティスを試してみようとする風土があり、\n毎月なんらかの新しい試行を行っている。',
        },
        {
          problemRound: 5,
          problemStatement: '朝会がマネージャーへの報告会となってマネージャーと報告者だけが議論するのでなく、メンバー同士で質問や助言ができている。',
        },
        {
          problemRound: 6,
          problemStatement: 'チーム全員が学んだ知見をブログや分報やSNSなどに継続的にアウトプットしている(少なくとも毎月1回以上)。',
        },
        {
          problemRound: 7,
          problemStatement: 'リモートワークにおいて、チーム全員が気軽にビデオ通話に誘える関係性がある。分報などで誰が今何をしているか透明性がある。',
        },
      ],
      results : [],
      diagnosed : false
    };
  }

  // 各設問コンポーネント(QuestionArea)から、このコンポーネントのステートに値を反映させるためのメソッド
  updateState(problemRound, value){
    // 対象範囲のステートをコピー
    const questionStates_copy = this.state.questionStates.slice();
    // 指定した設問の選択状態を変更
    questionStates_copy[problemRound - 1].val = value;
    // ステートに反映
    this.setState({
      questionStatements : questionStates_copy
    });
  }

  // 描画する
  render() {

    // 設問と診断結果ボタンの表示
    return(
      <div className="App">
        <h1>ハピネスチームビルディング診断</h1>
        「ハピネスチームビルディング」と呼ばれる楽しいチーム開発をするための手法を参考にした診断です。<br/>
        自分のチームが「ハピネスチームビルディング」の基準において、どの程度の楽しいチーム作りと評価されるか診断してみましょう。
        <QuestionTable 
          questionStates={this.state.questionStates}
          updateState={this.updateState.bind(this)} />
        <br/>
        <button onClick={() => this.handleNextButtonClick()}
          disabled={this.state.diagnosed}>
        診断する
        </button>
        <br/>
        <br/>
        <center>
          {this.state.results.length === 0 &&
            <p>
            診断ボタンを押してから診断が表示されるまで数秒かかる事があります
            </p>
          }
          <ResultTable 
            Score={this.state.results.Score}
            Average={this.state.results.Average}
            Ranking={this.state.results.Ranking}
            Message={this.state.results.Description}
            />

        </center>
      </div>
    );
  }

  // 診断ボタン押下時ハンドラ
  handleNextButtonClick() {
    console.log('DiagnosticButton Clicked');

    // すべての設問に対して診断結果を設定していなければ、診断しない
    for (let index = 0; index < this.state.questionStates.length; index++) {
      if (this.state.questionStates[index].val === undefined)
      {
        alert("すべての設問に回答してから診断ボタンを押してもらいたいです。どうかよろしくお願いします。");
        return;
      }
    }

    // 診断結果をAPIに送信するための形式に変換する
    let valuesString = "";
    for (let index = 0; index < this.state.questionStates.length; index++) {
      console.log(index + ':' + this.state.questionStates[index].val);
      if (valuesString.length > 0)
      {
        valuesString += ",";
      }
      valuesString += this.state.questionStates[index].val;
    }

    // 診断済み状態にStateを更新(診断ボタンを無効にする)
    this.setState({ diagnosed : true })

    // 診断結果をAPIに送信し、自身の結果をStateに設定する
    axios
      .post("https://firebasefunctions.azurewebsites.net/api/DiagnosisResults?values=" + valuesString)
      //.post("http://localhost:7071/api/DiagnosisResults?values=" + valuesString)
      //.then(res => console.log(res.data))
      .then(res => this.setState({ results: res.data}))
      .catch(err => alert(err));
  }
}

export default App;

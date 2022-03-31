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
          problemStatement: 'ペアプログラミングもしくはモブプログラミングについて、それが有効なタスクの特性をチームメンバーが理解した上で活用できている。',
        },
        {
          problemRound: 2,
          problemStatement: 'チーム全員がポジティブフィードバックの有効性を理解し、お互いにポジティブフィードバックし合っている。',
        },
        {
          problemRound: 3,
          problemStatement: 'メンバーが自分のタスクの事だけを考えるのでなく、チーム全体のための助言や提案を主体的に行っている(チーム配属後1年未満のメンバーは除く)。',
        },
        {
          problemRound: 4,
          problemStatement: '新しいツールや技術やプラクティスを試してみようとする風土があり、毎月なんらかの新しい試行を行っている。',
        },
        {
          problemRound: 5,
          problemStatement: '朝会にてマネージャーと報告者だけが議論するのでなく、メンバーが主体的に発言してメンバー同士で質問や助言を行っている。',
        },
        {
          problemRound: 6,
          problemStatement: 'チーム全員が日々の仕事で学んだ知見や技術情報をブログやSNSやSlackなどに継続的にアウトプットしている(少なくとも毎月1回以上)。',
        },
        {
          problemRound: 7,
          problemStatement: 'リモートワークにおいて、チーム全員が気軽にビデオ通話に誘える関係性がある。分報などで誰が今何をしているか透明性がある。',
        },
        {
          problemRound: 8,
          problemStatement: 'レビューで指摘した結果、想定以上に多くの指摘を検出して手戻りが発生した場合に、\nそれがレビューイのみの責任でなく、レビューアにも責任があるという考え方がチームに浸透している。',
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
        <a href="https://qiita.com/kojimadev/items/4b28f801863cf4e8f0da#31-%E3%83%8F%E3%83%94%E3%83%8D%E3%82%B9%E3%83%81%E3%83%BC%E3%83%A0%E3%83%93%E3%83%AB%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0" target="_blank" rel="noopener noreferrer">「ハピネスチームビルディング」</a>
        と呼ばれる楽しいチーム開発をするための手法を参考にした診断です。<br/>
        あなたのチームが「ハピネスチームビルディング」の基準において、得点がいくつになるか診断してもらえると嬉しいです。
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

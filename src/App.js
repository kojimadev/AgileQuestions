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
          problemStatement: '新しいツールや技術やプラクティスを試してみようとする文化があり、\n毎月なんらかの試行が行われている。',
        },
        {
          problemRound: 5,
          problemStatement: '朝会にて、リーダーと報告者だけが議論するのでなく、チーム全員が他メンバーの報告に対して質問や助言ができている。',
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
        <a href="https://qiita.com/kojimadev/items/4b28f801863cf4e8f0da">ハピネスチームビルディング</a>と呼ばれる楽しいチーム開発の手法を参考に、<br/>
        世の中の他チームと比較して、自分のチームがどれだけ楽しいチーム作りができているか診断してみましょう。
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
          診断結果を以下に表示
          <table>
            <ResultTable 
              Score={this.state.results.Score}
              Average={this.state.results.Average}
              Ranking={this.state.results.Ranking}
              Message={this.state.results.Description}
              />
          </table>

          よろしければ、以下の記事を参考に、得点アップにつながるヒントを見つけてもらえれば幸いです。<br/>
          <a href="https://qiita.com/kojimadev/items/4b28f801863cf4e8f0da">1年以上かけて生産性倍増＋成長し続けるチームになった施策を全部公開</a><br/>
          <a href="https://qiita.com/kojimadev/items/e12784e6764f1b60e73c">レビューで大量の指摘をして大きな手戻りを発生させた原因はレビューアの私にあった</a><br/>
          <a href="https://qiita.com/kojimadev/items/c211207ede652c2abeb0">疲労感と孤独感いっぱいのリモートワークからの脱却</a><br/>

        </center>
      </div>
    );
  }

  // 診断ボタン押下時ハンドラ
  handleNextButtonClick() {
    // デバッグ出力
    console.log('DiagnosticButton Clicked');
    for (let index = 0; index < this.state.questionStates.length; index++) {
      console.log(index + ':' + this.state.questionStates[index].val);
    }

    // 診断済み状態にStateを更新(診断ボタンを無効にする)
    this.setState({ diagnosed : true })

    // 診断結果をAPIに送信し、自身の結果をStateに設定する
    axios
      .get("https://firebasefunctions.azurewebsites.net/api/GetRanking")
      //.then(res => console.log(res.data))
      .then(res => this.setState({ results: res.data}))
      .catch(err => alert(err));
  }
}

export default App;

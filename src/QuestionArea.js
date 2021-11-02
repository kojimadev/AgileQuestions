import React from 'react';

// 設問エリアを表示するクラス
export default class QuestionArea extends React.Component {

    // コンストラクタ
    constructor(props) {
        super(props);
    
        // 選択肢の初期値設定
        this.state = {
            problemRound:props.problemRound,
            val: '',
        };
    }

    // コンポーネントを描画する
    render() {
        // 選択肢の表示文字列定義
        const choiceState1 = "はい";
        const choiceState2 = "たぶん はい";
        const choiceState3 = "たぶん いいえ";
        const choiceState4 = "いいえ";

        // 設問と選択肢を表示する
        return (
        <div className="QuestionArea" style={{whiteSpace: 'pre-line'}}>

            {/* 設問の表示 */}
            <p>
            {this.props.problemStatement}
            </p>

            {/* 選択肢の表示 */}

            <label>
            <input
                type="radio"
                value="choice1"
                onChange={() => this.handleChange('choice1')}
                checked={this.state.val === 'choice1'}
            />
            {choiceState1}
            </label>

            <label>
            <input
                type="radio"
                value="choice2"
                onChange={() => this.handleChange('choice2')}
                checked={this.state.val === 'choice2'}
            />
            {choiceState2}
            </label>

            <label>
            <input
                type="radio"
                value="choice3"
                onChange={() => this.handleChange('choice3')}
                checked={this.state.val === 'choice3'}
            />
            {choiceState3}
            </label>

            <label>
            <input
                type="radio"
                value="choice4"
                onChange={() => this.handleChange('choice4')}
                checked={this.state.val === 'choice4'}
            />
            {choiceState4}
            </label>

        </div>
        );
    }

    // ラジオボタンの変更時ハンドラ
    handleChange(value) {
        // stateに選択状態を反映
        this.setState({
            val:value
          }, () => {
            // setStateは非同期で行われるため、stateの値を用いた後続処理は、反映後のコールバックで定義
            // 以下の記事を参考に、親コンポーネントから引き継いだupdateState()を実行することで親コンポーネントのstateを変更
            // https://www.to-r.net/media/react-tutorial10/
            this.props.updateState(this.props.problemRound, this.state.val);
            console.log('handleChange:'+ value);
          });
    }
}
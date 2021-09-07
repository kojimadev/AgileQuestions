import React from 'react';

// 設問エリアを表示するクラス
export default class QuestionArea extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          problemRound: props.problemRound,
          val: '',
          problemStatement: props.problemStatement,
          choiceState1: props.choiceState1,
          choiceState2: props.choiceState2,
          choiceState3: props.choiceState3,
          choiceState4: props.choiceState4,
        };
    }

    render() {
        return (
        <div className="QuestionArea" style={{whiteSpace: 'pre-line'}}>

            {/* 設問の表示 */}
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

        </div>
        );
    }


    // ラジオボタンの変更時ハンドラ
    handleChange(value) {
        this.setState({  
            val:value,
    });
    console.log('handleChange:'+ value);
  }

}
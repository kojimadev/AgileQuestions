import React from 'react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// アウトプット件数をテーブルで表示するクラス
export default class QuestionTable extends React.Component {

    constructor(props) {
        super(props);
    
        // 初期値は全部が未選択状態
        this.state = {
            values : Array(20)
        }
    }    

	render() {
		const { questionStates } = this.props;
		return (
			<div>
				<TableContainer component={Paper}>
					<Table className="primitiveQuestionTable" aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>設問内容</TableCell>
								<TableCell>はい</TableCell>
								<TableCell>たぶん</TableCell>
								<TableCell>あんまり</TableCell>
								<TableCell>いいえ</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{questionStates.map((rowData) => (
								<TableRow key={rowData.problemRound}>
									<TableCell component="th" scope="row">
										{rowData.problemStatement}
									</TableCell>
									<TableCell>
                                        <input
                                            type="radio"
                                            value="choice1"
                                            onChange={() => this.handleChange('choice1', rowData.problemRound)}
                                            checked={this.state.values[rowData.problemRound - 1] === 'choice1'}
                                        />
									</TableCell>
									<TableCell>
                                        <input
                                            type="radio"
                                            value="choice2"
                                            onChange={() => this.handleChange('choice2', rowData.problemRound)}
                                            checked={this.state.values[rowData.problemRound - 1] === 'choice2'}
                                        />
									</TableCell>
									<TableCell>
                                        <input
                                            type="radio"
                                            value="choice3"
                                            onChange={() => this.handleChange('choice3', rowData.problemRound)}
                                            checked={this.state.values[rowData.problemRound - 1] === 'choice3'}
                                        />
									</TableCell>
									<TableCell>
                                        <input
                                            type="radio"
                                            value="choice4"
                                            onChange={() => this.handleChange('choice4', rowData.problemRound)}
                                            checked={this.state.values[rowData.problemRound - 1] === 'choice4'}
                                        />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}

    // ラジオボタンの変更時ハンドラ
    handleChange(value, problemRound) {
        // stateに選択状態を反映
        const newValues = this.state.values;
        newValues[problemRound - 1] = value;
        this.setState({
            values : newValues
            }
            , () => { 
                // setStateは非同期で行われるため、stateの値を用いた後続処理は、反映後のコールバックで定義
                // 以下の記事を参考に、親コンポーネントから引き継いだupdateState()を実行することで親コンポーネントのstateを変更
                // https://www.to-r.net/media/react-tutorial10/
                this.props.updateState(problemRound, value);
                console.log('handleChange:'+ value);
            }
        );
    }
    
}
import React from 'react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class ResultTable extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
		return (
			<div>
				<TableContainer component={Paper}>
					<Table className="primitiveQuestionTable" aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>項目名</TableCell>
								<TableCell>結果</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
                            <TableRow key="score">
                                <TableCell>
                                    あなたのチームの得点
                                </TableCell>
                                <TableCell>
                                    {this.props.Score}
                                </TableCell>
                            </TableRow>
                            <TableRow key="average">
                                <TableCell>
                                    全国の平均点
                                </TableCell>
                                <TableCell>
                                    {this.props.Average}
                                </TableCell>
                            </TableRow>
                            <TableRow key="ranking">
                                <TableCell>
                                    ランキング
                                </TableCell>
                                <TableCell>
                                    {this.props.Ranking}
                                </TableCell>
                            </TableRow>
                            <TableRow key="message">
                                <TableCell>
                                    あなたへのメッセージ
                                </TableCell>
                                <TableCell>
                                    {this.props.Message}
                                </TableCell>
                            </TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}

}
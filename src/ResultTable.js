import React from 'react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class ResultTable extends React.Component {

    render() {
        if (this.props.Score == null) return (<br/>);

		return (
			<table>
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
                                    あなたのチームの得点(4点満点)
                                </TableCell>
                                <TableCell>
                                    {this.props.Score}
                                </TableCell>
                            </TableRow>
                            <TableRow key="average">
                                <TableCell>
                                    全国の平均点(4点満点)
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

                <p>
                    よろしければ、以下の記事を参考に<br/>
                    楽しいチーム開発をするためのヒントを見つけてもらえれば幸いです。<br/>
                    <a href="https://qiita.com/kojimadev/items/4b28f801863cf4e8f0da" target="_blank" rel="noopener noreferrer">1年以上かけて生産性倍増＋成長し続けるチームになった施策を全部公開</a><br/>
                    <a href="https://qiita.com/kojimadev/items/c211207ede652c2abeb0" target="_blank" rel="noopener noreferrer">疲労感と孤独感いっぱいのリモートワークからの脱却</a><br/>
                    <a href="https://qiita.com/kojimadev/items/e12784e6764f1b60e73c" target="_blank" rel="noopener noreferrer">レビューで大量の指摘をして大きな手戻りを発生させた原因はレビューアの私にあった</a><br/>
                    <a href="https://www.docswell.com/s/kojimadev/ZWRL1K-2022-03-16-200900" target="_blank" rel="noopener noreferrer">主体性を発揮しやすい環境を作る事例</a><br/>
                </p>
			</table>
		);
	}

}
import * as React from "react";
import { Table } from "antd";

interface adminTableProps {
	data: object[];
	columns: object[];
}
export default class adminTable extends React.Component<adminTableProps, {}> {
	render() {
		const { data, columns } = this.props;
		return (
			<Table dataSource={data} columns={columns} />
		)
	}
}
import * as React from "react";
import { Table } from "antd";
import { checkDataType } from "../../../utils/checkDataType";


interface adminTableProps {
	data: object[];
	columns: object[];
}
export default class adminTable extends React.Component<adminTableProps, {}> {
	componentWillMount() {
		const { data } = this.props;
		if (data !== undefined) {
			checkDataType(data);
		}
	}
	render() {
		const { data, columns } = this.props;
		return (
			<Table columns={columns} dataSource={data} />
		)
	}
}
import * as React from "react";
import { Table } from "antd";
export class AdminTable extends React.Component {
    render() {
        const { data, columns } = this.props;
        return (React.createElement(Table, { dataSource: data, columns: columns }));
    }
}
//# sourceMappingURL=index.js.map
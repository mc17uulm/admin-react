import React from "react"
import {Generic, GenericProps} from "./Generic";
import {useClassName} from "../hooks/useClassName";

interface TableProps extends GenericProps {
    bordered?: boolean,
    hover?: boolean,
    fixedHead?: boolean
}

export const Table = (props : TableProps) => {

    const className = useClassName(
        'table',
        props.className,
        props.bordered ? 'table-bordered' : undefined,
        props.hover ? 'table-hover' : undefined,
        props.fixedHead ? 'table-head-fixed': undefined
    )

    return (
        <table className={className}>
            {props.children}
        </table>
    );
}

export const TableHead = (props : GenericProps) => {
    return (
        <thead {...props}>
            {props.children}
        </thead>
    )
}
Table.Head = TableHead;

export const TableBody = (props : GenericProps) => {
    return (
        <tbody {...props}>
        {props.children}
        </tbody>
    )
}
Table.Body = TableBody;

export const TableRow = (props : GenericProps) => {
    return (
        <tr {...props}>
        {props.children}
        </tr>
    )
}
Table.Row = TableRow;

export const TableHeadColumn = (props : GenericProps) => {
    return (
        <th {...props}>
        {props.children}
        </th>
    )
}
Table.HeadColumn = TableHeadColumn;

export const TableColumn = (props : GenericProps) => {
    return (
        <td {...props}>
        {props.children}
        </td>
    )
}
Table.Column = TableColumn;
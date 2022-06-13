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

export const TableHead = (props : GenericProps) => <Generic name='thead' {...props} />
Table.Head = TableHead;

export const TableBody = (props : GenericProps) => <Generic name='tbody' {...props} />
Table.Body = TableBody;

export const TableRow = (props : GenericProps) => <Generic name='tr' {...props} />
Table.Row = TableRow;

export const TableHeadColumn = (props : GenericProps) => <Generic name='th' {...props} />
Table.HeadColumn = TableHeadColumn;

export const TableColumn = (props : GenericProps) => <Generic name='td' {...props} />
Table.Column = TableColumn;
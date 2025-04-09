"use client";

import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ColumnSchema } from "@/types/columns/ColumnsDefinition";
import DataCell from "@/components/common/data-table/columns/DataCell";
import { exactFilter } from "@/components/common/data-table/columnUtils";

interface TableColumnBuilderProps<TData> {
  columns: ColumnSchema<TData>[];
  config?: {
    defaultSize?: number;
    customCells?: {
      [key: string]: (props: { getValue: () => unknown }) => React.ReactNode;
    };
  };
}

export function useTableColumns<TData>({
  columns,
  config = {}
}: TableColumnBuilderProps<TData>): ColumnDef<TData>[] {
  const { defaultSize = 150, customCells = {} } = config;

  return useMemo(() => {
    return columns
      .filter((column) => column.isVisible !== false)
      .map((column) => {
        const { id, title, options, type, size = defaultSize } = column;

        if (customCells && id in customCells) {
          return {
            id,
            accessorKey: id,
            header: title,
            size,
            cell: customCells[id]
          };
        }
        return {
          id,
          accessorKey: id,
          header: title,
          filterFn: exactFilter,
          size,
          cell: (props: { getValue: () => unknown }) => (
            <DataCell
              getValue={props.getValue}
              type={type}
              options={options}
            />
          ),
        };
      });
  }, [columns, defaultSize, customCells]);
}

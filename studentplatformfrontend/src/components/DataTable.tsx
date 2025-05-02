import React from 'react';

interface DataTableColumn<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  title?: string;
}

function DataTable<T extends object>({ columns, data, title }: DataTableProps<T>) {
  return (
    <div className="w-full">
      {title && (
        <div className="border-b border-secondary-gray/20 pb-4 mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-secondary-gray/20">
              {columns.map((column, i) => (
                <th 
                  key={i} 
                  className="text-left py-3 px-4 text-text-muted font-medium text-sm"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr 
                key={i} 
                className="border-b border-secondary-gray/20 hover:bg-secondary-gray/50"
              >
                {columns.map((column, j) => {
                  const value = typeof column.accessor === 'function' 
                    ? column.accessor(row) 
                    : row[column.accessor as keyof T];
                  
                  return (
                    <td 
                      key={j} 
                      className={`py-4 px-4 ${column.className || ''}`}
                    >
                      {value as React.ReactNode}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;

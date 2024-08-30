import { useTable } from "react-table";
import { useContext, useMemo } from "react";
import AppContext from "../AppContext";

export default function Order() {
  const context = useContext(AppContext);
  const { rootState } = context;
  const data = useMemo(() => rootState.orderProduct, [rootState.orderProduct]);
  const columns = useMemo(
    () => [
      {
        Header: "Product Id",
        accessor: "parent_id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Color",
        accessor: "color",
      },
      {
        Header: "Size",
        accessor: "size",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <div className="tab-pane fade show full_table">
        <div className="woocomerce__account-rtitlewrap">
          <span className="woocomerce__account-rtitle">
            your orders: {rootState.orderProduct.length}{" "}
          </span>
        </div>

        <div>
          {
            rootState.orderProduct && rootState.orderProduct.length ? <div className="table_content">
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup, i) => (
                  <tr {...headerGroup.getHeaderGroupProps()} key={i + "trHead"}>
                    {headerGroup.headers.map((column, i) => (
                      <th {...column.getHeaderProps()} key={i + "th"}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={i + "trBody"}>
                      {row.cells.map((cell, ind) => (
                        <td key={ind + "tdBody"} {...cell.getCellProps()}>
                          {" "}
                          {cell.render("Cell")}{" "}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div> : <div><p>No Order Available</p></div>
          }
          
        </div>
      </div>
    </>
  );
}

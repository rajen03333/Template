import React from "react";
import MaterialTable from "material-table";

export default function TableGrid(props) {
  return (
    <div className="table-grid">
      <div className="table-heading">
        <h2>Hello</h2>
        <div>
          <button className="btn">Hello</button>
          <button className="btn">Hello</button>
          <button className="btn">Hello</button>
        </div>
      </div>

      <div className="material-table">
        <MaterialTable
          columns={props.columnData}
          data={props.rowData}
          options={{
            filtering: false,
            pageSize: 5,
            actionsColumnIndex: 10,
            headerStyle: {
              backgroundColor: "#6c757d",
              textAlign: "center  !important",
              color: "#ffffff",
              width: 10,
            },
            showTitle: false,
            searchFieldAlignment: "right",

            searchFieldStyle: { width: "100%" },

            toolbar: true,
            rowStyle: (x) => {
              if (x.tableData.id % 2) {
                return { backgroundColor: "#f2f2f2" };
              }
            },
          }}
        />
      </div>
    </div>
  );
}

// const Grid = React.memo(TableGrid);
// export default Grid;

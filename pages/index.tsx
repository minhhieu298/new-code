/* eslint-disable @typescript-eslint/no-unused-vars */
import { columnDefs, defaultColumn } from "@/constants/config";
import { Box } from "@mui/material";
import {
  ClientSideRowModelModule,
  colorSchemeDarkBlue,
  ColumnApiModule,
  ColumnAutoSizeModule,
  FirstDataRenderedEvent,
  GridApi,
  GridOptions,
  GridReadyEvent,
  IRowNode,
  ModuleRegistry,
  RowDragEndEvent,
  RowDragModule,
  SortChangedEvent,
  themeMaterial,
  themeQuartz,
  ValidationModule,
  GridStateModule,
  ClientSideRowModelApiModule,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useRef, useState } from "react";

ModuleRegistry.registerModules([
  ColumnAutoSizeModule,
  ColumnApiModule,
  ClientSideRowModelModule,
  ValidationModule /* Development Only */,
  RowDragModule,
  GridStateModule,
  ClientSideRowModelApiModule,
]);

interface RowData {
  RowID: string;
  Info: [string, string][];
}

const theme = themeQuartz
  .withParams({
    fontFamily: "Manrope",
    cellFontFamily: "Manrope",
    fontSize: "12px",
  })
  .withPart(colorSchemeDarkBlue);

export default function Home() {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  //   const [columnApi, setColumnApi] = useState<Column | null>(null);

  const [rowData, setRowData] = useState<RowData[]>();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch(`https://eztrade.fpts.com.vn/hsx/data.ashx?s=quote&l=VN30`)
      .then((res) => res.json())
      .then((data: RowData[]) => setRowData(data))
      .catch((error) => console.log("error", error));

    setGridApi(params.api);
  }, []);

  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    params.api.sizeColumnsToFit();
  }, []);
  const gridOptions: GridOptions = {
      rowDragEntireRow: true,
    // rowDragManaged: true,
    suppressCellFocus: true,
    getRowId: (param) => param.data.RowID,
    animateRows: true,
  };

  const onRowDragEnd = useCallback(
    (event: RowDragEndEvent) => {
      gridApi?.hidePopupMenu();
      const movingNode = event.node;
      const overNode = event.overNode;
      if (!movingNode || !overNode || !gridApi) return;

      const currentData: RowData[] = [];
      gridApi.forEachNodeAfterFilterAndSort((node) => {
        if (node.data) currentData.push(node.data);
      });

      const fromIndex = currentData.findIndex(
        (row) => row.RowID === movingNode.data.RowID
      );
      const toIndex = currentData.findIndex(
        (row) => row.RowID === overNode.data.RowID
      );
      const moveRow = currentData.splice(fromIndex, 1)[0];
      currentData.splice(toIndex, 0, moveRow);
      setRowData(currentData);
      // gridApi.applyColumnState({ defaultState: { sort: null } });
    },
    [gridApi]
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={containerStyle}>
        <div id="grid-wrapper" style={{ width: "100%", height: "100%" }}>
          <div style={gridStyle}>
            <AgGridReact<RowData>
              rowData={rowData}
              columnDefs={columnDefs}
              onGridReady={onGridReady}
              defaultColDef={defaultColumn}
              gridOptions={gridOptions}
              // onGridSizeChanged={onGridSizeChanged}
              // onFirstDataRendered={onFirstDataRendered}
              onRowDragEnd={onRowDragEnd}
              // onRowDragEnter={(event) => {
              //   // Khi bắt đầu kéo, ẩn popup
              //   event.api.hidePopupMenu(); // Ẩn context menu
              //   event.api.hideOverlay(); // Ẩn overlay nếu có
              // }}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

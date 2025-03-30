import { ColDef, ColGroupDef, GridOptions } from "ag-grid-community";

export const columnDefs: (ColDef | ColGroupDef)[] = [
  {
    headerName: "Mã CK",
    valueGetter: (param) => param.data.Info[0][1],
    minWidth: 72,
    maxWidth: 72,
    rowDrag: true,
  },
  {
    headerName: "Trần",
    valueGetter: (param) => param.data.Info[2][1],
    maxWidth: 50,
  },
  {
    headerName: "Sàn",
    valueGetter: (param) => param.data.Info[3][1],
    maxWidth: 50,
  },
  {
    headerName: "TC",
    valueGetter: (param) => param.data.Info[1][1],
    maxWidth: 50,
  },
  {
    headerName: "Mua",
    children: [
      {
        headerName: "KL4",
        valueGetter: (param) => param.data.Info[4][1],
        hide: true,
      },
      {
        headerName: "Giá 3",
        valueGetter: (param) => param.data.Info[5][1],
      },
      {
        headerName: "KL3",
        valueGetter: (param) => param.data.Info[6][1],
      },
      {
        headerName: "Giá 2",
        valueGetter: (param) => param.data.Info[7][1],
      },
      {
        headerName: "KL2",
        valueGetter: (param) => param.data.Info[8][1],
      },
      {
        headerName: "Giá 1",
        valueGetter: (param) => param.data.Info[9][1],
      },
      {
        headerName: "KL1",
        valueGetter: (param) => param.data.Info[10][1],
      },
    ],
  },
  {
    headerName: "Khớp lệnh",
    children: [
      {
        headerName: "Giá",
        valueGetter: (param) => param.data.Info[11][1],
      },
      {
        headerName: "KL",
        valueGetter: (param) => param.data.Info[12][1],
      },
      {
        headerName: "+/-",
        valueGetter: (param) => param.data.Info[13][1],
      },
    ],
  },
  {
    headerName: "Bán",
    children: [
      {
        headerName: "Giá 1",
        valueGetter: (param) => param.data.Info[14][1],
      },
      {
        headerName: "KL1",
        valueGetter: (param) => param.data.Info[15][1],
      },
      {
        headerName: "Giá 2",
        valueGetter: (param) => param.data.Info[16][1],
      },
      {
        headerName: "KL2",
        valueGetter: (param) => param.data.Info[17][1],
      },
      {
        headerName: "Giá 3",
        valueGetter: (param) => param.data.Info[18][1],
      },
      {
        headerName: "KL3",
        valueGetter: (param) => param.data.Info[19][1],
      },
      {
        headerName: "KL4",
        valueGetter: (param) => param.data.Info[20][1],
        hide: true,
      },
    ],
  },
  {
    headerName: "Tổng KL",
    valueGetter: (param) => param.data.Info[21][1],
  },
  {
    headerName: "Mở cửa",
    valueGetter: (param) => param.data.Info[22][1],
  },
  {
    headerName: "Cao",
    valueGetter: (param) => param.data.Info[23][1],
  },
  {
    headerName: "Thấp",
    valueGetter: (param) => param.data.Info[24][1],
  },
  {
    headerName: "TB",
    valueGetter: (param) => param.data.Info[25][1],
    hide: true,
  },
  {
    headerName: "ĐTNN",
    children: [
      {
        headerName: "NN mua",
        valueGetter: (param) => param.data.Info[26][1],
      },
      {
        headerName: "NN bán",
        valueGetter: (param) => param.data.Info[27][1],
      },
      {
        headerName: "Room",
        valueGetter: (param) => param.data.Info[28][1],
        maxWidth: 90,
        minWidth: 90,
      },
    ],
  },
];

export const defaultColumn: ColDef = {
  resizable: false,
  flex: 1,
  suppressMovable: true,

  valueFormatter: (param) => {
    if (isNaN(Number(param.value))) return String(param.value); // Nếu không phải số, trả về nguyên chuỗi
    const [integerPart, decimalPart] = String(param.value).split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;
  },
  headerStyle: {
    padding: "0 .375rem",
  },
};



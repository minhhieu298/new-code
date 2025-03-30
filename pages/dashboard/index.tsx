import { useEffect, useState } from "react";

interface RowData {
  RowID: string;
  Info: [string, string][];
}

const DashBoard = () => {
  const [rowData, setRowData] = useState<RowData[]>();
  useEffect(() => {
    fetch(`https://eztrade.fpts.com.vn/hsx/data.ashx?s=quote&l=VN30`)
      .then((res) => res.json())
      .then((data: RowData[]) => setRowData(data))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th rowSpan={2}>Mã CK</th>
            <th rowSpan={2}>Trần</th>
            <th rowSpan={2}>Sàn</th>
            <th rowSpan={2}>TC</th>
            <th colSpan={6}>Mua</th>
            <th colSpan={3}>Khớp lệnh</th>
            <th colSpan={6}>Bán</th>
            <th colSpan={2}>Tổng KL</th>
            <th>Room</th>
          </tr>
          <tr>
            <th>Giá 3</th>
            <th>KL3</th>
            <th>Giá 2</th>
            <th>KL2</th>
            <th>Giá 1</th>
            <th>KL1</th>
            <th>Giá</th>
            <th>KL</th>
            <th>+/-</th>
            <th>Giá 1</th>
            <th>KL1</th>
            <th>Giá 2</th>
            <th>KL2</th>
            <th>Giá 3</th>
            <th>KL3</th>
            <th>NN mua</th>
            <th>NN bán</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {rowData &&
            rowData?.map((row) => (
              <tr key={row.RowID}>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
                <td>{row.Info[0][1]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default DashBoard;

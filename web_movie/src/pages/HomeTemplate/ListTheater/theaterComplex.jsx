import { useState } from "react";
import { useSelector } from "react-redux";

const TheaterComplex = () => {
  const { theaterComplex, loadingComplex } = useSelector(
    (state) => state.listTheaterReducer
  );

  const [selectedComplex, setSelectedComplex] = useState(null);

  if (loadingComplex) {
    return <p>Đang tải cụm rạp...</p>;
  }

  if (!theaterComplex.length) {
    return (
      <p className="text-gray-500">
        Vui lòng chọn hệ thống rạp
      </p>
    );
  }

  // 👉 ĐÃ CHỌN 1 CỤM RẠP → HIỂN THỊ DANH SÁCH RẠP
  if (selectedComplex) {
    return (
      <div className="border p-4 rounded-lg">
        <button
          className="mb-4 text-sm text-blue-600 underline"
          onClick={() => setSelectedComplex(null)}
        >
          ← Quay lại danh sách cụm rạp
        </button>

        <h3 className="text-lg font-semibold mb-2">
          {selectedComplex.tenCumRap}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {selectedComplex.diaChi}
        </p>

        <div className="grid grid-cols-5 gap-3">
          {selectedComplex.danhSachRap.map((rap) => (
            <div
              key={rap.maRap}
              className="border rounded p-2 text-center hover:bg-blue-50 cursor-pointer"
            >
              {rap.tenRap}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 👉 CHƯA CHỌN → HIỂN THỊ DANH SÁCH CỤM RẠP
  return (
    <div className="space-y-4">
      {theaterComplex.map((complex) => (
        <div
          key={complex.maCumRap}
          onClick={() => setSelectedComplex(complex)}
          className="border p-4 rounded-lg cursor-pointer hover:bg-gray-50"
        >
          <h3 className="font-semibold">
            {complex.tenCumRap}
          </h3>
          <p className="text-sm text-gray-600">
            {complex.diaChi}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TheaterComplex;

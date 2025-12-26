import { useEffect, useState } from "react";
import {
  fetchListTheater,
  fetchTheaterComplex,
} from "./slice";
import { useDispatch, useSelector } from "react-redux";

const ListTheater = () => {
  const dispatch = useDispatch();
  const {
    listTheater,
    loadingSystem,
  } = useSelector((state) => state.listTheaterReducer);

  const [selectedTheater, setSelectedTheater] = useState(null);

  useEffect(() => {
    dispatch(fetchListTheater());
  }, [dispatch]);

  const handleSelect = (maHeThongRap) => {
    setSelectedTheater(maHeThongRap);
    dispatch(fetchTheaterComplex(maHeThongRap));
  };

  if (loadingSystem) return <p>Đang tải hệ thống rạp...</p>;

  return (
    <div className="grid grid-cols-6 gap-6">
      {listTheater.map((theater) => {
        const isActive =
          selectedTheater === theater.maHeThongRap;

        return (
          <div
            key={theater.maHeThongRap}
            onClick={() =>
              handleSelect(theater.maHeThongRap)
            }
            className={`cursor-pointer p-4 border rounded-lg text-center
              ${
                isActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
          >
            <img
              src={theater.logo}
              className="w-16 h-16 mx-auto mb-2"
            />
            <p className="text-sm font-medium">
              {theater.tenHeThongRap}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ListTheater;

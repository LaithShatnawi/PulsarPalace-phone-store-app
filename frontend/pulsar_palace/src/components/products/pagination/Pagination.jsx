import { Pagination } from "@mantine/core";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./Pagination.scss";

const PaginationSlider = () => {
  const state = useContext(DataContext);
  return (
    <div>
      <Pagination
        className="pagination"
        value={state.page}
        onChange={state.setPage}
        total={2}
        color="violet"
      />
    </div>
  );
};

export default PaginationSlider;

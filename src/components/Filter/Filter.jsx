import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BtnContainer, Select } from "./Filter.styled";

export const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  const handleFilter = (event) => {
    setFilter(
      event.target.value === "null" ? null : event.target.value === "true"
    );
  };

  return (
    <BtnContainer>
      <Select onChange={handleFilter}>
        <option value="null">show all</option>
        <option value="false">follow</option>
        <option value="true">followings</option>
      </Select>
    </BtnContainer>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

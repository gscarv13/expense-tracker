import React from 'react';
import PropTypes from 'prop-types';

const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <div>
      <div>
        <label htmlFor="filter">Filter by year</label>
        <select name="filter" id="filter" value={selected} onChange={dropdownChangeHandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

ExpensesFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default ExpensesFilter;

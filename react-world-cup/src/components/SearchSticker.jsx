import React from 'react';
 
const handleFilterChange = (fn, e) => {
  var value = e.target.value;
  fn(value);
}

const SearchSticker = (props) => (
  <div className="input-group mb-3">
    <input className="w-50" type="text" className="form-control" placeholder="Search sticker" 
    aria-label="stickerFilter" ref="filterInput"  onChange={(e) => handleFilterChange(props.updateFilter, e)} />
  </div>
);

export default SearchSticker;


import React from "react";

function Search({searchTerm, setSearchTerm}) {

  function handleSearch(e){
    setSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
        value = {searchTerm}
        onChange ={handleSearch}
        
        
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

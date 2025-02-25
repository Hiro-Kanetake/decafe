import React, { useEffect, useState } from "react";
import Select from "react-select";
import { findAllUniqueStations } from "../api";
import "../styles/searchbar.css";
import { SearchbarOptions } from "./Home";
import { Link } from "react-router-dom";

interface SearchbarProps {
  selectedOption: SearchbarOptions | null;
  setSelectedOption: React.Dispatch<
    React.SetStateAction<SearchbarOptions | null>
  >;
}

const Searchbar: React.FC<SearchbarProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const [options, setOptions] = useState<SearchbarOptions[]>([]);

  useEffect(() => {
    (async () => {
      const result = await findAllUniqueStations();
      const stations: SearchbarOptions[] = result.map((e) => {
        return {
          label: e.station,
          value: e.station,
        };
      });
      setOptions(stations);
    })();
  }, []);

  const handleChange = (newValue: SearchbarOptions | null) => {
    if (newValue !== null) setSelectedOption(newValue);
  };

  return (
    <div className="searchbarWapper">
      <div className="logocenter">
        <Link to="/" reloadDocument>
          <img src="images/decafelogo.png" className="logo"></img>
        </Link>
      </div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Enter station name: ex. Tokyo"
        backspaceRemovesValue={true}
        isClearable
        openMenuOnFocus
        blurInputOnSelect
        escapeClearsValue
        openMenuOnClick={false}
        maxMenuHeight={200}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default Searchbar;

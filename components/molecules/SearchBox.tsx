import { Input } from "antd";
import React from "react";

interface ISearchBoxProps {
  placeholder: string;
  onSearch: (value: string) => void;
  style?: any;
  size?: "large" | "middle" | "small";
}

const SearchBox: React.FC<ISearchBoxProps> = ({
  placeholder,
  onSearch,
  style,
  size,
}) => {
  const { Search } = Input;

  return (
    <Search
      size={size}
      placeholder={placeholder}
      onSearch={onSearch}
      style={style}
    />
  );
};

export default SearchBox;

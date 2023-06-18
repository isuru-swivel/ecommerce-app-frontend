import { SearchBox, CartIcon } from "@/components";

const CustomerLayoutHeader = () => {
  const handleSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="flex items-center py-8">
      <div className="basis-1/4">Company Name</div>
      <div className="basis-1/2">
        <SearchBox
          placeholder={"Search for crafts"}
          onSearch={handleSearch}
          style={{ width: "100%" }}
          size={"large"}
        />
      </div>
      <div className="basis-1/4">
        <CartIcon />
      </div>
    </div>
  );
};

export default CustomerLayoutHeader;

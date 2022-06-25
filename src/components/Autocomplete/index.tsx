import react, { ChangeEvent, FC, useState } from "react";

interface IData {
  name: string;
  code: string;
}
interface autoCompleteProps {
  data: any[];
}
export const AutoComplete: FC<autoCompleteProps> = ({ data }) => {
  const [search, setSearch] = useState({
    text: "",
    suggestions: [],
  });
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let suggestions: never[] | any = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter((v: IData) => regex.test(v.name));
    }
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const suggestionSelected = (value: IData) => {
    setIsComponentVisible(false);

    setSearch({
      text: value.name,
      suggestions: [],
    });
  };

  const { suggestions } = search;

  return (
    <div style={{ width: "300px" }}>
      <div
        className="autocomplete"
        onClick={() => setIsComponentVisible(false)}
      />
      <div>
        <input
          id="myInput"
          type="text"
          name="myCountry"
          placeholder="Country"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
        />
      </div>
      {suggestions.length > 0 && isComponentVisible && (
        <ul>
          {suggestions.map((item: IData) => (
            <li key={item.code}>
              <div key={item.code} onClick={() => suggestionSelected(item)}>
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      )}
      <input type="submit" />
    </div>
  );
};

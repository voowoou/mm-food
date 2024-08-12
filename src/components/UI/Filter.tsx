interface Props {
  filterName: string;
  checkboxes: boolean;
  filterOptions: string[];
}

export default function Filter({ filterName, checkboxes, filterOptions }: Props) {
  return (
    <div>
      <div>
        <span></span>
        <h4>{filterName}</h4>
      </div>
      <input type="search" placeholder={`Search by {filterName}`}></input>
      <div>
        {checkboxes
          ? filterOptions.map(option => (
              <div key={option}>
                <input type="checkbox" />
                <label>{option}</label>
              </div>
            ))
          : filterOptions.map(option => (
              <div key={option}>
                <input type="number" placeholder="0" />
                <label>{option}</label>
                <input type="number" placeholder="0" />
              </div>
            ))}
      </div>
    </div>
  );
}

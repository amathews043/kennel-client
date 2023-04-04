
export const AnimalSearch = ({ searchTerms, onSearchTermChange }) => {
  return (
    <>
      <div>Search for an animal</div>
      <input type="text" className="animals__search"
        value={searchTerms}
        onChange={
          (changeEvent) => {
            onSearchTermChange(changeEvent.target.value)
          }
        }
        placeholder="Enter search string here..." />
    </>
  )
}

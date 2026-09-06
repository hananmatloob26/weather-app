import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearch = searchTerm.trim();
    if (trimmedSearch) {
      onSearch(trimmedSearch);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
          aria-label="Search for a city"
        />
        <button
          type="submit"
          className="search-button"
          disabled={loading || !searchTerm.trim()}
          aria-label="Search"
        >
          {loading ? (
            <div className="spinner-small"></div>
          ) : (
            <Search size={20} />
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

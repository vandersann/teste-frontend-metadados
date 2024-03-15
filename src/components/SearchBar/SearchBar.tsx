    // src/components/SearchBar/SearchBar.tsx
    import React, { useState } from 'react';

    interface SearchBarProps {
    onSearch: (term: string) => void;
    }

    const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
        <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleChange}
        />
        <button type="submit">Search</button>
        </form>
    );
    };

    export default SearchBar;

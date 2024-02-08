import React, { useState } from 'react';

// Типизация конфига apiconfig с возможными опциями в фильтрах
interface ApiConfig {
    apiKey: string;
    filters: {
        [key: string]: string[];
    };
}

// Типизация передаваемых пропсов
interface FilterOptionsSearchProps {
    apiconfig: ApiConfig;
    filterName: string;
}

// Компонент для рендеринга опций
const FilterOptions: React.FC<FilterOptionsSearchProps> = ({ apiconfig, filterName }) => {
    const [searchText, setSearchText] = useState<string>(''); // Стейт для поиска по опциям в фильтре

    // Хэндлер для поисковой строки
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    let filteredOptions: string[]; // Отфильтрованные пользовательским вводом опции

    if (searchText) {
        filteredOptions = apiconfig.filters[filterName].filter(
            option => option.includes(searchText.toLowerCase()), // Фильтрация по массиву опций
        );
    } else {
        filteredOptions = apiconfig.filters[filterName]; // Неотфильтрованный массив
    }

    // Для calories и nutrients из apiconfig.json определены другие инпуты:
    // не через чекбоксы, а через текстовые инпуты (для минимальных и максимальных значений)
    return (
        <>
            {filterName === 'calories' || filterName === 'nutrients' ? (
                <div className="filter-options">
                    <div>
                        {filteredOptions.map(filterName => (
                            <div key={filterName}>
                                <input
                                    type="text"
                                    id={`min-${filterName}`}
                                    name={`min-${filterName}`}
                                />
                                <span>{filterName}</span>
                                <input
                                    type="text"
                                    id={`max-${filterName}`}
                                    name={`max-${filterName}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="filter-options">
                    <input type="search" onChange={handleChange} name={filterName} />
                    <div>
                        {filteredOptions.map(filterName => (
                            <div key={filterName}>
                                <input
                                    type="checkbox"
                                    id={filterName}
                                    name={filterName}
                                />
                                <label htmlFor={filterName}>{filterName}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default FilterOptions;

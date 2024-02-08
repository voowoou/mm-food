import React, { useState, FC } from 'react';
import apiconfig from '@/APIconfig.json';
import FilterOptions from './FilterOptions';

const JamInput: FC = () => {
    const [cuisinesSearch, setCuisinesSearch] = useState('');
    const [dietsSearch, setDietsSearch] = useState('');
    const [intolerancesSearch, setIntolerancesSearch] = useState('');
    const [typeSearch, setTypeSearch] = useState('');
    const [nutrientsSearch, setNutrientsSearch] = useState('');

    return (
        <form>
            <div className="filter">
                <div className="filter-heading">
                    <button></button>
                    <h2>ARTISTS</h2>
                    <p>The cuisine(s) of the meal</p>
                </div>
                <FilterOptions apiconfig={apiconfig} filterName="cuisines" />
            </div>
            <div className="filter">
                <div className="filter-heading">
                    <button></button>
                    <h2>RIFFS</h2>
                    <p>The diet(s) for which the recipes must be suitable</p>
                </div>
                <FilterOptions apiconfig={apiconfig} filterName="diets" />
            </div>
            <div className="filter">
                <div className="filter-heading">
                    <button></button>
                    <h2>CHORDS</h2>
                    <p>
                        The meal must not contain ingredients that are not suitable for
                        people with the intolerances entered
                    </p>
                </div>
                <FilterOptions apiconfig={apiconfig} filterName="intolerances" />
            </div>
            <div className="filter">
                <div className="filter-heading">
                    <button></button>
                    <h2>GENRE</h2>
                    <p>The type of the meal</p>
                </div>
                <FilterOptions apiconfig={apiconfig} filterName="mealTypes" />
            </div>
            <div className="filter">
                <div className="filter-heading">
                    <button></button>
                    <h2>TEMPO</h2>
                    <p>Input minimum and maximum desired calories per serving (100g)</p>
                </div>
                <FilterOptions apiconfig={apiconfig} filterName="calories" />
            </div>
            <div className="filter">
                <div className="filter-heading">
                    <button></button>
                    <h2>NOTES</h2>
                    <p>Input minimum and maximum nutrients per serving (100g)</p>
                </div>
                <FilterOptions apiconfig={apiconfig} filterName="nutrients" />
            </div>
            <button type="submit">JAM</button>
        </form>
    );
};

export default JamInput;

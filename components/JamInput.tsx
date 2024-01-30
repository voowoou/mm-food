import React, { FC } from 'react';
import apiconfig from '@/APIconfig.json';

const JamInput: FC = () => {
    return (
        <form>
            <div className="filters">
                <div className="heading">
                    <button></button>
                    <h2>ARTISTS</h2>
                    <p>The cuisine(s) of the meal</p>
                </div>
                <div className="input-container">
                    <input type="text" name="cuisines" />
                    {/* .map() method is used to display filters saved in apiconfig */}
                    {apiconfig.filters.cuisines.map(cuisine => (
                        <div key={cuisine}>
                            <input
                                type="checkbox"
                                id={cuisine}
                                name={cuisine}
                            />
                            <label htmlFor={cuisine}>{cuisine}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filters">
                <div className="heading">
                    <button></button>
                    <h2>RIFFS</h2>
                    <p>The diet(s) for which the recipes must be suitable</p>
                </div>
                <div className="input-container">
                    <input type="text" name="diets" />
                    {/* .map() method is used to display filters saved in apiconfig */}
                    {apiconfig.filters.diets.map(diet => (
                        <div key={diet}>
                            <input type="checkbox" id={diet} name={diet} />
                            <label htmlFor={diet}>{diet}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filters">
                <div className="heading">
                    <button></button>
                    <h2>CHORDS</h2>
                    <p>
                        The meal must not contain ingredients that are not
                        suitable for people with the intolerances entered
                    </p>
                </div>
                <div className="input-container">
                    <input type="text" name="intolerances" />
                    {/* .map() method is used to display filters saved in apiconfig */}
                    {apiconfig.filters.intolerances.map(intolerance => (
                        <div key={intolerance}>
                            <input
                                type="checkbox"
                                id={intolerance}
                                name={intolerance}
                            />
                            <label htmlFor={intolerance}>{intolerance}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filters">
                <div className="heading">
                    <button></button>
                    <h2>GENRE</h2>
                    <p>The type of the meal</p>
                </div>
                <div className="input-container">
                    <input type="text" name="mealTypes" />
                    {/* .map() method is used to display filters saved in apiconfig */}
                    {apiconfig.filters.mealTypes.map(mealType => (
                        <div key={mealType}>
                            <input
                                type="checkbox"
                                id={mealType}
                                name={mealType}
                            />
                            <label htmlFor={mealType}>{mealType}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filters">
                <div className="heading">
                    <button></button>
                    <h2>TEMPO</h2>
                    <p>
                        Input minimum and maximum desired calories per serving
                        (100g)
                    </p>
                </div>
                <div className="input-container">
                    <input type="text" id="minCalories" name="minCalories" />
                    <span>kilocalories</span>
                    <input type="text" id="maxCalories" name="maxCalories" />
                </div>
            </div>
            <div className="filters">
                <div className="heading">
                    <button></button>
                    <h2>NOTES</h2>
                    <p>
                        Input minimum and maximum nutrients per serving (100g)
                    </p>
                </div>
                <div className="input-container">
                    {/* .map() method is used to display filters saved in apiconfig */}
                    <h3>macro and micro nutrients</h3>
                    <input type="text" name="nutrients" />
                    <div>
                        {apiconfig.filters.nutrients.map(nutrient => (
                            <div key={nutrient}>
                                <input
                                    type="text"
                                    id={`min-${nutrient}`}
                                    name={`min-${nutrient}`}
                                />
                                <span>{nutrient}</span>
                                <input
                                    type="text"
                                    id={`max-${nutrient}`}
                                    name={`max-${nutrient}`}
                                />
                            </div>
                        ))}
                    </div>
                    <h3>food properties</h3>
                    <div>
                        {apiconfig.filters.foodProperties.map(property => (
                            <div key={property}>
                                <input
                                    type="text"
                                    id={`min-${property}`}
                                    name={`min-${property}`}
                                />
                                <span>{property}</span>
                                <input
                                    type="text"
                                    id={`max-${property}`}
                                    name={`max-${property}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button type="submit">JAM</button>
        </form>
    );
};

export default JamInput;

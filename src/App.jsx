// @ts-check

import * as React from 'react'

import './App.css'

function App() {
    const [inputValues, setInputValues] = React.useState({
        salt: '0',
        fat: '0',
        satFat: '0',
        sugar: '0',
        portion: '1',
    })

    const [outputValues, setOutputValues] = React.useState({})

    const RDAS = {
        SALT: 6,
        FAT: 70,
        SATFAT: 20,
        SUGAR: 90,
    }

    function calcAllowance() {
        return {
            final_salt:
                Math.round((parseFloat(inputValues.salt) / RDAS.SALT) * 100) /
                parseInt(inputValues.portion),
            final_fat: Math.round(
                ((parseFloat(inputValues.fat) / RDAS.FAT) * 100) /
                    parseInt(inputValues.portion)
            ),
            final_satfat: Math.round(
                ((parseFloat(inputValues.satFat) / RDAS.SATFAT) * 100) /
                    parseInt(inputValues.portion)
            ),
            final_sugar: Math.round(
                ((parseFloat(inputValues.sugar) / RDAS.SUGAR) * 100) /
                    parseInt(inputValues.portion)
            ),
        }
    }

    /**
     * Submit handler for the main form
     * @param {React.SyntheticEvent} e - event
     */
    const handleChange = (e) => {
        const newArr = {
            ...inputValues,
            [e.target.name]: e.target.value,
        }
        setInputValues(newArr)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const output = calcAllowance()
        setOutputValues(output)
    }

    return (
        <>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    {/* <h3>Enter values are per 100g</h3> */}
                    <label htmlFor="salt">
                        How much salt does this thing have?
                    </label>
                    <input
                        name="salt"
                        onChange={handleChange}
                        value={inputValues.salt}
                    ></input>
                    <label htmlFor="fat">How about Fats?</label>
                    <input
                        name="fat"
                        onChange={handleChange}
                        value={inputValues.fat}
                    ></input>
                    <label htmlFor="satFat" onChange={handleChange}>
                        Saturated fats?
                    </label>
                    <input
                        name="satFat"
                        onChange={handleChange}
                        value={inputValues.satFat}
                    ></input>
                    <label htmlFor="sugar" onChange={handleChange}>
                        What about those sugars?
                    </label>
                    <input
                        name="sugar"
                        onChange={handleChange}
                        value={inputValues.sugar}
                    ></input>
                    <label htmlFor="sugar" onChange={handleChange}>
                        How many portions per pack?
                    </label>
                    <input
                        name="portion"
                        onChange={handleChange}
                        value={inputValues.portion}
                    ></input>

                    <button type="submit">Lets see what's cooking</button>
                </form>
            </div>
            <div className="results">
                <p>SALT: {outputValues.final_salt}%</p>
                <p>FAT: {outputValues.final_fat}%</p>
                <p>SATURATED FAT: {outputValues.final_satfat}%</p>
                <p>SUGARS: {outputValues.final_sugar}%</p>
            </div>
        </>
    )
}

export default App

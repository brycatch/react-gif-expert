import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputValueChange = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue !== undefined && inputValue.trim().length > 2)
            setCategories((categories) => [inputValue, ...categories]);




    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValueChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
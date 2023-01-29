import { useState, useRef } from "react";
import { FormSection, Input, Button } from "./styled";

const Form = ({ generateNumber, compareNumbers }) => {
    const [value, setValue] = useState("");


    const onFormSubmit = (event) => {
        event.preventDefault();

        setValue("");
        generateNumber();
        compareNumbers(+value);
    };

    return (
        <FormSection onSubmit={onFormSubmit}>
            <Input
                type="number"
                value={value}
                onChange={({ target }) => setValue(target.value)}
                required
                min="1"
                placeholder="1-5"
            />
            <Button>Zatwierdź</Button>
        </FormSection>
    );
};

export default Form;
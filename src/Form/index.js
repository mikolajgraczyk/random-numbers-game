import { useState } from "react";
import { FormSection, Input, Button } from "./styled";

const Form = ({ generateNumber, compareNumbers, mode }) => {
    const [value, setValue] = useState("");

    const placeholder = `${mode.generateFrom}-${mode.generateTo}`;

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
                placeholder={placeholder}
            />
            <Button>Zatwierdź</Button>
        </FormSection>
    );
};

export default Form;
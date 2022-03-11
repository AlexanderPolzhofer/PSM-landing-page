import React from 'react';
import { InputFormContainer } from '../app-styles/App.styles';

function InputForm() {
    return (
        <InputFormContainer>
            <input
                type='text'
                placeholder='Name'
            />
            <input
                type='text'
                placeholder='E-Mail'
            />
            <textarea
                rows={5}
                placeholder='Ihre Mitteilung'
            />
        </InputFormContainer>);
};

export default InputForm;
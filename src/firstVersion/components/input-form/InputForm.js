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
            <button onClick={(e) => { e.preventDefault(); alert('E-Mail senden') }}>
                E-Mail senden
            </button>
        </InputFormContainer>);
};

export default InputForm;
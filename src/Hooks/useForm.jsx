import React from 'react';

const types = {
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Preencha um email válido',
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        message: 'Senha deve conter 8 dígitos 1 caractere especial e uma letra maiúscula e um número'
    }
};

const useForm = (type) => {
    //type === email, password
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);
    


    function validate(value){

       
        if(type === false ) return true;
        if(value.length === 0){
            setError('Preencha um valor');
            return false;
        }else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        }else{
            setError(null);
            return true;
        }

    }

    function onChange({ target }) {
        if(error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
}

export default useForm;
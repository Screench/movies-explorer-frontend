import { useState, useCallback } from 'react'

export default function useForm () {
  const [inputFieldValues, setInputFieldValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const handleInputChange = (event) => {
    try {
      const name = event.target.name;
      const value = event.target.value;

      setInputFieldValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      setErrors((prevState) => ({
        ...prevState,
        [name]: event.target.validationMessage,
      }));

      setIsFormValid(event.target.closest('#form').checkValidity());

    } catch (error) {
      console.error('Ошибка', error);
    }
  };

  const updateForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setInputFieldValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setInputFieldValues, setErrors, setIsFormValid]
  );

  return {
    inputFieldValues,
    handleInputChange,
    isFormValid,
    errors,
    updateForm,
  };
}
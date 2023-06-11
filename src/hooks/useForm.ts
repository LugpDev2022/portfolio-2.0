import { useState } from 'react';

type Event =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>;

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: Event) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onResetForm = () => {
    setFormState(initialForm);
  };

  return { ...formState, formState, onInputChange, onResetForm };
};

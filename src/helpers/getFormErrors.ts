export const getFormErrors = (formState: any) => {
  const errors = {
    name: '',
    email: '',
    message: '',
  };

  const { name, email, message } = formState;

  if (!name) errors.name = 'Name is required';
  else if (name.length <= 2) errors.name = 'Write a valid name';

  if (!email) errors.email = 'Email is required';
  else if (!email.includes('@') || email.length < 5)
    errors.email = 'Write a valid email';

  if (!message) errors.message = 'Message is required';
  else if (message.length <= 5) errors.message = 'Message is too short';

  return errors;
};

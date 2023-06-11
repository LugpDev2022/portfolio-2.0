interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export const getFormErrors = (formState: any): Errors => {
  const errors: Errors = {};

  const { name, email, message } = formState;

  if (!name) {
    errors.name = 'Name is required';
  } else if (name.trim().length <= 2) {
    errors.name = 'Please enter a valid name';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!message) {
    errors.message = 'Message is required';
  } else if (message.trim().length <= 5) {
    errors.message = 'Please enter a longer message';
  }

  return errors;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

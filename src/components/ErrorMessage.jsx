import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <AlertCircle className="error-icon" size={24} />
      <p className="error-text">{message}</p>
    </div>
  );
};

export default ErrorMessage;

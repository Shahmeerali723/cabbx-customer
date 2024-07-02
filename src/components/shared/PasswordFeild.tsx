import { ChangeEvent, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

interface PasswordFieldProps {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
  }
  
   const PasswordField: React.FC<PasswordFieldProps> = ({ placeholder, value, onChange, name }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
  
    return (
      <div className="relative flex items-center mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center p-3 m-1 rounded-lg bg-secondary">
          <FaKey className="text-white" />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className="w-full h-full pl-14 pr-4 py-3.5 border rounded-lg focus:outline-none  "
        />
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? (
            <FaEyeSlash className="text-gray-500" />
          ) : (
            <FaEye className="text-gray-500" />
          )}
        </div>
      </div>
    );
  };

  export default PasswordField
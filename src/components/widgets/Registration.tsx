import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaEye, FaEyeSlash, FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import PasswordField from '../shared/PasswordFeild';

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon: React.ComponentType;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, icon: Icon, value, onChange, name }) => (
  <div className="relative flex items-center mb-4 ">
    <div className="absolute inset-y-0 left-0 flex items-center p-4 m-1 rounded-md bg-secondary text-white">
      <Icon  />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full h-full pl-14 pr-4 py-4 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
    />
  </div>
);



const RegisterWidget: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    customerName: '',
    customerMobile: '',
    townCity: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }

    // Here you can handle the form submission (e.g., send it to an API)
    // Example: axios.post('/api/register', data);

    console.log(data); // To verify the form data
  };

  return (
    <div className="w-full mx-auto p-6 bg-[#EDEDED] rounded shadow font-plus-jakarta">
      <h2 className="text-2xl font-semibold mb-3 text-center">Register</h2>
      <hr />
      <div className="bg-golden mt-5 p-2 mb-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white">Account Information</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
          <InputField
            type="email"
            placeholder="Email"
            icon={FaEnvelope}
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <PasswordField
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
          <PasswordField
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>

        <div className="bg-golden p-2 mt-6 mb-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white">Passenger Information</h3>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
          <InputField
            type="text"
            placeholder="Customer Name"
            icon={FaUser}
            value={formData.customerName}
            onChange={handleChange}
            name="customerName"
          />
          <InputField
            type="text"
            placeholder="Customer Mobile Number"
            icon={FaPhone}
            value={formData.customerMobile}
            onChange={handleChange}
            name="customerMobile"
          />
          <InputField
            type="text"
            placeholder="Town, City"
            icon={FaMapMarkerAlt}
            value={formData.townCity}
            onChange={handleChange}
            name="townCity"
          />
        </div>

        <p className="text-sm mt-4">
          By clicking Register, you agree to our <Link href="/Terms-and-Conditions" className="font-semibold"> Terms and Conditions</Link>
        </p>
        <div className='w-full flex justify-center items-center'>
          <button
            type="submit"
            className="mt-6 w-fit py-2 px-7 bg-secondary text-white font-semibold rounded hover:bg-green-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterWidget;

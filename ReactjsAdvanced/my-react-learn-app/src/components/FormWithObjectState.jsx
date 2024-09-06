import { useState } from 'react';

export default function FormWithObjectState() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value  // Update the specific field in the form
    }));
  }

  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
    </form>
  );
}

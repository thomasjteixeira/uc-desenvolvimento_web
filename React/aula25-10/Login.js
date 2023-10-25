import React, { useState } from "react";

export default function Login() {
  const [formState, setFormState] = useState({});
  const [visibility, setVisibility] = useState(false);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <form>
        <label>username</label>
        <input
          value={formState.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
        />
        <label>password</label>
        <input
          value={formState.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
      </form>
      <button
        onClick={() =>
          visibility ? setVisibility(false) : setVisibility(true)
        }
      >
        click
      </button>
      {visibility ? <p>{formState.password}</p> : <p></p>}
    </div>
  );
}

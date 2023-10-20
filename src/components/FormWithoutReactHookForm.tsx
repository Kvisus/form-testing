"use client";

import { resolve } from "path";
import { useState } from "react";

const FromWithoutReactHookForm = () => {
  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Passwords do not match"]);
      setIsSubmitting(false);
      return;
    }

    //TODO submit to server
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li key={error} className="bg-red-500 px-4 py-2 rounded">
              {error}
            </li>
          ))}
        </ul>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
        required
        maxLength={50}
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
        required
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm Password"
        className="px-4 py-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 py-2 rounded disabled:bg-gray-600"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};
export default FromWithoutReactHookForm;

"use client";

import { resolve } from "path";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const FormWithReactHookForm = () => {
  const {
    register, //every input
    handleSubmit,
    formState: { errors, isSubmitting }, //states: errors, isSubmitting
    reset,
    getValues, //for password compare
  } = useForm();

  async function onSubmit(data: FieldValues) {
    //TODO submit to server
    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <input
        type="email"
        placeholder="Email"
        className="input"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 10,
            message: "Password must be at least 10 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="input"
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword", {
          required: "Password is required",
          validate: (value) =>
            value === getValues("password") || "Passwords do not match",
        })}
        type="password"
        placeholder="Confirm Password"
        className="input"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
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
export default FormWithReactHookForm;

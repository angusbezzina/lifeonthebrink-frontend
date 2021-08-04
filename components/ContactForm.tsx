import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classnames from "classnames";

import { AirtableSubmission } from "api/airtable";

import FormStyles from "styles/FormStyles";
import { FormErrorStyles } from "styles/ErrorStyles";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  title?: string;
};

export default function ContactForm({ title }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, message } = data;
    const formData = { name, email, message };

    try {
      await AirtableSubmission(formData);
      setMessage(
        `Thanks for your message ${data.name}! we'll be in touch soon 😁`
      );
      reset({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error;
      setMessage(
        `We're sorry ${data.name}, it looks like something has gone wrong 😔`
      );
    }
  };

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      {title && <h2>{title}</h2>}
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true, maxLength: 80 })}
      />
      {errors.name && (
        <FormErrorStyles>Please enter a valid name.</FormErrorStyles>
      )}
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <FormErrorStyles>Please enter a valid email.</FormErrorStyles>
      )}
      <textarea
        placeholder="Your message..."
        {...register("message", { required: true, min: 10 })}
      />
      {errors.message && (
        <FormErrorStyles>Please enter an appropriate message.</FormErrorStyles>
      )}

      <button
        type="submit"
        className={classnames({
          ["invalidForm"]: !isValid,
        })}
        disabled={!isValid}
      >
        Send
      </button>
      {message && <div className="formSubmissionMessage">{message}</div>}
    </FormStyles>
  );
}

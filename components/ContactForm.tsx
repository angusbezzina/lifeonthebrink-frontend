import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { AirtableSubmission } from "api/airtable";

import FormStyles from "styles/FormStyles";

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
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, message } = data;
    const formData = { name, email, message };

    try {
      await AirtableSubmission(formData);
    } catch (error) {
      console.error;
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
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
        placeholder="Your message..."
        {...register("message", { required: true, min: 10 })}
      />

      <input type="submit" />
    </FormStyles>
  );
}

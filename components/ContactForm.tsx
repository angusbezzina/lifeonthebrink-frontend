import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classnames from "classnames";

import { AirtableSubmission } from "pages/api/airtable";

import FormStyles from "styles/FormStyles";
import { FormErrorStyles } from "styles/ErrorStyles";
import { RECAPTCHA_SITE_KEY } from "lib/constants";
import fetch from "node-fetch";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  title?: string;
};

export default function ContactForm({ title }: ContactFormProps) {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });
  const { name, email, message } = getValues();

  // const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //   const { name, email, message } = data;
  //   const formData = { name, email, message };

  //   try {
  //     await AirtableSubmission(formData);
  //     setMessage(
  //       `Thanks for your message ${data.name}! we'll be in touch soon 😁`
  //     );
  //     reset({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     console.error;
  //     setMessage(
  //       `We're sorry ${data.name}, it looks like something has gone wrong 😔`
  //     );
  //   }
  // };

  useEffect(() => {
    const loadScriptByURL = (id: string, url: string, callback: any) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`,
      () => {
        console.log("Script loaded!");
      }
    );
  }, []);

  const handleOnClick = (e: any) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
        .then((token) => {
          submitData(token);
        });
    });
  };

  const submitData = (token: any) => {
    // call a backend API to verify reCAPTCHA response
    fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        "g-recaptcha-response": token,
      }),
    })
      .then((res) => res.json())
      .then((res: any) => {
        console.log(res);
        if (res.success) {
          AirtableSubmission({ name, email, message})
            .then((res) => {
              setSubmissionMessage(
                `Thanks for your message ${name}! we'll be in touch soon 😁`
              );
              reset({
                name: "",
                email: "",
                message: "",
              });
            })
            .catch((err) => {
              console.error(err);
              setSubmissionMessage(
                `We're sorry ${name}, it looks like something has gone wrong 😔`
              );
            });
        }

        if (!res.success) {
          setSubmissionMessage(
            `We're sorry ${name}, it looks like something has gone wrong 😔`
          );
        }

        reset({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <FormStyles onSubmit={handleSubmit(handleOnClick)}>
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
      {submissionMessage && (
        <div className="formSubmissionMessage">{submissionMessage}</div>
      )}
    </FormStyles>
  );
}

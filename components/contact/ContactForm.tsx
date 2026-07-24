"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const nextErrors: FormErrors = {};
    if (values.name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.projectType) nextErrors.projectType = "Choose a project type.";
    if (values.message.trim().length < 20) {
      nextErrors.message = "Tell me a little more (at least 20 characters).";
    }
    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // Backend integration point: replace this local success state with the
      // future email/API submission.
      setSubmitted(true);
      setValues(initialValues);
    }
  }

  function updateField(field: keyof FormValues, value: string) {
    setSubmitted(false);
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <FormField label="Name" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </FormField>
        <FormField label="Email" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </FormField>
      </div>

      <FormField
        label="Project type"
        error={errors.projectType}
        htmlFor="projectType"
      >
        <select
          id="projectType"
          name="projectType"
          value={values.projectType}
          onChange={(event) => updateField("projectType", event.target.value)}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
        >
          <option value="">Select one</option>
          <option value="full-stack">Full-stack product</option>
          <option value="automation">AI or automation</option>
          <option value="business-system">Business system</option>
          <option value="iot">IoT or connected hardware</option>
          <option value="other">Something else</option>
        </select>
      </FormField>

      <FormField label="Message" error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={7}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </FormField>

      <button type="submit" className="form-submit">
        SEND THE BRIEF
        <ArrowRight aria-hidden="true" size={18} />
      </button>
      <p className="form-note" aria-live="polite">
        {submitted
          ? "Your form is validated. Submission delivery will be connected next."
          : "This form currently validates locally; it does not send an email yet."}
      </p>
    </form>
  );
}

function FormField({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="form-error">
          {error}
        </p>
      )}
    </div>
  );
}

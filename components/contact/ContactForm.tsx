"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, Copy, Download, Check } from "lucide-react";

type Values = { name: string; email: string; projectType: string; message: string };
const empty: Values = { name: "", email: "", projectType: "", message: "" };

export function ContactForm({ recipient }: { recipient: string | null }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("");
  const preview = useRef<HTMLDivElement>(null);
  function update(field: keyof Values, value: string) {
    setValues(previous => ({ ...previous, [field]: value }));
    setErrors(previous => ({ ...previous, [field]: undefined }));
    setDraft(""); setStatus("");
  }
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Values> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Please enter a valid email address.";
    if (!values.projectType) next.projectType = "Choose what you’d like to talk about.";
    if (values.message.trim().length < 20) next.message = "Add a little context—at least 20 characters.";
    setErrors(next);
    if (Object.keys(next).length) { document.getElementById(Object.keys(next)[0])?.focus(); return; }
    setDraft(`Hi Shivansh,\n\n${values.message.trim()}\n\nTopic: ${values.projectType}\n\n${values.name.trim()}\n${values.email.trim()}`);
    setStatus("Your draft is ready. It has not been sent.");
    requestAnimationFrame(() => preview.current?.focus());
  }
  async function copy() {
    try { await navigator.clipboard.writeText(draft); setStatus("Message copied. Paste it into your preferred messaging app."); }
    catch { setStatus("Copy is unavailable here. You can select the draft text or download it instead."); }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([draft], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "message-to-shivansh.txt"; anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Draft downloaded. It has not been sent.");
  }
  const mailto = recipient ? `mailto:${recipient}?subject=${encodeURIComponent(`${values.projectType} — ${values.name.trim()}`)}&body=${encodeURIComponent(draft)}` : null;
  return <form className="hello-form" onSubmit={prepare} noValidate>
    <div className="hello-form__heading"><span>01 / YOUR MESSAGE</span><span>A LITTLE CONTEXT GOES A LONG WAY.</span></div>
    <div className="hello-form__row">{(["name","email"] as const).map(field=><div className="hello-field" key={field}><label htmlFor={field}>{field === "name" ? "Your name" : "Your email"}<span>Required</span></label><input id={field} name={field} type={field === "email" ? "email" : "text"} autoComplete={field} maxLength={field === "email" ? 254 : 100} value={values[field]} onChange={event=>update(field,event.target.value)} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} placeholder={field === "name" ? "What should I call you?" : "you@example.com"} required />{errors[field] && <p className="hello-error" id={`${field}-error`}>{errors[field]}</p>}</div>)}</div>
    <div className="hello-field"><label htmlFor="projectType">What’s on your mind?<span>Required</span></label><select id="projectType" name="projectType" value={values.projectType} onChange={event=>update("projectType",event.target.value)} required aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined}><option value="">Choose a conversation</option>{["Build a product","AI or automation","Business software","Mobile or connected hardware","Collaboration or opportunity","Just saying hello"].map(topic=><option key={topic}>{topic}</option>)}</select>{errors.projectType && <p className="hello-error" id="projectType-error">{errors.projectType}</p>}</div>
    <div className="hello-field"><label htmlFor="message">Tell me a little about it<span>Required</span></label><textarea id="message" name="message" rows={6} maxLength={4000} value={values.message} onChange={event=>update("message",event.target.value)} placeholder="What are you working on? What needs to get better? A rough idea is absolutely fine." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-hint"} required /><div className="hello-field__hint"><span id="message-hint">The goal, the challenge, and any useful constraints.</span><span>{values.message.length}/4000</span></div>{errors.message && <p className="hello-error" id="message-error">{errors.message}</p>}</div>
    <button className="hello-form__submit" type="submit">PREPARE MY MESSAGE <ArrowUpRight size={21} aria-hidden="true" /></button>
    <p className="hello-form__privacy">{recipient ? "Review your draft, then open it in your email app to send. Nothing is sent automatically." : "Draft mode: you can prepare, copy, or download your message. Direct email delivery is not configured yet."} Your text stays in this page until you choose to share it.</p>
    {draft && <div className="hello-draft" ref={preview} tabIndex={-1} aria-label="Your message draft"><h3><Check size={20} aria-hidden="true" /> READY FOR YOUR REVIEW.</h3><pre>{draft}</pre><div className="hello-draft__actions">{mailto && <a href={mailto}>OPEN EMAIL APP <ArrowUpRight size={16} aria-hidden="true" /></a>}<button type="button" onClick={copy}><Copy size={16} aria-hidden="true" />Copy</button><button type="button" onClick={download}><Download size={16} aria-hidden="true" />Download</button></div></div>}
    <p className="hello-status" role="status">{status}</p>
  </form>;
}

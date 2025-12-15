'use client';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/emailjs';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  // Form usage has been removed in favor of direct WhatsApp and Facebook links.
  // This component is kept as a placeholder to avoid breaking imports if reintroduced later.
  return null;
}
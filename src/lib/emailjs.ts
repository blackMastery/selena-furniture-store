import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key

export async function sendEmail(data: { name: string; email: string; message: string }) {
  return emailjs.send(
    'YOUR_SERVICE_ID', // Replace with your service ID
    'YOUR_TEMPLATE_ID', // Replace with your template ID
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    }
  );
}
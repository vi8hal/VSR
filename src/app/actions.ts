'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(1, 'Subject is required.'),
  message: z.string().min(1, 'Message is required.'),
});

export async function sendMessage(formData: unknown) {
  const validatedFields = formSchema.safeParse(formData);

  if (!validatedFields.success) {
    console.error('Validation failed:', validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      error: 'VALIDATION FAILED. CHECK FIELDS.',
    };
  }
  
  const { name, email, subject, message } = validatedFields.data;

  console.log('Received Message:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);
  
  // Here you would typically send an email using a service like Resend, Nodemailer, etc.
  // For this example, we'll just log to the console and return success.

  return {
    success: true,
  };
}

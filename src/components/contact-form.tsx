'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendMessage } from '@/app/actions';
import { useState, useTransition } from 'react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(1, 'FILL_ALL_FIELDS'),
  email: z.string().email('INVALID_EMAIL'),
  subject: z.string().min(1, 'FILL_ALL_FIELDS'),
  message: z.string().min(1, 'FILL_ALL_FIELDS'),
});

type FormData = z.infer<typeof formSchema>;

const FormInput = ({
  label,
  name,
  placeholder,
  register,
  error,
}: {
  label: string;
  name: keyof FormData;
  placeholder: string;
  register: any;
  error?: string;
}) => (
  <div className="mb-3">
    <label className="block text-xs text-custom-text-dim tracking-[2px] mb-1.5">
      // {label}
    </label>
    <input
      {...register(name)}
      type="text"
      placeholder={placeholder}
      className={cn("w-full bg-primary/5 border border-custom-border text-custom-text font-body text-sm p-2 outline-none transition-colors duration-150 focus:border-custom-border-bright focus:shadow-[0_0_10px_rgba(0,255,65,0.08),_inset_0_0_10px_rgba(0,255,65,0.02)]",
        error && "border-custom-red"
      )}
    />
  </div>
);

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setFormMessage(null);
    startTransition(async () => {
      const result = await sendMessage(data);
      if (result.success) {
        setFormMessage({ type: 'success', text: '> MESSAGE_SENT ✓' });
        reset();
      } else {
        setFormMessage({ type: 'error', text: `> ERROR: ${result.error}` });
      }
    });
  };

  const getErrorMessage = () => {
    if (errors.name) return '> ERROR: NAME_REQUIRED';
    if (errors.email) return `> ERROR: ${errors.email.message}`;
    if (errors.subject) return '> ERROR: SUBJECT_REQUIRED';
    if (errors.message) return '> ERROR: MESSAGE_REQUIRED';
    return null;
  }

  const displayMessage = formMessage?.text || getErrorMessage() || (isPending ? '> TRANSMITTING...' : '> TRANSMIT_MESSAGE');
  const isError = (formMessage?.type === 'error' || !!getErrorMessage()) && !isPending;
  const isSuccess = formMessage?.type === 'success' && !isPending;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <FormInput label="IDENTIFY_YOURSELF" name="name" placeholder="Your name..." register={register} error={errors.name?.message} />
       <FormInput label="RETURN_ADDRESS" name="email" placeholder="your@email.com" register={register} error={errors.email?.message} />
       <FormInput label="SUBJECT" name="subject" placeholder="Job / Collab / Consulting / Other" register={register} error={errors.subject?.message} />

      <div className="mb-3">
        <label className="block text-xs text-custom-text-dim tracking-[2px] mb-1.5">
          // PAYLOAD
        </label>
        <textarea
          {...register('message')}
          placeholder="Describe your mission..."
          rows={4}
          className={cn("w-full bg-primary/5 border border-custom-border text-custom-text font-body text-sm p-2 outline-none transition-colors duration-150 focus:border-custom-border-bright focus:shadow-[0_0_10px_rgba(0,255,65,0.08),_inset_0_0_10px_rgba(0,255,65,0.02)] min-h-[90px] resize-vertical",
          errors.message && "border-custom-red"
          )}
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          'btn py-2 px-5 border text-[0.72rem] font-body tracking-[2px] transition-all duration-150 no-underline inline-block',
          'border-primary text-primary text-shadow-green-glow hover:text-black hover:text-shadow-none hover:shadow-green',
          isPending && 'cursor-wait',
          isError && '!border-custom-red !text-custom-red',
          isSuccess && '!border-primary !text-primary'
        )}
      >
        {displayMessage}
      </button>
    </form>
  );
};

export default ContactForm;

import SectionHeader from '@/components/section-header';
import { CONTACT_INFO, CONTACT_INTRO } from '@/lib/data';
import Link from 'next/link';
import ContactForm from '../contact-form';

const ContactInfo = () => (
  <div>
    <div className="text-custom-text-dim text-[0.72rem] leading-loose mb-3.5 space-y-1">
      {CONTACT_INTRO.map((line, i) => <p key={i}>{line}</p>)}
    </div>
    {CONTACT_INFO.map((item) => (
      <div
        key={item.label}
        className="flex items-start gap-2.5 py-2 border-b border-primary/10"
      >
        <span className="text-primary text-sm w-4.5 text-center flex-shrink-0 mt-0.5">
          {item.icon}
        </span>
        <div>
          <div className="text-xs text-custom-text-dim tracking-[1px]">
            {item.label}
          </div>
          <div className="text-custom-text text-sm">
            {item.href ? (
                 <Link href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">{item.value}</Link>
            ) : (
                item.value
            )}
           
            {item.sub && <span className="text-custom-text-dim text-xs ml-1">{item.sub}</span>}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-6 border-t border-primary/5">
      <div className="container">
        <SectionHeader num="04" tag="ESTABLISH_CONNECTION" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import siteContent from "@/data/site-content.json";
import { PageHero } from "@/components/blocks/PageHero";
import { ContactForm } from "@/components/blocks/ContactForm";
import { StrongCtaSection } from "@/components/blocks/StrongCtaSection";

const { contact } = siteContent;

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHero title={contact.hero.title} subtitle={contact.hero.subtitle} />
      <section className="app-container grid gap-6 py-10 lg:grid-cols-[1fr,1fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-brand-navy">即时渠道</h2>
          <ul className="space-y-3 text-sm text-brand-navy/80">
            {contact.channels.map((channel) => (
              <li key={channel.label} className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-brand-gold" aria-hidden />
                <span>
                  <strong className="font-semibold text-brand-navy">{channel.label}</strong>
                  <br />
                  {channel.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </section>
      <StrongCtaSection
        title={contact.cta.title}
        description={contact.cta.description}
        button={contact.cta.button}
        href="/contact#form"
      />
    </div>
  );
}

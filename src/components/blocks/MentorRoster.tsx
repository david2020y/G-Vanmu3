import { Card, CardContent } from "@/components/ui/card";

type Mentor = {
  name: string;
  title: string;
  bio: string;
};

type MentorRosterProps = {
  mentors: Mentor[];
};

export function MentorRoster({ mentors }: MentorRosterProps) {
  if (!mentors?.length) return null;
  return (
    <section className="app-container grid gap-6 py-10 md:grid-cols-3">
      {mentors.map((mentor) => (
        <Card
          key={mentor.name}
          className="rounded-3xl border border-brand-navy/10 bg-white/95 shadow-soft"
        >
          <CardContent className="space-y-3 p-6">
            <div className="size-12 rounded-full bg-brand-navy/10" aria-hidden />
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">{mentor.name}</h3>
              <p className="text-sm text-brand-navy/60">{mentor.title}</p>
            </div>
            <p className="text-sm text-brand-navy/70">{mentor.bio}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

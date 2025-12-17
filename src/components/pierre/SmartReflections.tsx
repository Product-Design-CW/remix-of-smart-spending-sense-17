import { SmartReflection } from '@/types/pierre';
import { Sparkles } from 'lucide-react';

interface SmartReflectionsProps {
  reflections: SmartReflection[];
}

const SmartReflections = ({ reflections }: SmartReflectionsProps) => {
  return (
    <section className="opacity-0 animate-fade-up delay-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-primary" />
        <h2 className="font-serif text-xl">O que o Pierre notou</h2>
      </div>

      <div className="space-y-4">
        {reflections.map((reflection, i) => (
          <div
            key={reflection.id}
            className="bg-card rounded-xl p-5 shadow-soft border-l-2 border-primary/40"
          >
            <p className="text-foreground/90 leading-relaxed font-medium">
              "{reflection.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartReflections;

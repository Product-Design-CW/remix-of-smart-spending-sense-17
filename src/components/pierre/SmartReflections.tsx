import { SmartReflection } from '@/types/pierre';
import { Sparkles } from 'lucide-react';

interface SmartReflectionsProps {
  reflections: SmartReflection[];
}

const SmartReflections = ({ reflections }: SmartReflectionsProps) => {
  return (
    <section className="">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-serif text-xl">O que o Pierre notou</h2>
      </div>

      <div className="space-y-4">
        {reflections.map((reflection, i) => (
          <div
            key={reflection.id}
            className="rounded-[24px] p-5 border"
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

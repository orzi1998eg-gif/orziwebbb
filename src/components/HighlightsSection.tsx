import { Star, Info, Clock, Sparkles } from 'lucide-react';

export interface HighlightItem {
  id: string;
  title: string;
  icon: 'reviews' | 'info' | 'products' | 'upcoming';
  action: 'modal' | 'link';
  storyId?: string;
  link?: string;
}

const highlights: HighlightItem[] = [
  { id: 'reviews', title: 'آراء', icon: 'reviews', action: 'modal', storyId: 'reviews' },
  { id: 'info', title: 'أُورزي ١٩٩٨', icon: 'info', action: 'modal', storyId: 'info' },
  { id: 'products', title: 'منتجات حالية', icon: 'products', action: 'link', link: 'https://www.orzi-1998.shop/bracelets' },
  { id: 'upcoming', title: 'إصدارات قادمة', icon: 'upcoming', action: 'modal', storyId: 'upcoming' },
];

const iconMap = {
  reviews: Star,
  info: Info,
  products: Clock,
  upcoming: Sparkles,
};

interface HighlightsSectionProps {
  onStoryOpen: (storyId: string) => void;
}

export default function HighlightsSection({ onStoryOpen }: HighlightsSectionProps) {
  const handleClick = (h: HighlightItem) => {
    if (h.action === 'link' && h.link) {
      window.open(h.link, '_blank', 'noopener,noreferrer');
    } else if (h.action === 'modal' && h.storyId) {
      onStoryOpen(h.storyId);
    }
  };

  return (
    <section
      className="py-20 md:py-32"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f5f0e8 100%)' }}
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase text-[#243247] mb-4"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em', opacity: 0.4 }}
          >
            Highlights
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#243247]"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            استكشف عالم ORZI
          </h2>
          <div className="w-12 h-px bg-[#243247] opacity-20 mx-auto mt-6" />
        </div>

        {/* Horizontal scroll container */}
        <div
          className="flex gap-6 md:gap-12 justify-center items-start overflow-x-auto pb-4 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <style>{`
            .highlights-scroll::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="highlights-scroll flex gap-6 md:gap-12 justify-center items-start" style={{ minWidth: 'min-content' }}>
            {highlights.map((h) => {
              const Icon = iconMap[h.icon];
              return (
                <button
                  key={h.id}
                  onClick={() => handleClick(h)}
                  className="flex flex-col items-center gap-4 group flex-shrink-0"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  {/* Gradient ring circle */}
                  <div
                    className="relative rounded-full transition-all duration-500 group-hover:scale-110"
                    style={{
                      width: '96px',
                      height: '96px',
                      padding: '3px',
                      background: 'linear-gradient(135deg, #243247 0%, #c9a94f 50%, #243247 100%)',
                      boxShadow: '0 4px 20px rgba(36, 50, 71, 0.15)',
                      animation: 'highlightPulse 3s ease-in-out infinite',
                    }}
                  >
                    {/* Inner circle */}
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        background: 'linear-gradient(160deg, #f5f0e8 0%, #e7ddcc 100%)',
                        border: '2px solid rgba(255,255,255,0.6)',
                      }}
                    >
                      <Icon
                        size={32}
                        className="text-[#243247] transition-transform duration-500 group-hover:scale-110"
                        style={{ opacity: 0.85 }}
                      />
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: '0 0 24px rgba(201, 169, 79, 0.35)',
                      }}
                    />
                  </div>

                  {/* Label */}
                  <span
                    className="text-sm font-semibold text-[#243247] transition-all duration-300 group-hover:opacity-100"
                    style={{
                      fontFamily: "'Amiri', serif",
                      opacity: 0.7,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {h.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import Hero from './components/Hero/Hero';
import HighlightsSection from './components/HighlightsSection';
import StoryModal, { StoryGroup } from './components/StoryModal';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const storyGroups: StoryGroup[] = [
  {
    id: 'reviews',
    title: 'آراء',
    slides: [
      { image: '/rev1.jpg' },
      { image: '/rev2.jpg' },
      { image: '/rev3.jpg' },
    ],
  },
  {
    id: 'info',
    title: 'أُورزي ١٩٩٨',
    slides: [
      { image: '/orziinfo.jpg' },
    ],
  },
  {
    id: 'upcoming',
    title: 'إصدارات قادمة',
    slides: [
      { image: '/pants.jpg' },
      { image: '/watch.jpg' },
      { image: '/shoes.jpg' },
    ],
  },
];

function App() {
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const handleStoryOpen = (storyId: string) => {
    const idx = storyGroups.findIndex((s) => s.id === storyId);
    if (idx >= 0) {
      setActiveStoryIndex(idx);
      setStoryModalOpen(true);
    }
  };

  const handleHeroExplore = () => {
    const el = document.getElementById('highlights');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white" dir="ltr">
      <main>
        <Hero onStoryClick={handleHeroExplore} />

        <div id="highlights">
          <HighlightsSection onStoryOpen={handleStoryOpen} />
        </div>
      </main>

      <Footer />

      <StoryModal
        stories={storyGroups}
        initialStoryIndex={activeStoryIndex}
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
      />

      <WhatsAppButton />
    </div>
  );
}

export default App;

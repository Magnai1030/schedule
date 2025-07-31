import { useState } from 'react';
import { schedule } from '../data/schedule';
import ScheduleItem from '../components/ScheduleItem';
import GiftPopup from '../components/GiftPopup';

export default function Home() {
  const [showGift, setShowGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');

  const handleGiftClick = (message: string) => {
    setGiftMessage(message);
    setShowGift(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-6xl font-bold text-center mb-2">🐟   ЗАГАС 2025   🐟</h1>
        <h1 className="text-1xl font-bold text-center mb-20 text-gray-400">Sat 09-10 Aug 2025</h1>

        {schedule.map((item, i) => (
          <ScheduleItem
            key={i}
            time={item.time}
            text={item.text}
            color={item.color}
            special={item.special}
            onGiftClick={() => item.special && item.giftMessage && handleGiftClick(item.giftMessage)}
          />
        ))}
      </div>

      {showGift && (
        <GiftPopup message={giftMessage} onClose={() => setShowGift(false)} />
      )}
    </main>
  );
}
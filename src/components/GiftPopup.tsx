import { FC, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface GiftPopupProps {
  onClose: () => void;
  message: string;
}

const GiftPopup: FC<GiftPopupProps> = ({ onClose, message }) => {
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-xl p-6 shadow-xl animate-scale-in relative">
        <p className="text-black font-semibold text-center text-lg">🎁 {message}</p>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GiftPopup;
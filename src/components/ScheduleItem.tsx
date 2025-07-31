import { FC } from 'react';

interface Props {
  time: string;
  text: string;
  color: string;
  special?: boolean;
  onGiftClick?: () => void;
}

const ScheduleItem: FC<Props> = ({ time, text, color, special, onGiftClick }) => {
  return (
    <div className="relative flex items-start gap-4">
      {/* Time Bubble */}
      <div className="min-w-[100px] text-center relative z-10 bg-white rounded-2xl">
        <div className="bg-white text-black font-bold text-xs px-4 py-3 rounded-lg shadow-lg">
          {time}
        </div>
        <div className="w-3 h-3 bg-white absolute top-1/2 -right-2 transform -translate-y-1/2 -translate-x-1 rotate-45" />
      </div>

      {/* Event Box */}
      <div
        className={`flex-1 p-4 text-white rounded-xl shadow-lg bg-gradient-to-r ${color} transition-transform relative`}
      >
        <p className="text-base font-semibold pr-10">{text}</p>

        {special && (
          <button
            onClick={onGiftClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xl hover:scale-125 transition-transform"
            aria-label="Open gift"
          >
            🎁
          </button>
        )}
      </div>
    </div>
  );
};

export default ScheduleItem;
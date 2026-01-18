interface AdPlaceholderProps {
  type: 'leaderboard' | 'rectangle' | 'skyscraper';
  className?: string;
}

export function AdPlaceholder({ type, className = '' }: AdPlaceholderProps) {
  const dimensions = {
    leaderboard: { width: '728px', height: '90px', label: '728 × 90' },
    rectangle: { width: '300px', height: '250px', label: '300 × 250' },
    skyscraper: { width: '160px', height: '600px', label: '160 × 600' }
  };

  const { width, height, label } = dimensions[type];

  return (
    <div className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg ${className}`} 
         style={{ width: type === 'leaderboard' ? '100%' : width, height, maxWidth: width, margin: type === 'leaderboard' ? '0 auto' : undefined }}>
      <div className="text-center">
        <p className="text-gray-500 text-sm mb-1">AdSense Ad Space</p>
        <p className="text-gray-400 text-xs">{label}</p>
      </div>
    </div>
  );
}

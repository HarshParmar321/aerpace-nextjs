'use client';

import Link from 'next/link';

const StockTicker: React.FC = () => {
  return (
    <div className="bg-[#2b2b2b] text-white text-sm border-b border-blue-500 px-4 py-[6px]">
      <div className="flex justify-center items-center gap-6 flex-wrap text-gray-300 font-medium">

        {/* Left Static Info */}
        <span className="opacity-80">
          Aerpace is a listed company on BSE Market.
        </span>

        {/* Stock Info */}
        <div className="w-full max-w-[600px]">
        <iframe
          src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22aerpace%22%2C%22proName%22%3A%22BSE%3AAERPACE%22%7D%5D%2C%22showSymbolLogo%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%7D"
          width="100%"
          height="44"
          style={{ border: 'none', overflow: 'hidden' }}
          title="Aerpace Stock Ticker"
          loading="lazy"
        />
      </div>

        {/* Learn More Link */}
        <Link href="/investors" className="text-blue-500 font-bold hover:underline">
          LEARN MORE
        </Link>
      </div>
    </div>
  );
};

export default StockTicker;


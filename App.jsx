import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f2ec] text-gray-900 relative overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.45)_0%,rgba(220,220,220,0.08)_100%)]" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-16">
        <section className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">Живое стекло</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Набор свечей «Живое стекло» — эстетика, которая остается с вами на годы.
            Стеклянная текстура, сформированная вручную, напоминает природные кристаллы,
            заключающие в себе мягкое пламя.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <img src="/images/candle1.jpg" className="rounded-3xl object-cover w-full" />
            <img src="/images/candle2.jpg" className="rounded-3xl object-cover w-full" />
          </div>

          <a
            href="https://vk.com/ip_candles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl shadow-lg"
          >
            Заказать свой аромат
          </a>
        </section>

        <section className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <h2 className="text-3xl font-light text-center mb-4">Видео</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Созданная вручную из стеклянной крошки и залитая натуральным пальмовым воском,
            свеча образует уникальный кристаллический узор на поверхности.
          </p>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <video controls playsInline className="rounded-2xl w-full" src="/video/product-video-vertical.mp4" />
            <video controls playsInline className="rounded-2xl w-full" src="/video/product-video.mp4" />
          </div>
        </section>

        <section className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <h2 className="text-3xl font-light mb-8 text-center">Семейный очаг ручной работы, который станет частью вашей истории</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/gallery1.jpg" className="aspect-[3/4] object-cover rounded-2xl" />
            <img src="/images/gallery2.jpg" className="aspect-[3/4] object-cover rounded-2xl" />
            <img src="/images/gallery3.jpg" className="aspect-[3/4] object-cover rounded-2xl" />
            <img src="/images/gallery4.jpg" className="aspect-[3/4] object-cover rounded-2xl" />
          </div>
        </section>

        <footer className="border-t border-[#e8e4de] pt-10 text-sm text-gray-500 space-y-3">
          <p>Самозанятая: Петкогло Ирина Федоровна</p>
          <p>ИНН: 402806174487</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="underline">Публичная оферта</a>
            <a href="#" className="underline">Политика конфиденциальности</a>
            <a href="#" className="underline">Пользовательское соглашение</a>
            <a href="#" className="underline">Реквизиты продавца</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

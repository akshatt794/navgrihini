// src/pages/Landing.tsx
import React from 'react';
import Banner from '../components/Banner';
import VideoBanner from '../components/VideoBanner';
import NewArrivalsCarousel from '../components/NewArrivalsCarousel';
import InstagramGrid from '../components/InstagramGrid';
import CategoriesSection from '../components/CategoriesSection';
import HomeCollectionSection from '../components/HomeCollectionSection';
import FAQSection from '../components/FAQSection';

export default function Landing() {
  return (
    <main className="space-y-24">
      {/* HERO BANNER */}
      <section>
        <Banner />
      </section>

      {/* VIDEO BANNER */}
      <section>
        <VideoBanner />
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-20 px-5 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12">New Arrivals</h2>
        <NewArrivalsCarousel />
      </section>

      {/* INSTAGRAM FEED */}
      <section className="py-20 px-5 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-12">Styled by You</h2>
        <InstagramGrid />
      </section>

      {/* SHOP BY CATEGORIES */}
      <section className="py-20 px-5">
        <h2 className="text-4xl font-semibold text-center mb-12">Shop by Categories</h2>
        <CategoriesSection />
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-20 bg-gray-50 px-5">
        <h2 className="text-4xl font-semibold text-center mb-12">Our Collection</h2>
        <HomeCollectionSection />
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-white px-5">
        <h2 className="text-4xl font-semibold text-center mb-12">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            ["Amazing quality and fast shipping — I’ll be back!", "Priya"],
            ["The fit is perfect, exactly as described.", "Rohit"],
            ["Loved the packaging and presentation. Would definitely recommend!", "Anjali"],
            ["Super stylish and fits like a dream.", "Meera"],
            ["Impressed with their customer service and delivery.", "Arjun"]
          ].map(([quote, author], idx) => (
            <blockquote
              key={idx}
              className="w-[300px] p-6 bg-gray-100 rounded-xl shadow-md text-lg italic"
            >
              “{quote}”
              <cite className="block mt-4 text-right font-medium text-secondaryBrown">— {author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SUBSCRIPTION */}
      <section className="py-20 bg-gray-100 px-5 text-center">
        <h2 className="text-4xl font-semibold mb-4">Stay in the Loop</h2>
        <p className="mb-8 text-lg text-gray-700">
          Join our newsletter for exclusive deals and the latest trends!
        </p>
        <form className="flex justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email"
            className="flex-1 px-4 py-3 rounded-l-md border border-gray-300"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-secondaryBrown text-white font-medium rounded-r-md hover:bg-brown-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-5 bg-gray-50">
        <FAQSection />
      </section>
    </main>
  );
}

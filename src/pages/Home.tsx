import VideoBanner from '../components/VideoBanner';
import VideoCard from '../components/VideoCard';
import clips from '../data/clips';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* 1. Hero Video */}
      <VideoBanner />

      {/* 2. Featured Clips */}
      <section className="py-16 px-5">
        <h2 className="text-4xl text-center mb-8">Featured Clips</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {clips.map(c => (
            <VideoCard
              key={c.title}
              title={c.title}
              src={c.src}
              thumbnail={c.thumbnail}
            />
          ))}
        </div>
      </section>

      {/* 3. Your existing Product Grid */}
      <section className="py-16 px-5 bg-gray-50">
        <h2 className="text-4xl text-center mb-8">Our Collection</h2>
        <ProductGrid /* pass your products in as before */ />
      </section>

      {/* 4. Testimonials */}
      <section className="py-16 px-5">
        <h2 className="text-4xl text-center mb-8">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <blockquote className="w-[300px] p-6 bg-white rounded-xl shadow">
            “Amazing quality and fast shipping — I’ll be back!”
            <cite className="block mt-4 text-right text-gray-600">— Priya</cite>
          </blockquote>
          <blockquote className="w-[300px] p-6 bg-white rounded-xl shadow">
            “The fit is perfect, exactly as described.”
            <cite className="block mt-4 text-right text-gray-600">— Rohit</cite>
          </blockquote>
        </div>
      </section>

      {/* 5. Newsletter Signup */}
      <section className="py-16 px-5 bg-gray-100 text-center">
        <h2 className="text-4xl mb-4">Stay in the Loop</h2>
        <p className="mb-6">Join our newsletter for exclusive deals</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 border border-gray-400 rounded-l-md"
          />
          <button
            type="submit"
            className="bg-secondaryBrown text-white px-6 rounded-r-md"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-orange-600">DogFood</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-orange-600">About</a></li>
          <li><a href="#nutrition" className="hover:text-orange-600">Nutrition</a></li>
          <li><a href="#probiotics" className="hover:text-orange-600">Probiotics</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        <button className="hidden md:block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
          Get Started
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-gray-700 font-medium">
          <a href="#about" className="block hover:text-orange-600">About</a>
          <a href="#nutrition" className="block hover:text-orange-600">Nutrition</a>
          <a href="#probiotics" className="block hover:text-orange-600">Probiotics</a>
          <a href="#contact" className="block hover:text-orange-600">Contact</a>
          <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
            Get Started
          </button>
        </div>
      )}

      {/* Section 1: What makes us different */}
      <section id="about" className="text-center py-12 px-6">
      <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mt-2">
      What makes us different
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mt-2">
          makes them stronger
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
          <div className="text-center">
            <p className="font-semibold">Real Food</p>
            <p className="text-gray-600 text-sm">Wholesome recipes for dogs with real meat and veggies.</p>
          </div>
          <Image
            src="/dog-food.png"
            alt="Dog Food"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
          <div className="text-center">
            <p className="font-semibold">Made Fresh</p>
            <p className="text-gray-600 text-sm">We priotize maintaining the integrity of whole foods and nutrition.</p>
          </div>
     

       
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
          <div className="text-center">
            <p className="font-semibold">Premium Ingredients</p>
            <p className="text-gray-600 text-sm">Elevating pet care with unmatched safety and quality.</p>
          </div>
         
          <div className="text-center">
            <p className="font-semibold">Vet Developed</p>
            <p className="text-gray-600 text-sm">We raise the bar for dog nutrition, suprpasing industry expectations.</p>
          </div>
       
      </section>

      {/* Section 2: Nutrition Foundation */}
      <section id="nutrition" className="bg-gray-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h2>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔️ 84% increased vitality</li>
            <li>✔️ 82% healthier coats</li>
            <li>✔️ 80% improved digestion</li>
            <li>✔️ 86% stronger immunity</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image src="/dog.png" alt="Dog" width={350} height={350} className="rounded-lg" />
        </div>
      </section>

      {/* Section 3: Improve Gut Health */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image src="/dogs-eating.png" alt="Dogs Eating" width={400} height={300} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Improve overall gastrointestinal health for better nutrient absorption
          </h2>
          <p className="text-gray-600 mt-4">
            Our special blend improves nutrient uptake, ensuring your dog gets
            the maximum benefits from every bite.
          </p>
        </div>
      </section>

      {/* Section 4: Probiotics */}
      <section id="probiotics" className="bg-gray-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Probiotics nourish the beneficial gut bacteria, supporting digestive health
          </h2>
          <p className="text-gray-600 mt-4">
            A healthy gut microbiome keeps digestion smooth and helps build
            strong immunity.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/dog-food-closeup.png" alt="Dog Food Closeup" width={350} height={350} className="rounded-lg" />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20 mt-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white">DogFood</h3>
            <p className="mt-2 text-sm">
              Premium nutrition for your furry friends. Backed by science, loved by dogs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#nutrition" className="hover:text-white">Nutrition</a></li>
              <li><a href="#probiotics" className="hover:text-white">Probiotics</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <p className="mt-2 text-sm">Email: support@dogfood.com</p>
            <p className="text-sm">Phone: +234 800 123 4567</p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} DogFood. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

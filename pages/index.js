import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-orange-600">DogFood</div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-orange-600">About</a></li>
          <li><a href="#nutrition" className="hover:text-orange-600">Nutrition</a></li>
          <li><a href="#probiotics" className="hover:text-orange-600">Probiotics</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
        </ul>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">{menuOpen ? '✖' : '☰'}</span>
        </button>
        <button className="hidden md:block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
          Get Started
        </button>
      </nav>

      {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section id="about" className="text-center py-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
          What makes us different <br /> makes them stronger
        </h1>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="flex flex-col items-center">
            <Image src="/icon-paw.png" alt="Raw Food" width={40} height={40} />
            <p className="font-semibold mt-2">Raw Food</p>
            <p className="text-sm text-gray-600 text-center">We source the best cuts of meat and seasonal veggies.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icon-leaf.png" alt="Whole Foods" width={40} height={40} />
            <p className="font-semibold mt-2">Whole Foods</p>
            <p className="text-sm text-gray-600 text-center">No synthetic additives. Just human-grade food.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icon-clipboard.png" alt="Formulated by Experts" width={40} height={40} />
            <p className="font-semibold mt-2">Formulated by Experts</p>
            <p className="text-sm text-gray-600 text-center">Meals crafted by vet nutritionists.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icon-microscope.png" alt="Tested and Trusted" width={40} height={40} />
            <p className="font-semibold mt-2">Tested and Trusted</p>
            <p className="text-sm text-gray-600 text-center">Lab-tested for quality and nutrition.</p>
          </div>
        </div>

        {/* Bowl Image */}
        <div className="flex justify-center mt-12">
          <Image src="/dog-food.png" alt="Dog Food Bowl" width={300} height={300} className="rounded-full shadow-lg" />
        </div>

        {/* CTA Button */}
        <button className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 text-lg">
          Get your dog’s healthy meal today!
        </button>

        {/* Payment Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <Image src="/visa.png" alt="Visa" width={40} height={25} />
          <Image src="/mastercard.png" alt="Mastercard" width={40} height={25} />
          <Image src="/amex.png" alt="Amex" width={40} height={25} />
          <Image src="/paypal.png" alt="PayPal" width={40} height={25} />
        </div>
      </section>

      {/* Nutrition Section */}
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

      {/* Gut Health Section */}
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

      {/* Probiotics Section */}
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
              <li><a href="#contact" className="hover:text-white">Contact</a></li

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
          <li><a href="#gut" className="hover:text-orange-600">Gut Health</a></li>
          <li><a href="#prebiotics" className="hover:text-orange-600">Prebiotics</a></li>
        </ul>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">{menuOpen ? "✖" : "☰"}</span>
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
          <a href="#gut" className="block hover:text-orange-600">Gut Health</a>
          <a href="#prebiotics" className="block hover:text-orange-600">Prebiotics</a>
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

        {/* Ingredients */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="flex flex-col items-center">
            <Image src="/wild-trout.png" alt="Wild Trout" width={60} height={60} />
            <p className="font-semibold mt-2">Wild Trout</p>
            <p className="text-sm text-gray-600 text-center">
              High-quality protein to support strong, lean muscles.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/pumpkin.png" alt="Pumpkin" width={60} height={60} />
            <p className="font-semibold mt-2">Pumpkin Superfood</p>
            <p className="text-sm text-gray-600 text-center">
              Supports healthy digestion with natural fiber.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/prebiotics.png" alt="Prebiotics" width={60} height={60} />
            <p className="font-semibold mt-2">Prebiotics</p>
            <p className="text-sm text-gray-600 text-center">
              Support beneficial gut bacteria for digestive health.
            </p>
          </div>
        </div>

        {/* Bowl Image */}
        <div className="flex justify-center mt-12">
          <Image src="/bowl.png" alt="Dog Food Bowl" width={300} height={300} className="rounded-full shadow-lg" />
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition" className="bg-gray-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h2>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li><strong>82%</strong> of pet parents say their dog’s health is extremely important.</li>
            <li><strong>84%</strong> say their dog’s nutrition is extremely important.</li>
            <li><strong>81%</strong> say their dog’s food is extremely important.</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image src="/dog-with-bag.png" alt="Dog with Bag" width={350} height={350} className="rounded-lg" />
        </div>
      </section>

      {/* Gut Health Section */}
      <section id="gut" className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
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

      {/* Prebiotics Section */}
      <section id="prebiotics" className="bg-gray-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive health
          </h2>
          <p className="text-gray-600 mt-4">
            A healthy gut microbiome keeps digestion smooth and helps build
            strong immunity.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/kibble-closeup.png" alt="Dog Food Closeup" width={350} height={350} className="rounded-lg" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20 mt-16">
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
              <li><a href="#gut" className="hover:text-white">Gut Health</a></li>
              <li><a href="#prebiotics" className="hover:text-white">Prebiotics</a></li>
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
      </

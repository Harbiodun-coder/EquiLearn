
import { Link } from "react-router-dom";
import { AiOutlineUsergroupAdd, AiOutlineVideoCamera, AiOutlineTeam } from "react-icons/ai";

export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-28 px-6 text-center overflow-hidden">
        {/* Optional background illustration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="400" fill="white" />
          </svg>
        </div>

        <h1 className="relative text-4xl md:text-6xl font-extrabold mb-6">
          Inclusive Learning, Anywhere, Anytime
        </h1>
        <p className="relative text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Empowering students with disabilities and learners in remote areas through accessible online education.
        </p>
        <div className="relative flex justify-center space-x-4">
          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About EquiLearn</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          EquiLearn bridges the gap in education by providing accessible online learning for students with disabilities and those living in remote areas. 
          Our mission is to make quality education inclusive, engaging, and available for all.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <AiOutlineUsergroupAdd className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Accessibility Tools</h3>
            <p className="text-gray-600 text-center">
              Screen readers, captions, and adaptive interfaces for inclusive learning.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <AiOutlineVideoCamera className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Remote Learning</h3>
            <p className="text-gray-600 text-center">
              Access recorded and live classes anywhere, anytime.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <AiOutlineTeam className="text-purple-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Collaboration</h3>
            <p className="text-gray-600 text-center">
              Connect with teachers and peers in an interactive environment.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-blue-600 text-5xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Register</h3>
            <p className="text-gray-600">Sign up as a student or teacher to begin your journey.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-green-500 text-5xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Login</h3>
            <p className="text-gray-600">Securely log in with your credentials to access your dashboard.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-purple-500 text-5xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
            <p className="text-gray-600">Access courses, interact, and learn at your own pace.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4 italic">
              "EquiLearn has made it possible for me to learn despite my hearing challenges. The captions are a game-changer!"
            </p>
            <p className="font-semibold text-right">– Amina, Student</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4 italic">
              "Teaching students in remote villages has never been this easy. EquiLearn bridges the gap beautifully."
            </p>
            <p className="font-semibold text-right">– Mr. Okafor, Teacher</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 text-center">
        <p className="mb-2">© 2025 EquiLearn. All rights reserved.</p>
        <p>
          <Link to="/about" className="underline hover:text-gray-200">About</Link> | 
          <Link to="/contact" className="underline hover:text-gray-200 ml-2">Contact</Link>
        </p>
      </footer>

    </div>
  );
}

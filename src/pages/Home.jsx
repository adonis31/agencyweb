
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black text-white font-sans"
    >
      <section className="min-h-screen flex items-center justify-center text-center px-8">
        <div>
          <h1 className="text-[14vw] leading-none font-extrabold tracking-tight">ROVER</h1>
          <p className="mt-6 text-xl max-w-xl mx-auto text-gray-400">
            Creative digital studio building bold brands & immersive websites.
          </p>
        </div>
      </section>
      
      <section className="py-32 px-8 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-8">Our Capabilities</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 border rounded-xl shadow">Brand Strategy</div>
          <div className="p-6 border rounded-xl shadow">UI/UX Design</div>
          <div className="p-6 border rounded-xl shadow">Web Development</div>
          <div className="p-6 border rounded-xl shadow">Motion & Interaction</div>
        </div>
      </section>

      <section className="py-32 px-8 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Selected Work</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 h-48 rounded-lg">Project 1</div>
          <div className="bg-gray-800 h-48 rounded-lg">Project 2</div>
          <div className="bg-gray-800 h-48 rounded-lg">Project 3</div>
        </div>
      </section>

      <footer className="py-16 text-center bg-black text-white">
        <p className="text-gray-500">© 2025 Rover Clone. Built with React & Tailwind CSS.</p>
      </footer>
    </motion.div>
  );
}

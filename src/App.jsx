import { useState, useCallback } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import About from './components/About'
import Statistics from './components/Statistics'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onLoaderComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Loader onComplete={onLoaderComplete} />

      <StructuredData />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[#0B0B0B] text-white min-h-screen"
          >
            <Navbar />
            <Hero />
            <FeaturedWork />
            <About />
            <Statistics />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

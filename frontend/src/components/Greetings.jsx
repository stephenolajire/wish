import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Gift, Flower2 } from "lucide-react";

export default function BirthdayTribute() {
  const [flowers, setFlowers] = useState([]);

  const celebrate = () => {
    const newFlowers = Array.from({ length: 25 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      rotation: Math.random() * 360,
    }));
    setFlowers((prev) => [...prev, ...newFlowers]);
    setTimeout(() => {
      setFlowers((prev) =>
        prev.filter((f) => !newFlowers.find((nf) => nf.id === f.id))
      );
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-100 relative overflow-hidden">
      {/* Celebration flowers */}
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute text-pink-500 z-50"
          initial={{ top: "50%", left: `${flower.left}%`, opacity: 1 }}
          animate={{
            y: [0, -200],
            rotate: flower.rotation,
            opacity: [1, 0],
          }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <Flower2 size={32} fill="currentColor" />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Star className="text-yellow-500" size={32} fill="currentColor" />
            <Sparkles className="text-orange-500" size={28} />
            <Gift className="text-rose-500" size={32} />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 mb-4">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-amber-800 mb-2">
            Big Daddy
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="text-rose-500"
                size={20}
                fill="currentColor"
              />
            ))}
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400 rounded-3xl blur-2xl opacity-30"></div>
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-amber-200">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Birthday Celebration"
              className="w-full h-96 object-cover"
            />
          </div>
        </motion.div>

        {/* Tribute Message */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-10 border border-amber-200">
            <h3 className="text-3xl font-bold text-amber-900 mb-6 text-center">
              A Tribute to My Hero
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Every chapter of my life has been written with your guidance,
              every success carries your fingerprints, and every dream I've
              achieved has been nurtured by your unwavering support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              You’ve been more than just a father figure—you’ve been my mentor,
              my pillar of strength, and the architect of the person I am today.
            </p>
          </div>
        </motion.div>

        {/* Celebration Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button
            onClick={celebrate}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-xl hover:scale-110 active:scale-95 transform transition duration-300"
          >
            🎉 Celebrate 🎉
          </button>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?w=400",
            "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?w=400",
            "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=400",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={src}
                alt={`Memory ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Message */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 mb-4">
            Wishing you a day filled with joy, laughter, and all the love you’ve
            given me!
          </p>
          <p className="text-lg text-gray-700 font-medium">
            May this year bring you endless happiness and blessings. You deserve
            the world and more!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

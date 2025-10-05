import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  Sparkles,
  Gift,
  Flower2,
  Cake,
  Crown,
  Zap,
} from "lucide-react";

export default function BirthdayTribute() {
  const [isActive, setIsActive] = useState(false);

  const celebrate = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 4000);
  };

    useEffect(() => {
      const audio = new Audio(
        "https://loadedvibes.com.ng/wp-content/uploads/2025/08/Congratulations__Happy_Birthday_128k.mp3"
      );
      audio.loop = true;
      audio.volume = 1;
      audio.play().catch((err) => {
        console.warn("Audio play failed (browser autoplay policy):", err);
      });
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-70"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #ff006e 0%, #8338ec 50%, #3a86ff 100%)",
              "radial-gradient(circle at 80% 50%, #fb5607 0%, #ff006e 50%, #8338ec 100%)",
              "radial-gradient(circle at 50% 80%, #3a86ff 0%, #8338ec 50%, #ff006e 100%)",
              "radial-gradient(circle at 20% 50%, #ff006e 0%, #8338ec 50%, #3a86ff 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      </div>

      {/* Celebration Effects */}
      {isActive && (
        <>
          {Array.from({ length: 80 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full z-50"
              style={{
                background: [
                  "#ff006e",
                  "#fb5607",
                  "#ffbe0b",
                  "#8338ec",
                  "#3a86ff",
                ][i % 5],
                left: "50%",
                top: "50%",
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0.5, 0],
                x: (Math.random() - 0.5) * 1000,
                y: (Math.random() - 0.5) * 1000,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeOut",
                delay: Math.random() * 0.3,
              }}
            />
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute z-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                rotate: 360,
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2, delay: Math.random() * 0.5 }}
            >
              <Sparkles className="text-yellow-300" size={24} />
            </motion.div>
          ))}
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 0], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Crown
              className="text-yellow-400 mx-auto drop-shadow-[0_0_30px_rgba(250,204,21,0.8)]"
              size={100}
              fill="currentColor"
            />
          </motion.div>

          <div>
            <motion.h1
              className="text-8xl md:text-9xl font-black tracking-tight mb-4"
              style={{
                background:
                  "linear-gradient(to right, #ffbe0b, #fb5607, #ff006e, #8338ec, #3a86ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(255, 0, 110, 0.5))",
              }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              HAPPY
            </motion.h1>
            <motion.h1
              className="text-8xl md:text-9xl font-black tracking-tight"
              style={{
                background:
                  "linear-gradient(to left, #ffbe0b, #fb5607, #ff006e, #8338ec, #3a86ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(131, 56, 236, 0.5))",
              }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              BIRTHDAY
            </motion.h1>
          </div>

          <motion.div
            className="inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <h2 className="text-6xl md:text-7xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] px-8 py-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/20">
              BIG DADDY
            </h2>
          </motion.div>

          <div className="flex justify-center gap-3 flex-wrap">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
              >
                <Heart
                  className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]"
                  size={32}
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Image Section */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -inset-4 rounded-3xl opacity-75 blur-3xl"
            animate={{
              background: [
                "linear-gradient(45deg, #ff006e, #fb5607)",
                "linear-gradient(45deg, #fb5607, #ffbe0b)",
                "linear-gradient(45deg, #ffbe0b, #8338ec)",
                "linear-gradient(45deg, #8338ec, #ff006e)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Birthday Celebration"
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Tribute Card */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-1 rounded-3xl opacity-75 blur-2xl"
              animate={{
                background: [
                  "linear-gradient(135deg, #ff006e, #8338ec)",
                  "linear-gradient(135deg, #8338ec, #3a86ff)",
                  "linear-gradient(135deg, #3a86ff, #ff006e)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20">
              <div className="flex justify-center gap-4 mb-8">
                {[Star, Sparkles, Zap].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    <Icon
                      className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"
                      size={40}
                    />
                  </motion.div>
                ))}
              </div>

              <h3 className="text-5xl md:text-6xl font-black text-center mb-10 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                A TRIBUTE TO MY HERO
              </h3>

              <div className="space-y-6 text-center">
                <p className="text-2xl md:text-3xl text-white/95 leading-relaxed font-medium">
                  Every chapter of my life has been written with your guidance,
                  every success carries your fingerprints, and every dream I've
                  achieved has been nurtured by your unwavering support.
                </p>
                <p className="text-2xl md:text-3xl text-white/95 leading-relaxed font-medium">
                  You've been more than just a father figure—you've been my
                  mentor, my pillar of strength, and the architect of the person
                  I am today.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Celebrate Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={celebrate}
            className="relative group px-20 py-10 rounded-full text-4xl font-black text-white overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "linear-gradient(90deg, #ff006e, #fb5607, #ffbe0b)",
                  "linear-gradient(90deg, #ffbe0b, #8338ec, #3a86ff)",
                  "linear-gradient(90deg, #3a86ff, #ff006e, #fb5607)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(255,255,255,0.3) 50%, transparent 100%)",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center gap-4">
              🎉 CELEBRATE 🎉
            </span>
          </motion.button>
        </motion.div>

        {/* Responsive Photo Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            {
              src: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?w=600",
              color: "from-pink-500 to-purple-500",
            },
            {
              src: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?w=600",
              color: "from-yellow-500 to-orange-500",
            },
            {
              src: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=600",
              color: "from-blue-500 to-cyan-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -12,
                scale: 1.05,
                rotate: Math.random() > 0.5 ? 1 : -1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Glow Background */}
              <motion.div
                className={`absolute -inset-2 bg-gradient-to-br ${item.color} rounded-2xl opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl">
                <motion.img
                  src={item.src}
                  alt={`Memory ${i + 1}`}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-40 transition duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Message */}
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
              animate={{
                background: [
                  "linear-gradient(45deg, #ffbe0b, #ff006e)",
                  "linear-gradient(45deg, #ff006e, #8338ec)",
                  "linear-gradient(45deg, #8338ec, #ffbe0b)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20">
              <div className="flex justify-center gap-6 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <Star
                      className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"
                      size={36}
                      fill="currentColor"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-4xl md:text-5xl font-black mb-8 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Here's to many more memories, laughter, and moments of
                greatness.
              </motion.p>

              <p className="text-2xl md:text-3xl text-white/90 font-medium">
                With endless love, admiration, and gratitude — Happy Birthday,
                Big Daddy. ❤️
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

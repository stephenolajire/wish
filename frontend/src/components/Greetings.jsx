import React, { useState, useEffect } from "react";
import {
  Star,
  Trophy,
  GraduationCap,
  Sparkles,
  Heart,
  Award,
} from "lucide-react";
import styles from "./GraduationCelebration.module.css";

const GraduationCelebration = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [particles, setParticles] = useState([]);

  const congratulatoryMessages = [
    "🎓 Congratulations Gratitude! 🎓",
    "You did it! Your hard work paid off! 💪",
    "Welcome to the next chapter of your journey! 📚",
    "Your dedication has led to this amazing achievement! ⭐",
    "So proud of your academic success! 🌟",
    "The future is bright for you, graduate! ✨",
    "Your perseverance has brought you here! 🏆",
    "Cheers to your educational milestone! 🎉",
    "You've earned every bit of this celebration! 🎊",
    "Here's to new beginnings and endless possibilities! 🚀",
  ];

  // Generate confetti particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2,
          color: [
            "#FFD700",
            "#FF6B6B",
            "#4ECDC4",
            "#45B7D1",
            "#96CEB4",
            "#FFEAA7",
          ][Math.floor(Math.random() * 6)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    setShowConfetti(true);
  }, []);

  // Cycle through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % congratulatoryMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [congratulatoryMessages.length]);

  const handleCelebrationClick = () => {
    setShowConfetti(!showConfetti);
    // Regenerate particles for more celebration
    const newParticles = [];
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        color: [
          "#FFD700",
          "#FF6B6B",
          "#4ECDC4",
          "#45B7D1",
          "#96CEB4",
          "#FFEAA7",
        ][Math.floor(Math.random() * 6)],
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);
  };

  return (
    <div className={styles.container}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundParticles}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className={`${styles.floatingIcon} ${styles.topLeft}`}>
        <GraduationCap className={styles.iconLarge} />
      </div>
      <div className={`${styles.floatingIcon} ${styles.topRight}`}>
        <Trophy className={styles.iconMedium} />
      </div>
      <div className={`${styles.floatingIcon} ${styles.bottomLeft}`}>
        <Star className={styles.iconSmall} />
      </div>
      <div className={`${styles.floatingIcon} ${styles.bottomRight}`}>
        <Award className={styles.iconMedium} />
      </div>

      {/* Main Content */}
      <div className={styles.mainCard}>
        {/* Header with animated icon */}
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <GraduationCap className={styles.headerIconSvg} />
          </div>
          <h1 className={styles.title}>CONGRATULATIONS!</h1>
          <div className={styles.sparkleContainer}>
            <Sparkles className={`${styles.sparkle} ${styles.sparkle1}`} />
            <Heart className={`${styles.heart} ${styles.heartBounce}`} />
            <Sparkles className={`${styles.sparkle} ${styles.sparkle2}`} />
          </div>
        </div>

        {/* Animated Messages */}
        <div className={styles.messageContainer}>
          <p key={currentMessage} className={styles.message}>
            {congratulatoryMessages[currentMessage]}
          </p>
        </div>

        {/* Achievement Stats */}
        <div className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.statCard1}`}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Dedication</div>
          </div>
          <div className={`${styles.statCard} ${styles.statCard2}`}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>Possibilities</div>
          </div>
          <div className={`${styles.statCard} ${styles.statCard3}`}>
            <div className={styles.statNumber}>Latest</div>
            <div className={styles.statLabel}>Nursing Graduate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.callToAction}>
          <p className={styles.ctaText}>
            Your journey of learning and growth continues!
          </p>
          <p className={styles.ctaHighlight}>
            The world awaits your brilliance, Gratitude! ✨
          </p>
        </div>

        {/* Celebration Button */}
        <button
          className={styles.celebrationButton}
          onClick={handleCelebrationClick}
        >
          🎉 Celebrate More! 🎉
        </button>
      </div>
    </div>
  );
};

export default GraduationCelebration;

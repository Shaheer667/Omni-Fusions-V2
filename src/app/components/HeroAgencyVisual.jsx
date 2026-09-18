'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

function FloatingAsset({
  children,
  className,
  delay = 0,
  y = 10,
  rotate = 1.5,
  duration = 5
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`agencyHeroAsset ${className}`}
      initial={{
        opacity: 0,
        scale: 0.88,
        y: 22
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div
        className="agencyHeroAssetInner"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -y, 0],
                rotate: [0, rotate, 0]
              }
        }
        transition={{
          duration,
          delay: delay + 0.4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroAgencyVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="agencyHeroVisual"
      aria-label="Omni Fusions creative services — design, video and web development"
    >

      {/* subtle background glow */}
      <div
        className="agencyHeroGlow"
        aria-hidden="true"
      />


      {/* MAIN PERSON */}

      <motion.div
        className="agencyHeroWoman"
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 30
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 0.9,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.div
          className="agencyHeroWomanInner"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -6, 0]
                }
          }
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <Image
            src="/images/hero-agency/hero-woman.png"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 88vw, 620px"
          />
        </motion.div>
      </motion.div>


      {/* WEB DEVELOPMENT */}

      <FloatingAsset
        className="agencyAssetCode"
        delay={0.28}
        y={9}
        rotate={-1.5}
        duration={5.8}
      >
        <Image
          src="/images/hero-agency/hero-code.png"
          alt="Web development"
          fill
          sizes="240px"
        />
      </FloatingAsset>


      {/* VIDEO EDITING */}

      <FloatingAsset
        className="agencyAssetVideo"
        delay={0.38}
        y={12}
        rotate={1.4}
        duration={5.2}
      >
        <Image
          src="/images/hero-agency/hero-video.png"
          alt="Video editing"
          fill
          sizes="270px"
        />
      </FloatingAsset>


      {/* GRAPHIC / CREATIVE DESIGN */}

      <FloatingAsset
        className="agencyAssetDesign"
        delay={0.48}
        y={8}
        rotate={2}
        duration={4.8}
      >
        <Image
          src="/images/hero-agency/hero-design.png"
          alt="Creative design"
          fill
          sizes="150px"
        />
      </FloatingAsset>


      {/* GRAPHIC DESIGN / CONTENT */}

      <FloatingAsset
        className="agencyAssetGallery"
        delay={0.56}
        y={10}
        rotate={-1.2}
        duration={6}
      >
        <Image
          src="/images/hero-agency/hero-gallery.png"
          alt="Graphic design"
          fill
          sizes="210px"
        />
      </FloatingAsset>


      {/* DIGITAL GROWTH */}

      <FloatingAsset
        className="agencyAssetGrowth"
        delay={0.64}
        y={8}
        rotate={1.2}
        duration={5.5}
      >
        <Image
          src="/images/hero-agency/hero-growth.png"
          alt="Digital growth"
          fill
          sizes="220px"
        />
      </FloatingAsset>

    </div>
  );
}
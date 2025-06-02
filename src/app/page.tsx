"use client"

import { BlurSection } from "@/components/blur/blur-section";
import { CommunitySection } from "@/components/community/community-section";
import { ConvoSection } from "@/components/conversation/convo-section";
import { DesignSection } from "@/components/design/design-section";
import { FeelSection } from "@/components/feel/feel-section";
import { GhostSection } from "@/components/ghost/ghost-section";
import { HeroSection } from "@/components/hero/hero-section";
import { FooterSection } from "@/components/footer/footer-section";
import { NewSection } from "@/components/new/new-section";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setShowContent(true);
        }, 800);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);


  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1, 
                ease: "linear", 
                repeat: Infinity 
              }}
            >
              <Image 
                src="/logo.png" 
                alt="logo" 
                width={100} 
                height={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection/>
          <NewSection/>
          <FeelSection/>
          <BlurSection/>
          <ConvoSection/>
          <GhostSection/>
          <CommunitySection/>
          <DesignSection/>
          <FooterSection />
        </motion.div>
      )}
    </div>
  )
}

export default Page;
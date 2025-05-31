import { BlurSection } from "@/components/blur/blur-section";
import { CommunitySection } from "@/components/community/community-section";
import { ConvoSection } from "@/components/conversation/convo-section";
import { DesignSection } from "@/components/design/design-section";
import { FeelSection } from "@/components/feel/feel-section";
import { GhostSection } from "@/components/ghost/ghost-section";
import { HeroSection } from "@/components/hero/hero-section";
import { FooterSection } from "@/components/footer/footer-section";
import { NewSection } from "@/components/new/new-section";

const Page = () =>{
  return(
    <div>
      <HeroSection/>
      <NewSection/>
      <FeelSection/>
      <BlurSection/>
      <ConvoSection/>
      <GhostSection/>
      <CommunitySection/>
      <DesignSection/>
      <FooterSection/>
    </div>
  )
}

export default Page;
import HeroStyles from "styles/HeroStyles";

interface HeroProps {
  title: string;
  date?: string;
  subtitle?: string;
  backgroundImage?: string;
  isHome?: boolean;
  executeScroll?: () => void;
}

const Hero = ({ title, date, subtitle, backgroundImage, isHome = false, executeScroll }: HeroProps) => {
  return (
    <HeroStyles backgroundImage={backgroundImage ?? ""} isHome={isHome}>
      <div className="heroContent">
        <h1>{title}</h1>
        <h6>{date}</h6>
        <h4>{subtitle}</h4>
      </div>
      {executeScroll && <button type="button" className="heroScrollButton" onClick={() => executeScroll()}>Read more</button>}
    </HeroStyles>
  );
};

export default Hero;

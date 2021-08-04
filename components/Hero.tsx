import HeroStyles from "styles/HeroStyles";

interface HeroProps {
  title: string;
  date?: string;
  subtitle?: string;
  backgroundImage?: string;
  isHome?: boolean
}

const Hero = ({ title, date, subtitle, backgroundImage, isHome = false }: HeroProps) => {
  const scrollDown = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  return (
    <HeroStyles backgroundImage={backgroundImage ?? ""} isHome={isHome}>
      <div className="heroContent">
        <h1>{title}</h1>
        <h6>{date}</h6>
        <h4>{subtitle}</h4>
      </div>
      {isHome && <button type="button" className="heroScrollButton" onClick={() => scrollDown()}>Read more</button>}
    </HeroStyles>
  );
};

export default Hero;

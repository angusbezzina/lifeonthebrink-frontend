import HeroStyles from "styles/HeroStyles";

interface HeroProps {
  title: string;
  date?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Hero = ({ title, date, subtitle, backgroundImage }: HeroProps) => {
  return (
    <HeroStyles backgroundImage={backgroundImage ?? ""}>
      <div className="heroContent">
        <h1>{title}</h1>
        <h6>{date}</h6>
        <h4>{subtitle}</h4>
      </div>
    </HeroStyles>
  );
};

export default Hero;

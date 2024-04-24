interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-center text-xl font-bold mb-4">{text}</h1>;
};

export default Title;

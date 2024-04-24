interface IconWithTextProps {
  icon: string;
  text: string;
  style?: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon, text, style }) => {
  console.log(style);
  return (
    <div className="flex items-center gap-1">
      <img src={icon} alt={icon} />
      <span className={"text-xs " + style}>{text}</span>
    </div>
  );
};

export default IconWithText;

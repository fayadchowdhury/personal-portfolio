interface IconAnchorProps {
  buttonText: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const IconAnchor = ({ buttonText, Icon, href, onClick }: IconAnchorProps) => {
  return (
    <a className="icon-anchor" href={href} onClick={onClick}>
      <span className="text-content">{buttonText}</span>
      {Icon && (
        <div className="flex items-center justify-center">
          <Icon className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
        </div>
      )}
    </a>
  );
};

export default IconAnchor;

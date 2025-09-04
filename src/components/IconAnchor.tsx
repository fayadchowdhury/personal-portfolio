import { ComponentType } from "react";

interface IconAnchorProps {
  buttonText: string;
  Icon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

const IconAnchor = ({ buttonText, Icon, href }: IconAnchorProps) => {
  return (
    <a className="icon-anchor" href={href}>
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

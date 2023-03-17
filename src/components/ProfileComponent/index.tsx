import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

interface PopoverContentProps extends React.HTMLProps<HTMLButtonElement> {
  icon: IconType;
  title: string;
  isLogout?: boolean;
}

export function PopoverContent(props: PopoverContentProps) {
  return (
    <div className="flex items-center gap-3 hover:bg-gray-100 rounded-lg py-3 px-2">
      {<props.icon color={props.isLogout ? "#EB5757" : "#4F4F4F"} />}
      <span className={props.isLogout ? "text-logoutRed" : "text-textGray"}>
        {props.title}
      </span>
    </div>
  );
}

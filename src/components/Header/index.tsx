import { ProfilePopover } from "../ProfilePopover";

import Logo from "../../assets/devchallenges.svg";

// interface HeaderProps {
//   username: string;
// }

export function Header(props: any) {
  return (
    <header className="py-7 px-20 flex justify-between">
      <img src={Logo} alt="logo" className="w-32" />
      <ProfilePopover />
    </header>
  );
}

import { TiArrowSortedDown } from "react-icons/ti";
import { BsPersonCircle } from "react-icons/bs";
import { MdGroup, MdOutlineLogout } from "react-icons/md";

import * as Popover from "@radix-ui/react-popover";
import { PopoverContent } from "../ProfileComponent";

export function ProfilePopover() {
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <div className="flex items-center gap-2">
            <img
              src="https://picsum.photos/id/237/32/32"
              alt="profile pic"
              className="rounded-lg"
            />
            <span className="font-bold text-xs">Gabriel Peralta</span>
            <TiArrowSortedDown />
          </div>
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content className="bg-white border shadow-borderShadow rounded-xl px-3 py-4 flex flex-col gap-3 w-48 mt-6">
            <PopoverContent title="My Profile" icon={BsPersonCircle} />
            <PopoverContent title="Group Chat" icon={MdGroup} />
            <div className="w-full border border-grayLine my-2" />
            <PopoverContent title="Logout" isLogout icon={MdOutlineLogout} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { onChange } from "@/redux/features/offCanvasSlice";
import Logo from "./logo";
import Account from "./account";
import { MoreVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Icon from "../icon";
import Link from "next/link";

const MobileSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, data: categories } = useAppSelector(
    (state) => state.offCanvas
  );
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  const onOpenChange = () => {
    dispatch(onChange());
  };

  console.log(categories, "categories here");

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="bg-white">
        <div className="h-full w-full flex flex-col">
          {/* top */}
          <div>
            <Logo className="items-start" />
          </div>
          <Separator />
          {/* middle */}
          <div className="flex-grow ">
            {/* <MainNav data={categories}/> */}

            <Command className="">
              <CommandList>
                <CommandGroup heading="Categories">
                  {categories.length > 1 &&
                    categories?.map((item) => (
                      <Link href={item.href} key={item.href}>
                        <CommandItem
                          className={`${
                            item.isActive && "bg-primary/50 text-secondary"
                          }`}
                        >
                          <Icon
                            name={item.icon as keyof typeof dynamicIconImports}
                            className="mr-2 h-4 w-4"
                          />
                          <span>{item.label}</span>
                        </CommandItem>
                      </Link>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>

          <Separator />
          {/* bottom */}
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2">
              <Account />
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-xs">john@doe.com</p>
              </div>
            </div>

            <MoreVertical size={20} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

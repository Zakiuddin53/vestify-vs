"use client";

import { User, Settings, LogOut, Plus } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/api";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/Icons/Logo";
import Capital from "@/components/ui/Icons/Capital";
import Home from "@/components/ui/Icons/Home";

export function SideNavbar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.success) {
        router.push("/");
      } else {
        console.error("Logout failed:", response.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="AppSidebar w-20 h-screen bg-indigo-600 flex flex-col justify-between items-center py-6 px-2">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="w-12 h-12 flex justify-center items-center">
          <Logo />
        </div>

        <div className="flex flex-col space-y-6">
          {/* Home Icon */}
          <Link href="/dashboard">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full text-white hover:bg-indigo-500 transition-colors"
            >
              <Home />
              <span className="sr-only">Home</span>
            </Button>
          </Link>

          {/* Capital Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full text-white hover:bg-indigo-500 transition-colors"
          >
            <Capital />
            <span className="sr-only">Capital</span>
          </Button>

          {/* Profile Icon */}
          <Link href="/profile">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 bg-indigo-500 rounded-full text-white hover:bg-indigo-400 transition-colors"
            >
              <User className="w-6 h-6" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        {/* Settings Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full text-white hover:bg-indigo-500 transition-colors"
            >
              <Settings className="w-6 h-6" />
              <span className="sr-only">Settings</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="p-0 hover:bg-transparent"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage src="/11.webp" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white text-black">
            <DropdownMenuLabel className="text-black">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-black hover:bg-gray-100">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-black hover:bg-gray-100">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-black hover:bg-gray-100"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

"use client";

import { Home, User, Settings, LogOut, Plus } from "lucide-react";
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
    <nav className="AppSidebar w-20 h-screen px-4 pt-6 pb-5 bg-indigo-600 flex-col justify-between items-start inline-flex">
      <div className="Frame self-stretch flex-col justify-start items-center gap-8 inline-flex">
        {/* Logo */}
        <div className="Logomark w-8 h-8 bg-white rounded-xl shadow border border-slate-200 flex justify-center items-center">
          <svg
            className="h-6 w-6 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        <div className="Frame flex-col justify-start items-start gap-4 flex">
          {/* Home Icon */}
          <Link href="/dashboard">
            <Button
              variant="ghost"
              size="icon"
              className="ButtonIcon w-12 h-12 p-4 rounded-full justify-center items-center gap-2.5 inline-flex text-white hover:bg-indigo-500"
            >
              <Home className="w-6 h-6" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>

          {/* Add another icon button if needed */}
          <Button
            variant="ghost"
            size="icon"
            className="ButtonIcon w-12 h-12 p-4 rounded-full justify-center items-center gap-2.5 inline-flex text-white hover:bg-indigo-500"
          >
            <Plus className="w-6 h-6" />
            <span className="sr-only">Add</span>
          </Button>

          {/* Profile Icon */}
          <Link href="/profile">
            <Button
              variant="ghost"
              size="icon"
              className="ButtonIcon w-12 h-12 p-4 bg-indigo-500 rounded-full justify-center items-center gap-2.5 inline-flex text-white"
            >
              <User className="w-6 h-6" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="Frame self-stretch flex-col justify-start items-start gap-4 inline-flex">
        {/* Settings Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="ButtonIcon w-12 h-12 p-4 rounded-full justify-center items-center gap-2.5 inline-flex text-white hover:bg-indigo-500"
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
              <Avatar className="w-6 h-6">
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

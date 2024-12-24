import { LucideIcon } from "lucide-react";

export interface ISidebarData {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  items?: NavSubItem[];
}

interface NavSubItem {
  title: string;
  url: string;
}

interface Project {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface IAppsidebarData {
  user: User;
  navMain: NavItem[];
  navSecondary: NavItem[];
  projects: Project[];
}

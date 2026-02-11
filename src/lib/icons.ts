import {
  ShieldAlert,
  Briefcase,
  Hammer,
  Home,
  TrendingUp,
  Award,
  Star,
  Heart,
  type LucideIcon,
} from "lucide-react";

export const IconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  Briefcase,
  Hammer,
  Home,
  TrendingUp,
  Award,
  Star,
  Heart,
};

export function getIcon(name: string): LucideIcon {
  return IconMap[name] ?? Star;
}

import {
  ShieldAlert,
  Briefcase,
  Hammer,
  Home,
  TrendingUp,
  Award,
  Star,
  Heart,
  ShoppingBag,
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
  ShoppingBag,
};

export function getIcon(name: string): LucideIcon {
  return IconMap[name] ?? Star;
}

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
  Trophy,
  Target,
  Zap,
  GraduationCap,
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
  Trophy,
  Target,
  Zap,
  GraduationCap,
};

export function getIcon(name: string): LucideIcon {
  return IconMap[name] ?? Star;
}

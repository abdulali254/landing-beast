import { LucideProps } from "lucide-react";
import { icons as LucideIcons } from "lucide-react";

export type Icon = LucideProps;

export const Icons = {
  logo: LucideIcons.Command,
  // Add more icons as needed
  ...LucideIcons,
};

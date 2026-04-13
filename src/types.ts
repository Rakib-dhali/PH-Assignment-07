import { LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type SummeryCard = {
    counter: number;
    label: string;
}

export type Friends = {
  id: number;
  name: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: "on-track" | "overdue";
  tags: string[];
  bio: string;
  goal: number;
  next_due_date: string;
};


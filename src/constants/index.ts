import { AccountNavLinkProps } from "@/components/AccountNavLink";
import AnalyticsIcon from "@/components/Icons/AnalyticsIcon";
import DashboardIcon from "@/components/Icons/DashboardIcon";
import EcosystemIcon from "@/components/Icons/EcosystemIcon";
import NodesIcon from "@/components/Icons/NodesIcon";
import SetupIcon from "@/components/Icons/SetupIcon";
import TeamsIcon from "@/components/Icons/TeamsIcon";
import { SetupNavLinkProps } from "@/components/SetupNavLink";

export const medium = 900;

export const small = 600;

export const accNavLinks: (AccountNavLinkProps & { key: string })[] = [
  {
    href: '/nodes',
    Icon: NodesIcon,
    children: 'Nodes',
    key: '1',
  },
  {
    href: '/dashboard',
    Icon: DashboardIcon,
    children: 'Dashboard',
    key: '2',
  },
  {
    href: '/ecosystem',
    Icon: EcosystemIcon,
    children: 'Ecosystem',
    key: '3',
  },
  {
    href: '/analytics',
    Icon: AnalyticsIcon,
    children: 'Analytics',
    key: '4',
  },
  {
    href: '/teams',
    Icon: TeamsIcon,
    children: 'Teams',
    key: '5',
  },
  {
    href: '/setup',
    Icon: SetupIcon,
    children: 'Discover Web3',
    key: '6',
  },
];

export const setupLinks: (SetupNavLinkProps & { key:  string })[] = [
  {
    href: '/setup/overview',
    children: 'Overview',
    key: '1',
  },
  {
    href: '/setup/projects',
    children: 'Projects',
    key: '2',
  },
  {
    href: '/setup/events',
    children: 'Events',
    key: '3',
  },
  {
    href: '/setup/news',
    children: 'News',
    key: '4',
  },
  {
    href: '/setup/developer',
    children: 'Developer Toolkit',
    key: '5',
  },
  {
    href: '/setup/enterpreneur',
    children: 'Enterpreneur Toolkit',
    key: '6',
  },
];

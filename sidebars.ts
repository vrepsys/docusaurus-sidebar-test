import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import navigation from './docs/navigation.json';

type NavItem = {
  label: string;
  type: 'item' | 'folder';
  href?: string;
  children?: NavItem[];
};

function toSidebarItem(entry: NavItem) {
  if (entry.type === 'item') {
    return entry.href!.replace(/\.mdx?$/, '');
  }
  return {
    type: 'category',
    label: entry.label,
    items: (entry.children ?? []).map(toSidebarItem),
  };
}

const sidebars: SidebarsConfig = {
  tutorialSidebar: (navigation as NavItem[]).map(toSidebarItem),
};

export default sidebars;

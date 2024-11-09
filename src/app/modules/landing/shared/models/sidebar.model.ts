export interface ISidebar {
  displayName: string;
  route: string;
  active: boolean;
  display: boolean;
  isSelected: boolean;
  validRoles: string[];
  children: ISidebar[] | undefined;
}


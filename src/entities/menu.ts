interface Items {
  id: number;
  name: string;
  path: string;
}

export default interface MenuProps {
  menu: Items[];
}

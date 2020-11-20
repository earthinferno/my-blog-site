export class BlogItem {
  id: string;
  title: string;
  category: string;
  content: Item[];
  synopsis?: string;
}

class Item {
  type: 'p' | 'a' | 'c';
  value: string | string[];
}

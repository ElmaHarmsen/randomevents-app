export interface EventInterface {
  _id: string;
  Title: string;
  Picture: string;
  Date: string;
  Location: string;
  Description: string;
  Contribution: number;
  event_categories: CategoryInterface[];
}

export interface CategoryInterface {
  events: string[];
  Category: string;
}

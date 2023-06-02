export class Item{
  'name': string;
  'description': string;
  'image': string;
  'id': string;
  'prices': {
    'ngn': number,
    'gbp': number
  };
  'stock': number;
  'dateAdded': null | Date
}

export type TCellTypes = 'code' | 'text';

export interface ICell {
  id: string;
  type: TCellTypes;
  content: string;
}

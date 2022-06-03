export interface DatasetsType {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

export interface ReviewsByRating {
  [key: string]: Review[];
}

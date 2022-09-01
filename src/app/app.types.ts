export interface PART {
  title: string;
  data: string;
}

export interface PROD {
  id: number;
  name: string;
  title: string[] | Array<string>;
  data: Array<string>;
}

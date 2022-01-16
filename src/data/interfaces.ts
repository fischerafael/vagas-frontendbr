export interface IJobRes {
  url: string;
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: IUser;
  labels: ILabel[];
  state: string;
  locked: boolean;
  created_at: string;
  updated_at: string;
  closed_at: string;
  body: string;
}

export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface ILabel {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

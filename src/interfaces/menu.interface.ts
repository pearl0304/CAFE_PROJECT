export interface MenuListInterface {
  id: string;
  title: string;
  subTitle: string;
  image: string;
  description: string;
  nutrients: string;
  type: string;
  price: number;
}

export interface CartListInterface {
  id: string;
  title: string;
  subTitle: string;
  image: string;
  price: number;
  amount: number;
}

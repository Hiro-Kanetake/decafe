export type ShopGet =
  | {
      name: string;
      address: string;
      latitude: string;
      longitude: string;
    }
  | undefined;

export type MenuGet = {
  name: string;
  price: number;
};

export interface ShopCreate {
  owner_id: number;
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  station: string;
}

export interface MenuCreate {
  shop_id: number;
  name: string;
  price: number;
}

export interface Owner {
  id?: number;
  name: string;
  password: string;
}

export interface LoginOwner {
  name: string;
  password: string;
}

export interface SignUpOwner {
  name: string;
  password: string;
}

export interface ErrorInfo {
  message: string;
}

export interface AuthStatus {
  isAuthenticated: boolean;
}

export interface AuthCheck {
  checked: boolean;
  isAuthenticated: boolean;
}

export type ShopAndMenu =
  | {
      shop: ShopGet;
      menus: MenuGet[];
    }
  | undefined;

export interface StationsGet {
  station: string;
}

export interface StationsGet {
  station: string;
}

export interface AllShopGet {
  id: number;
  owner_id: number;
  name: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  station: string;
}

export interface ShopInfo {
  id: number;
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  station: string;
  owner_id: number;
}
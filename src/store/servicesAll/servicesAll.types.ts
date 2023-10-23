interface Extra {
  is_additional: string;
}

export interface ServicesAllItemChild {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  sort_order: number;
  parent_id: number;
  nest_left: number;
  nest_right: number;
  nest_depth: number;
  is_active: number;
  is_in_bonus_program: number;
  title: string;
  subtitle: any;
  slug: string;
  preview_text: string;
  full_text: string;
  price: number;
  old_price: any;
  extra?: Extra;
  additional_title?: string;
  parents: string;
  full_path: string;
  children?: ServicesAllItemChild[];
}

export interface ServicesAllItemParent {
  id: number;
  parent_id: any;
  is_active: number;
  title: string;
  slug: string;
  icon?: string;
  parents: string;
  full_path: string;
  children: ServicesAllItemChild[];
}

export interface ServicesAllState {
  servicesAllItems: ServicesAllItemParent[];
}

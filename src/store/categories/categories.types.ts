interface Extra {
  is_additional: string;
}

export interface CategoriesItem {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  sort_order: number;
  parent_id: any;
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
}

export interface CategoriesState {
  categoriesItems: CategoriesItem[];
}

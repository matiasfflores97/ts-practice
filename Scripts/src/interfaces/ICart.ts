export interface ICart {
    token:                            string;
    note:                             null;
    attributes:                       Attributes;
    original_total_price:             number;
    total_price:                      number;
    total_discount:                   number;
    total_weight:                     number;
    item_count:                       number;
    items:                            Item[];
    requires_shipping:                boolean;
    currency:                         string;
    items_subtotal_price:             number;
    cart_level_discount_applications: any[];
}

export interface Attributes {
}

export interface Item {
    id:                               number;
    properties:                       null;
    quantity:                         number;
    variant_id:                       number;
    key:                              string;
    title:                            string;
    price:                            number;
    original_price:                   number;
    discounted_price:                 number;
    line_price:                       number;
    original_line_price:              number;
    total_discount:                   number;
    discounts:                        Discount[];
    sku:                              string;
    grams:                            number;
    vendor:                           string;
    taxable:                          boolean;
    product_id:                       number;
    product_has_only_default_variant: boolean;
    gift_card:                        boolean;
    final_price:                      number;
    final_line_price:                 number;
    url:                              string;
    featured_image:                   FeaturedImage;
    image:                            string;
    handle:                           string;
    requires_shipping:                boolean;
    product_type:                     string;
    product_title:                    string;
    product_description:              string;
    variant_title:                    string;
    variant_options:                  string[];
    options_with_values:              OptionsWithValue[];
    line_level_discount_allocations:  LineLevelDiscountAllocation[];
    line_level_total_discount:        number;
}

export interface Discount {
    amount: number;
    title:  string;
}

export interface FeaturedImage {
    aspect_ratio: number;
    alt:          string;
    height:       number;
    url:          string;
    width:        number;
}

export interface LineLevelDiscountAllocation {
    amount:               number;
    discount_application: DiscountApplication;
}

export interface DiscountApplication {
    type:                   string;
    key:                    string;
    title:                  string;
    description:            string;
    value:                  string;
    created_at:             string;
    value_type:             string;
    allocation_method:      string;
    target_selection:       string;
    target_type:            string;
    total_allocated_amount: number;
}

export interface OptionsWithValue {
    name:  string;
    value: string;
}

export interface ItemToCart {
    id: number;
    quantity: number;
}
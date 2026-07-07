export interface VariantConfig {
  priceDisplay: string; // ex: "$9.00"
  priceWhole: string;   // ex: "9" — para o display grande do OfferSection
  checkoutUrl: string;
}

export const variants: Record<string, VariantConfig> = {
  default: {
    priceDisplay: '$9.00',
    priceWhole: '9',
    checkoutUrl: 'https://pay.hotmart.com/K104985293A?checkoutMode=10',
  },
  'v1': {
    priceDisplay: '$17.00',
    priceWhole: '17',
    checkoutUrl: 'https://pay.hotmart.com/K104985293A?off=0vzfe20y&checkoutMode=10',
  },
};

export const DEFAULT_VARIANT: VariantConfig = variants.default;

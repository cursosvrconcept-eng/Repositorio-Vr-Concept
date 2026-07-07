import React, { createContext, useContext } from 'react';
import { VariantConfig, variants, DEFAULT_VARIANT } from '../variants';

const VariantContext = createContext<VariantConfig>(DEFAULT_VARIANT);

export const useVariant = () => useContext(VariantContext);

export const VariantProvider: React.FC<{ slug: string; children: React.ReactNode }> = ({ slug, children }) => {
  const config = variants[slug] ?? DEFAULT_VARIANT;
  return <VariantContext.Provider value={config}>{children}</VariantContext.Provider>;
};

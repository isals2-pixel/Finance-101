// Visual component registry: lesson frontmatter's visual.id keys into this.
import type { ComponentType } from 'react';
import { MoneyFunctions } from './MoneyFunctions';

const VISUALS: Record<string, ComponentType> = {
  'money-functions': MoneyFunctions,
};

export function getVisual(id: string): ComponentType | undefined {
  return VISUALS[id];
}

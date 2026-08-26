// Visual component registry: lesson frontmatter's visual.id keys into this.
import type { ComponentType } from 'react';
import { MoneyFunctions } from './MoneyFunctions';
import {
  AssetsLiabilities,
  CashFlow,
  CompoundCurve,
  InterestTimeline,
  NetWorthBar,
} from './Level1Visuals';

const VISUALS: Record<string, ComponentType> = {
  'money-functions': MoneyFunctions,
  'cash-flow': CashFlow,
  'assets-liabilities': AssetsLiabilities,
  'net-worth-bar': NetWorthBar,
  'interest-timeline': InterestTimeline,
  'compound-curve': CompoundCurve,
};

export function getVisual(id: string): ComponentType | undefined {
  return VISUALS[id];
}

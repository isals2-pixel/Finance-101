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
import {
  MarketFlows,
  NominalRealSplit,
  OpportunityFork,
  PurchasingPower,
  ThreeLenses,
} from './Batch2Visuals';

const VISUALS: Record<string, ComponentType> = {
  'money-functions': MoneyFunctions,
  'cash-flow': CashFlow,
  'assets-liabilities': AssetsLiabilities,
  'net-worth-bar': NetWorthBar,
  'interest-timeline': InterestTimeline,
  'compound-curve': CompoundCurve,
  'purchasing-power': PurchasingPower,
  'nominal-real-split': NominalRealSplit,
  'opportunity-fork': OpportunityFork,
  'three-lenses': ThreeLenses,
  'market-flows': MarketFlows,
};

export function getVisual(id: string): ComponentType | undefined {
  return VISUALS[id];
}

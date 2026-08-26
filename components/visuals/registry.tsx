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
import {
  BondFlows,
  DecisionChecklist,
  DiversificationPaths,
  EtfBasket,
  FeeDrag,
  IndexComposition,
  RiskRange,
  StockClaim,
  TimeHorizon,
} from './Batch3Visuals';
import {
  EarningsWaterfall,
  ExchangeBrokerChain,
  GrowthValueCompare,
  OrderBookSpread,
  OrderFill,
} from './Batch5Visuals';
import {
  CycleWave,
  FiscalFlows,
  FxSeesaw,
  GdpComponents,
  PolicyTransmission,
  SupplyDemandCross,
} from './Batch4Visuals';

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
  'stock-claim': StockClaim,
  'bond-flows': BondFlows,
  'etf-basket': EtfBasket,
  'index-composition': IndexComposition,
  'diversification-paths': DiversificationPaths,
  'risk-range': RiskRange,
  'fee-drag': FeeDrag,
  'time-horizon': TimeHorizon,
  'decision-checklist': DecisionChecklist,
  'supply-demand-cross': SupplyDemandCross,
  'gdp-components': GdpComponents,
  'policy-transmission': PolicyTransmission,
  'fiscal-flows': FiscalFlows,
  'cycle-wave': CycleWave,
  'fx-seesaw': FxSeesaw,
  'exchange-broker-chain': ExchangeBrokerChain,
  'order-book-spread': OrderBookSpread,
  'order-fill': OrderFill,
  'earnings-waterfall': EarningsWaterfall,
  'growth-value-compare': GrowthValueCompare,
};

export function getVisual(id: string): ComponentType | undefined {
  return VISUALS[id];
}

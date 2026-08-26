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
  CreditSpectrum,
  DurationLever,
  FundLabels,
  PriceYieldSeesaw,
  ReplicationPaths,
  TrackingGap,
} from './Batch6Visuals';
import {
  CorrelationMix,
  EfficientFrontier,
  VolatilityDrag,
} from './Batch7Visuals';
import {
  AllocationDials,
  PortfolioBlueprint,
  RebalancingCycle,
} from './Batch8Visuals';
import {
  ChaseCycle,
  LossAsymmetry,
  OverconfidenceCost,
} from './Batch9Visuals';
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
  'price-yield-seesaw': PriceYieldSeesaw,
  'duration-lever': DurationLever,
  'credit-spectrum': CreditSpectrum,
  'replication-paths': ReplicationPaths,
  'tracking-gap': TrackingGap,
  'fund-labels': FundLabels,
  'volatility-drag': VolatilityDrag,
  'correlation-mix': CorrelationMix,
  'efficient-frontier': EfficientFrontier,
  'allocation-dials': AllocationDials,
  'rebalancing-cycle': RebalancingCycle,
  'portfolio-blueprint': PortfolioBlueprint,
  'loss-asymmetry': LossAsymmetry,
  'overconfidence-cost': OverconfidenceCost,
  'chase-cycle': ChaseCycle,
};

export function getVisual(id: string): ComponentType | undefined {
  return VISUALS[id];
}

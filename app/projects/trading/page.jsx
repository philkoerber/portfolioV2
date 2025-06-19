import React from 'react';
import Zapper from '@/app/utils/Zapper';
import { FaExternalLinkAlt } from "react-icons/fa";


/* quick tech pills */
const tags = [
  'QuantConnect', 'Python', 'RSI', 'SMA-50/200',
  'ATR Stops', 'ETFs'
];

export default function EtfRsiMaV5Page() {
  return (
    <div className="flex justify-center p-8">
      <div className="flex flex-col gap-6 w-full max-w-3xl">

        {/* ───────────────── 1 · Overview */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h1 className="text-2xl font-bold mb-1">
              Daily ETF RSI-MA Bot on Quantconnect
            </h1>
            <h2 className="text-lg font-semibold mb-2">
              Hourly swing-trader with momentum fallback
            </h2>
            <p className="text-sm opacity-80 mb-4">
              Scans the&nbsp;20 most-liquid US ETFs each hour, buys when&nbsp;
              <em>RSI rebounds from oversold</em> and the 50-hour MA sits above the&nbsp;200-hour MA.
              If nothing is oversold, it falls back to a simple
              30-day momentum rank so it never stands idle.
              Risk is allocated by inverse&nbsp;ATR and capped at&nbsp;2&nbsp;× gross exposure.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(t => (
                <span key={t}
                  className="bg-antique text-verydark text-xs px-2 py-1 rounded-full">
                  #{t}
                </span>
              ))}
            </div>
            <div className="aspect-video w-full overflow-hidden border border-antique/20 mb-4">
              <img
                src="/chart.png"
                alt="Equity curve"
                className="w-full h-full"
              />
            </div>


            <a
              href={"https://www.quantconnect.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-center bg-antique text-verydark text-sm font-semibold px-4 py-2 hover:bg-antique/80 transition duration-200 shadow-md w-full"
            >
              Quantconnect.com
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </section>
        </Zapper>

        {/* ───────────────── 2 · Key parameters */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Core Parameters</h3>
            <pre className="bg-verydark text-antique text-xs p-4 leading-relaxed overflow-x-auto">
              {`# look-back & thresholds
rsiPeriod        = 14
fastPeriod, slowPeriod = 50, 200   # hourly SMA trend filter
oversold, overbought   = 30, 70

# risk & exits
stopATR  = 1.5      # initial stop
trailATR = 1.5      # trailing once in profit
holdMaxHrs, earlyExitHrs = 48, 32
earlyExitATR = 0.5   # bail if no progress
targetExposure = 2.0 # 2× gross cap`}
            </pre>
            <p className="text-xs opacity-70 mt-2">
              These numbers aim for frequent trades but shallow risk—
              a 1½ × ATR stop is tight on purpose to keep max drawdown low.
            </p>
          </section>
        </Zapper>

        {/* ───────────────── 3 · Universe picker */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Universe → keep it liquid</h3>
            <pre className="bg-verydark text-antique text-xs p-4 leading-relaxed overflow-x-auto">
              {`def CoarseSelection(self, coarse):
    liquid = [c for c in coarse
              if c.Symbol.Value in self.etfCandidates
              and c.DollarVolume > 25e6]           # ≥ $25 M / day
    return [c.Symbol for c in sorted(liquid,
                                     key=lambda x: x.DollarVolume,
                                     reverse=True)[:30]]`}
            </pre>
            <p className="text-xs opacity-70 mt-2">
              Anything thinner than&nbsp;$25 M daily volume is skipped to
              avoid sloppy spreads and halts.
            </p>
          </section>
        </Zapper>

        {/* ───────────────── 4 · Regime filter */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Risk-On Regime Check</h3>
            <pre className="bg-verydark text-antique text-xs p-4 leading-relaxed overflow-x-auto">
              {`self.spyFast = self.SMA('SPY', 50, Resolution.Hour)
self.spySlow = self.SMA('SPY', 200, Resolution.Hour)

riskOn = self.spyFast.Current.Value > self.spySlow.Current.Value`}
            </pre>
            <p className="text-xs opacity-70 mt-2">
              The bot only opens new trades when SPY’s short MA is above its
              long MA—keeps it out of bear swoons.
            </p>
          </section>
        </Zapper>

        {/* ───────────────── 5 · Entry logic */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Entry: RSI swing-reversal</h3>
            <pre className="bg-verydark text-antique text-xs p-4 leading-relaxed overflow-x-auto">
              {`longSetup = (rsi < 30) and (rsi > prevRsi)        # ticking up
trendUp   = sma50 > sma200
if riskOn and longSetup and trendUp:
    self.SetHoldings(sym, +weight)`}
            </pre>
            <ul className="list-disc list-inside text-sm space-y-1 opacity-80 mt-2">
              <li>Mirror logic for shorts when <code>RSI&nbsp;&gt;&nbsp;70</code> plus down-trend.</li>
              <li>If no ETF is oversold/overbought, the bot looks at price
                momentum over the past 30×7 bars:</li>
            </ul>
            <pre className="bg-verydark text-antique text-xs p-4 leading-relaxed overflow-x-auto mt-2">
              {`hist = self.History(sym, 210, Resolution.Hour)
momentum = (price - hist.close.iloc[0]) / hist.close.iloc[0]`}
            </pre>
          </section>
        </Zapper>

        {/* ───────────────── 6 · Position sizing */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Sizing: inverse-ATR</h3>
            <pre className="bg-verydark text-antique text-xs p-4 leading-relaxed overflow-x-auto">
              {`invVol[sym] = 1 / atrValue
w = invVol[sym] / Σ(invVol) * targetExposure   # <= 2× gross`}
            </pre>
            <p className="text-xs opacity-70 mt-2">
              Quiet ETFs (low ATR) get bigger weights; choppy ones get trimmed so
              each position risks roughly the same euro amount.
            </p>
          </section>
        </Zapper>

        {/* ───────────────── 7 · Exit & trailing stops */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Exit rules</h3>
            <pre className="bg-verydark text-antique text-xs p-4 leading-relaxed overflow-x-auto">
              {`stop  = entry - 1.5 * ATR
trail = price - 1.5 * ATR   # only ratchets higher
if heldHrs >= 32 and price < entry + 0.5 * ATR:
    self.Liquidate(sym)     # early exit (no progress)
if heldHrs >= 48:
    self.Liquidate(sym)     # hard time-stop`}
            </pre>
            <p className="text-xs opacity-70 mt-2">
              Stops trail by the same ATR multiple to keep risk constant as a trade moves.
            </p>
          </section>
        </Zapper>

        {/* ───────────────── 8 · Live blotter / flow-chart */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">How one hour flows</h3>
            <div className="aspect-video w-full overflow-hidden border border-antique/20 mb-4">
              <img
                src="/log.png"
                alt="logs"
                className="w-full h-full"
              />
            </div>
            <p className="text-xs opacity-70">
              Every hour: update indicators → score momentum →
              size positions → log to QC.
            </p>
          </section>
        </Zapper>

        {/* ───────────────── 9 · Performance detail */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Back-test detail</h3>
            <ul className="list-disc list-inside text-sm space-y-1 opacity-80">
              <li><strong>Win rate:</strong> 47 %</li>
              <li><strong>Profit-loss ratio:</strong> 1.32</li>
              <li><strong>Expectancy:</strong> 0.10 R per trade</li>
              <li><strong>Turnover:</strong> ≈ 40 % of the book per&nbsp;year</li>
              <li><strong>Fees:</strong> $0 (Alpaca sim)</li>
            </ul>
            <div className="aspect-video w-full overflow-hidden border border-antique/20 mt-4">
              <img
                src="/results.png"
                alt="Results"
                className="w-full h-full"
              />
            </div>
            <p className="text-xs opacity-60 mt-1">
              Stats exported from QuantConnect run “Well Dressed Sky Blue Tapir”
            </p>
          </section>
        </Zapper>

        {/* ───────────────── 10 · Next ideas */}
        <Zapper>
          <section className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Next → Iteration ideas</h3>
            <ol className="list-decimal list-inside text-sm space-y-2 opacity-80">
              <li>Pause short-selling when VIX &lt; 15 (fade traps).</li>
              <li>Add a <code>&gt; 2 × ATR</code> gap filter to skip blow-outs at the open.</li>
              <li>Rolling 20-day Sharpe guardrail → auto-suspend on 3 σ slumps.</li>
              <li>Stream logs to FastAPI for near-real-time PnL dashboards.</li>
            </ol>
            <p className="text-sm opacity-75 mt-4">
              Building this bot was genuinely fun&mdash;every tweak taught me something new about
              Lean and market micro-behaviour. I’m definitely going to sink more
              evenings into refining these edges! :)
            </p>
          </section>
        </Zapper>

      </div>
    </div>
  );
}

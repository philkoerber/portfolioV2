import React from 'react';
import Zapper from '@/app/utils/Zapper';

// quick tech tags shown as pills at the top
const tags = ['QuantConnect', 'Python', 'TensorFlow', 'Sklearn', 'Pandas', 'Kelly Sizing'];

export default function Trading() {
  return (
    <div className="flex justify-center p-8">
      <div className="flex flex-col gap-6 w-full max-w-3xl">

        {/* ───────────────── Overview */}
        <Zapper>
          <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h2 className="text-2xl font-bold mb-1">Intraday Walk‑Forward Trading Bot</h2>
            <h3 className="text-lg font-semibold mb-2">Self‑retraining MLP on AAPL minute data</h3>
            <p className="text-sm mb-4 opacity-80">
              A single‑file algorithm (<code>main.py</code>) designed for <strong>QuantConnect</strong>. It rolls a 60‑day
              window every Sunday night, retrains a tiny MLP under focal loss, and then
              trades Monday–Friday using half‑Kelly sizing clipped to&nbsp;50&nbsp;% gross exposure. Daily
              equity is guarded by a –0.5&nbsp;% stop to keep tail‑risk civilised.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(t => (
                <span key={t} className="bg-antique text-verydark text-xs px-2 py-1 rounded-full">#{t}</span>
              ))}
            </div>
            <div className="aspect-video w-full overflow-hidden border border-antique/20 mb-4">
              <img src="/images/bot-equity-curve-placeholder.png" alt="Equity curve placeholder" className="w-full h-full object-cover" />
            </div>
            <a
              href="https://www.quantconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-antique text-verydark text-sm font-semibold px-4 py-2 hover:bg-antique/80 transition duration-200 shadow-md"
            >
              View on QuantConnect →
            </a>
          </div>
        </Zapper>

        {/* ───────────────── Why walk‑forward? */}
        <Zapper>
          <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Why&nbsp;Walk‑Forward Retraining?</h3>
            <ul className="list-disc list-inside text-sm space-y-2 opacity-80">
              <li><strong>Non‑stationarity:</strong> minute‑level order‑flow drifts week to week; static models stale out fast.</li>
              <li><strong>GPU‑less speed:</strong> the tiny MLP (+ scaler) retrains in &lt; 2 s on QC’s free CPU tier.</li>
              <li><strong>Fresh risk metrics:</strong> weekly re‑fit rescales <code>StandardScaler</code> so ATR, RSI slopes, and time‑of‑day sinusoids stay centred.</li>
              <li><strong>Straightforward deployment:</strong> avoiding offline pipelines means <em>one</em> artifact bundle (<code>.keras</code> + scaler npy) checked into QC storage.</li>
            </ul>
          </div>
        </Zapper>

        {/* ───────────────── Feature engineering */}
        <Zapper>
          <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Feature Engineering</h3>
            <p className="text-sm mb-4 opacity-80">
              Five categories stitched into a <code>float32</code> vector:
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 opacity-80">
              <li><strong>Past returns:</strong> 5‑bar micro‑momentum signal.</li>
              <li><strong>RSI slope:</strong> short‑term momentum acceleration.</li>
              <li><strong>Normalized ATR:</strong> dollar volatility / price ⇒ forecasts stable across regimes.</li>
              <li><strong>Daily z‑score:</strong> mean‑reversion anchor vs 2‑day intraday drift.</li>
              <li><strong>Time‑of‑day sin/cos:</strong> captures lunch‑time chop vs open/close frenzy without categorical edges.</li>
            </ul>
            <div className="aspect-video w-full overflow-hidden border border-antique/20 mt-4">
              <img src="/images/bot-feature-imp-placeholder.png" alt="Feature importance placeholder" className="w-full h-full object-cover" />
            </div>
          </div>
        </Zapper>

        {/* ───────────────── Training pipeline code */}
        <Zapper>
          <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Training Pipeline</h3>
            <pre className="bg-verydark text-antique text-xs p-4 overflow-x-auto leading-relaxed">
{`# Sunday 20:00 ET cron
history = self.History(self.symbol, WINDOW_DAYS, Resolution.Minute)
# → engineer RSI/ATR, z‑score, sincos, returns
X, y = build_samples(history)

X_train, X_test = chrono_split(X, y, 0.8)
scaler = StandardScaler().fit(X_train)
X_train = scaler.transform(X_train)

model = tf.keras.Sequential([
    Dense(32, 'relu'), Dense(8, 'relu'), Dense(1, 'sigmoid')])
model.compile('adam', loss=focal_loss, metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10, batch_size=512,
          validation_split=0.1, callbacks=[EarlyStopping(patience=3)])`}
            </pre>
            <p className="text-xs opacity-70 mt-2">
              <em>Why focal loss?</em> — balances the skewed 52/48 up/down ratio better than BCE, boosting recall on
              rare fast drops.
            </p>
          </div>
        </Zapper>

        {/* ───────────────── Risk Management */}
        <Zapper>
          <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Risk Management & Sizing</h3>
            <p className="text-sm mb-4 opacity-80">
              Position size ↔ prediction edge: <code>half‑Kelly × 1 % risk / (ATR/$)</code>. Capped at 50 % gross and liquidates when
              daily P/L pierces −0.5 %.
            </p>
            <pre className="bg-verydark text-antique text-xs p-4 overflow-x-auto leading-relaxed">
{`edge       = prob_up - 0.5  # ±0.5 → 100 % confidence
risk_unit  = 0.01            # 1 % of equity
frac_kelly = 0.5 * edge      # half‑Kelly
stake_raw  = frac_kelly * risk_unit / (ATR$/Close$)

self.SetHoldings('AAPL', clip(stake_raw, -0.5, 0.5))`}
            </pre>
            <ul className="list-disc list-inside text-sm space-y-1 opacity-80 mt-2">
              <li>Skip first 5 and last 30 minutes: avoid open/close gapping.</li>
              <li>Liquidate on <code>abs(edge) &lt; 0.15</code> ⇒ reduces churn in noise.</li>
            </ul>
          </div>
        </Zapper>

        {/* ───────────────── Live loop */}
        <Zapper>
          <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Live Execution Loop</h3>
            <p className="text-sm mb-4 opacity-80">
              Predictions throttled every 5 minutes to align with feature horizon and cut QC data costs. Public logs show edge, target, and realised
              P/L per tick:
            </p>
            <div className="aspect-video w-full overflow-hidden border border-antique/20 mb-3">
              <img src="/images/bot-logs-placeholder.png" alt="Live logs placeholder" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs opacity-70">
              <em>Debug tip:</em> dumping <code>self.Debug()</code> into QC logs throttles after 10 MB; switched to <code>Log.py</code> to persist detailed telemetry to AWS.
            </p>
          </div>
        </Zapper>

        {/* ───────────────── Lessons */}
        <Zapper>
          <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Lessons Learned</h3>
            <ul className="list-disc list-inside text-sm space-y-2 opacity-80">
              <li>MLP beats LSTM here: latency 1ms vs 20ms with no accuracy loss 🤯.</li>
              <li>RSI slope raw RSI; derivative captures tempo, not stretched scale.</li>
              <li>ATR normalisation makes Kelly sizing regime‑agnostic (½ June ’24 memestock volume ≠ August ’24 dog days).</li>
              <li>Walk‑forward makes backtest metrics noisy; use PSR (Probabilistic Sharpe Ratio) with bootstraps rather than mean Sharpe.</li>
            </ul>
          </div>
        </Zapper>

        {/* ───────────────── Next steps */}
        <Zapper>
          <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30">
            <h3 className="text-lg font-semibold mb-3">Next → Ideas</h3>
            <ol className="list-decimal list-inside text-sm space-y-2 opacity-80">
              <li>Switch to <strong>UniverseSelection</strong> of top‑3 NASDAQ by ADV; retrain multi‑symbol head.</li>
              <li>Add <code>expanding_window_backtester.py</code> to benchmark walk‑forward vs static.</li>
              <li>Shove predictions into a <code>n&gt;1</code> output «long & short» multi‑task net to trade pairs.</li>
              <li>Quantify latency: feed QC live ticks to a self‑hosted FastAPI, compare vs built‑in <code>Algorithm</code>.</li>
            </ol>
          </div>
        </Zapper>

      </div>
    </div>
  );
}

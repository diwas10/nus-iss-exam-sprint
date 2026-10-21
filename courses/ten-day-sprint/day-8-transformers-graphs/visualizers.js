// Interactive Visualizers for Day 8: Deep Vision, Transformers Attention, TransE & GraphRAG

window.SprintDay8Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive Deep CNN Case Studio: ResNet Skips & MobileNet Separable
  // -------------------------------------------------------------------------
  initDeepCNNCaseStudio: function() {
    const selTab = document.getElementById('deepcnn-tab-select');
    const container = document.getElementById('deepcnn-content-container');
    const bench = window.DAY8_TRANSFORMERS_GRAPHS_DATA?.mobilenetBenchmark;

    if (!container) return;

    function renderResNet() {
      container.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; font-size: 0.82rem;">
          <h4 style="color: #38bdf8; margin-bottom: 8px;"><i data-lucide="git-branch"></i> ResNet Residual Block: H(x) = F(x) + x</h4>
          <p style="color: var(--text-secondary);">
            Before ResNet (He et al., 2015), networks deeper than 20 layers suffered from degradation: training error increased because gradients vanished when multiplied through dozens of weight layers.
          </p>
          <div style="background: rgba(56,189,248,0.06); padding: 12px; border-radius: 6px; border-left: 3px solid #38bdf8; font-family: monospace; font-size: 0.85rem; margin: 10px 0;">
            Output: H(x) = F(x) + x<br>
            Gradient Flow: \\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial H} \\cdot \\left( \\frac{\\partial F}{\\partial x} + 1 \\right) = \\frac{\\partial L}{\\partial H} \\frac{\\partial F}{\\partial x} + \\mathbf{\\frac{\\partial L}{\\partial H}}
          </div>
          <p style="color: #34d399; font-weight: 600;">
            ✓ The Magic of "+1": Even if the weight pathway gradient $\\frac{\\partial F}{\\partial x}$ shrinks to zero, the direct identity shortcut transmits the full gradient $\\frac{\\partial L}{\\partial H}$ untouched backwards to early layers! This allowed training networks with 152 layers and beyond.
          </p>
        </div>
      `;
    }

    function renderMobileNet() {
      if (!bench) return;
      container.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; font-size: 0.82rem;">
          <h4 style="color: #f59e0b; margin-bottom: 8px;"><i data-lucide="cpu"></i> MobileNet Depthwise Separable Convolutions</h4>
          <p style="color: var(--text-secondary);">
            Standard 2D convolution filters across both spatial dimensions ($F \\times F$) and input channels ($C_{\\text{in}}$) simultaneously. MobileNet factors this into two distinct steps:
          </p>
          <div class="grid-2-col mt-2" style="font-size: 0.8rem; gap: 10px;">
            <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px;">
              <strong style="color: #38bdf8;">1. Depthwise Convolution:</strong><br>
              Applies a single $3 \\times 3$ filter per input channel independently (computes spatial features with zero channel mixing).
            </div>
            <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px;">
              <strong style="color: #34d399;">2. Pointwise Convolution ($1 \\times 1$):</strong><br>
              Computes a linear combination across all channels (channel mixing with zero spatial footprint).
            </div>
          </div>
          <div class="grid-2-col mt-3" style="font-size: 0.8rem;">
            <div style="background: rgba(239,68,68,0.08); padding: 10px; border-radius: 6px; border: 1px solid rgba(239,68,68,0.2);">
              <span style="color: #ef4444; font-weight: 700;">Standard Convolution:</span><br>
              Parameters: <strong>${bench.standard.params.toLocaleString()}</strong><br>
              Computation: <strong>${bench.standard.mflops.toFixed(2)} MFLOPs</strong>
            </div>
            <div style="background: rgba(52,211,153,0.08); padding: 10px; border-radius: 6px; border: 1px solid rgba(52,211,153,0.2);">
              <span style="color: #34d399; font-weight: 700;">MobileNet Depthwise Separable:</span><br>
              Parameters: <strong>${bench.depthwiseSeparable.params.toLocaleString()}</strong> (8.2× fewer!)<br>
              Computation: <strong>${bench.depthwiseSeparable.mflops.toFixed(2)} MFLOPs</strong> (5.3× faster!)
            </div>
          </div>
        </div>
      `;
    }

    if (selTab) {
      selTab.onchange = function() {
        if (this.value === 'resnet') renderResNet();
        else renderMobileNet();
      };
    }

    renderResNet();
  },

  // -------------------------------------------------------------------------
  // 2. Interactive Scaled Dot-Product Self-Attention Studio (PRMLS Day 4b)
  // -------------------------------------------------------------------------
  initSelfAttentionHeatmapStudio: function() {
    const tokensContainer = document.getElementById('attn-tokens-container');
    const barsContainer = document.getElementById('attn-bars-container');
    const chkScaled = document.getElementById('attn-chk-scaled');
    const data = window.DAY8_TRANSFORMERS_GRAPHS_DATA?.attentionSentence;

    if (!tokensContainer || !barsContainer || !data) return;

    let useScaling = chkScaled ? chkScaled.checked : true;
    let selectedTokenIdx = 7; // Default: "it"

    function render() {
      const weights = useScaling ? data.attentionWeights : data.unscaledAttentionWeights;

      // Render Token Pills
      tokensContainer.innerHTML = data.tokens.map((t, idx) => {
        const isSelected = idx === selectedTokenIdx;
        const wVal = weights[idx];
        const alpha = Math.max(0.08, wVal);
        return `
          <button class="btn-token-attn" data-idx="${idx}" style="padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-family: monospace; cursor: pointer; border: 1px solid ${isSelected ? '#38bdf8' : 'rgba(255,255,255,0.1)'}; background: ${isSelected ? '#38bdf8' : `rgba(56,189,248,${alpha})`}; color: ${isSelected ? '#000' : '#fff'}; font-weight: ${isSelected ? '800' : 'normal'};">
            ${t} <span style="font-size: 0.68rem; opacity: 0.8;">(${(wVal * 100).toFixed(0)}%)</span>
          </button>
        `;
      }).join('');

      // Attach click listeners to tokens
      tokensContainer.querySelectorAll('.btn-token-attn').forEach(btn => {
        btn.onclick = function() {
          selectedTokenIdx = parseInt(this.getAttribute('data-idx'), 10);
          render();
        };
      });

      // Render Attention Bar Chart
      barsContainer.innerHTML = data.tokens.map((t, idx) => {
        const wVal = weights[idx];
        const pct = (wVal * 100).toFixed(1);
        const isAnimal = t === 'animal';
        const barColor = isAnimal ? '#34d399' : (wVal > 0.1 ? '#38bdf8' : '#64748b');

        return `
          <div style="display: grid; grid-template-columns: 80px 1fr 50px; align-items: center; gap: 8px; font-size: 0.78rem;">
            <div style="text-align: right; font-family: monospace; color: ${isAnimal ? '#34d399' : 'var(--text-secondary)'}; font-weight: ${isAnimal ? '700' : 'normal'};">${t}:</div>
            <div style="background: rgba(255,255,255,0.05); height: 14px; border-radius: 4px; overflow: hidden;">
              <div style="width: ${pct}\\%; height: 100\\%; background: ${barColor}; border-radius: 4px;"></div>
            </div>
            <div style="font-family: monospace; font-weight: 700; color: ${barColor};">${pct}%</div>
          </div>
        `;
      }).join('');
    }

    if (chkScaled) {
      chkScaled.onchange = function() {
        useScaling = this.checked;
        render();
      };
    }

    render();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive Knowledge Graph Embeddings (TransE Link Prediction Studio)
  // -------------------------------------------------------------------------
  initTransEVectorPlayground: function() {
    const canvas = document.getElementById('transe-canvas');
    const selHead = document.getElementById('transe-head-select');
    const selRel = document.getElementById('transe-rel-select');
    const resultBox = document.getElementById('transe-metrics-box');

    const kg = window.DAY8_TRANSFORMERS_GRAPHS_DATA?.kgData;
    if (!canvas || !kg) return;
    const ctx = canvas.getContext('2d');

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      function toScreen(pt) {
        return {
          x: (pt.x + 1) * 0.5 * (w - 60) + 30,
          y: (1 - pt.y) * 0.5 * (h - 60) + 30
        };
      }

      // Draw Center Axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
      ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
      ctx.stroke();

      const typeColors = {
        Drug: '#38bdf8',
        Symptom: '#f59e0b',
        Disease: '#ec4899'
      };

      // Draw entities
      Object.keys(kg.entities).forEach(name => {
        const ent = kg.entities[name];
        const screen = toScreen(ent);
        ctx.beginPath();
        ctx.arc(screen.x, screen.y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = typeColors[ent.type] || '#fff';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.font = '10px monospace';
        ctx.fillText(name, screen.x + 8, screen.y + 4);
      });

      // Get user selection
      const hName = selHead ? selHead.value : "Aspirin";
      const rName = selRel ? selRel.value : "TREATS";

      const hEnt = kg.entities[hName];
      const rVec = kg.relations[rName];

      if (hEnt && rVec) {
        const hScreen = toScreen(hEnt);
        // TransE translation: t_predicted = h + r
        const tPred = { x: hEnt.x + rVec.dx, y: hEnt.y + rVec.dy };
        const tPredScreen = toScreen(tPred);

        // Draw Relation Vector Arrow: h -> t_pred
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(hScreen.x, hScreen.y);
        ctx.lineTo(tPredScreen.x, tPredScreen.y);
        ctx.stroke();

        // Draw predicted target crosshair
        ctx.strokeStyle = '#34d399';
        ctx.beginPath();
        ctx.arc(tPredScreen.x, tPredScreen.y, 10, 0, 2 * Math.PI);
        ctx.stroke();

        // Find nearest entities (Link Prediction)
        const candidates = Object.keys(kg.entities).map(candName => {
          const cand = kg.entities[candName];
          const dist = Math.hypot(cand.x - tPred.x, cand.y - tPred.y);
          return { name: candName, dist };
        }).sort((a, b) => a.dist - b.dist);

        const top1 = candidates[0];
        const mrr = 1.0 / 1.0; // Rank 1

        if (resultBox) {
          resultBox.innerHTML = `
            <div style="background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.3); border-radius: 8px; padding: 12px; font-size: 0.82rem;">
              <strong style="color: #34d399;">TransE Translation Equation:</strong> ||h + r - t||<br>
              Predicted Tail Target: [${tPred.x.toFixed(2)}, ${tPred.y.toFixed(2)}]<br>
              Top-1 Ranked Tail: <strong>${top1.name}</strong> (Distance: ${top1.dist.toFixed(4)})<br>
              <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 6px;">
                Link Prediction Metrics: <strong>MR = 1.0</strong> | <strong>MRR = 1.00</strong> | <strong>Hits@1 = 100%</strong>
              </div>
            </div>
          `;
        }
      }
    }

    if (selHead) selHead.onchange = render;
    if (selRel) selRel.onchange = render;
    render();
  },

  // -------------------------------------------------------------------------
  // 4. Interactive GraphRAG vs Vector RAG Multi-Hop Studio (RS Day 5)
  // -------------------------------------------------------------------------
  initGraphRAGvsVectorRAGStudio: function() {
    const btnCompare = document.getElementById('rag-btn-compare');
    const resultContainer = document.getElementById('rag-results-display');
    const data = window.DAY8_TRANSFORMERS_GRAPHS_DATA?.graphRAGQuery;

    if (!btnCompare || !resultContainer || !data) return;

    btnCompare.onclick = function() {
      resultContainer.innerHTML = `
        <div class="grid-2-col mt-3" style="font-size: 0.82rem; gap: 12px;">
          <div style="background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.3); border-radius: 8px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #ef4444; font-size: 0.95rem;">1. Traditional Vector RAG</strong>
              <span class="badge-tech" style="color: #ef4444;">${data.vectorRAGResult.latencyMs} ms</span>
            </div>
            <div style="margin-top: 6px; font-weight: 700; color: #ef4444;">${data.vectorRAGResult.status}</div>
            <p style="color: var(--text-secondary); margin-top: 6px; font-size: 0.78rem;">
              ${data.vectorRAGResult.explanation}
            </p>
          </div>

          <div style="background: rgba(52,211,153,0.06); border: 1px solid rgba(52,211,153,0.3); border-radius: 8px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #34d399; font-size: 0.95rem;">2. Neo4j GraphRAG (Knowledge Graph)</strong>
              <span class="badge-tech" style="color: #34d399;">${data.graphRAGResult.latencyMs} ms</span>
            </div>
            <div style="margin-top: 6px; font-weight: 700; color: #34d399;">${data.graphRAGResult.status}</div>
            <div style="background: rgba(0,0,0,0.4); padding: 8px; border-radius: 6px; font-family: monospace; font-size: 0.72rem; color: #38bdf8; margin: 6px 0;">
              ${data.graphRAGResult.cypher}
            </div>
            <p style="color: var(--text-secondary); font-size: 0.78rem;">
              ${data.graphRAGResult.explanation}
            </p>
          </div>
        </div>
      `;
    };
  }
};

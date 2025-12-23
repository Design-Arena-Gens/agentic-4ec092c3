"use client";

import { FormEvent, useMemo, useState } from "react";
import { generatePlan, Plan, SceneBlueprint, VoiceBlueprint } from "./lib/generator";

const defaultIdea = "Create a superhero story where a father saves his family";

export default function HomePage() {
  const [idea, setIdea] = useState<string>(defaultIdea);
  const [plan, setPlan] = useState<Plan>(() => generatePlan(defaultIdea));
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!idea.trim()) return;
    setIsGenerating(true);
    const nextPlan = generatePlan(idea);
    setPlan(nextPlan);
    setTimeout(() => setIsGenerating(false), 320);
  };

  const heroPalette = useMemo(
    () => ({
      gradient: "linear-gradient(120deg, rgba(37, 99, 235, 0.85), rgba(147, 51, 234, 0.85))",
      shadow: "0 24px 80px rgba(79, 70, 229, 0.35)"
    }),
    []
  );

  return (
    <main>
      <section className="container">
        <div className="grid" style={{ gap: "36px" }}>
          <header
            className="gradient-card"
            style={{
              padding: "48px 48px 52px",
              background: heroPalette.gradient,
              boxShadow: heroPalette.shadow,
              color: "white"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "24px",
                alignItems: "flex-start"
              }}
            >
              <div style={{ maxWidth: "720px" }}>
                <div className="badge" style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}>
                  🎬 Elite Viral Studio Agent
                </div>
                <h1 style={{ fontSize: "3rem", marginTop: "18px", marginBottom: "16px", lineHeight: 1.1 }}>
                  Viral YouTube Video Creation Agent
                </h1>
                <p className="tagline" style={{ color: "rgba(255,255,255,0.86)", fontSize: "1.15rem" }}>
                  Drop any story spark. Receive a monetization-ready, 15-minute cinematic blueprint engineered for
                  algorithmic dominance.
                </p>
              </div>
              <div
                style={{
                  padding: "18px 22px",
                  borderRadius: "22px",
                  background: "rgba(15, 23, 42, 0.12)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  textAlign: "right"
                }}
              >
                <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>Runtime Locked: 15 Minutes</p>
                <p style={{ opacity: 0.8 }}>Optimized for retention, CTR, and replay value.</p>
              </div>
            </div>
          </header>

          <form onSubmit={handleSubmit}>
            <div
              className="gradient-card"
              style={{
                padding: "36px",
                display: "grid",
                gap: "24px"
              }}
            >
              <label
                htmlFor="idea"
                style={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center"
                }}
              >
                <span className="pill" style={{ background: "rgba(37, 99, 235, 0.12)", color: "#1d4ed8" }}>
                  🎯 Mission Brief
                </span>
                Input Your Story Seed
              </label>
              <textarea
                id="idea"
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                rows={4}
                placeholder="Example: A shy inventor must lead a team of kids to rescue their dreams from a boredom monster."
                style={{
                  width: "100%",
                  borderRadius: "18px",
                  border: "1px solid rgba(148, 163, 184, 0.4)",
                  padding: "20px",
                  fontSize: "1.05rem",
                  resize: "vertical",
                  boxShadow: "inset 0 1px 4px rgba(15, 23, 42, 0.08)",
                  background: "rgba(255, 255, 255, 0.92)"
                }}
              />
              <button type="submit" className="cta-button" disabled={isGenerating} style={{ opacity: isGenerating ? 0.7 : 1 }}>
                {isGenerating ? "Engineering the Cinematic Blueprint…" : "Generate Viral Production Plan"}
              </button>
            </div>
          </form>

          <div className="output">
            <div className="section-heading">
              <span>🎯</span>
              <span>1. VIRAL VIDEO STRATEGY</span>
            </div>
            <StrategyBlock
              targetAudience={plan.targetAudience}
              emotionalTriggers={plan.emotionalTriggers}
              retentionStrategy={plan.retentionStrategy}
              trendReason={plan.trendReason}
              hookLine={plan.hookLine}
              theme={plan.theme}
              setting={plan.setting}
            />

            <div className="separator" />

            <div className="section-heading">
              <span>🎬</span>
              <span>2. FULL CINEMATIC SCRIPT (15 MIN)</span>
            </div>
            <ScriptBlock acts={plan.script.acts} />

            <div className="separator" />

            <div className="section-heading">
              <span>🎥</span>
              <span>3. SCENE-BY-SCENE VISUAL PROMPTS</span>
            </div>
            <VisualBlock scenes={plan.script.acts.flatMap((act) => act.scenes)} />

            <div className="separator" />

            <div className="section-heading">
              <span>🗣️</span>
              <span>4. CHARACTER VOICE DESIGN</span>
            </div>
            <VoiceBlock voices={plan.voiceDesign} />

            <div className="separator" />

            <div className="section-heading">
              <span>🔊</span>
              <span>5. SOUND DESIGN (100% COPYRIGHT-FREE)</span>
            </div>
            <SoundBlock soundDesign={plan.soundDesign} />

            <div className="separator" />

            <div className="section-heading">
              <span>⚡</span>
              <span>6. VIRAL RETENTION BOOSTERS</span>
            </div>
            <RetentionBlock retention={plan.retentionBoosters} />

            <div className="separator" />

            <div className="section-heading">
              <span>💰</span>
              <span>7. MONETIZATION OPTIMIZATION</span>
            </div>
            <MonetizationBlock monetization={plan.monetization} />

            <div className="separator" />

            <div className="section-heading">
              <span>🚫</span>
              <span>8. COPYRIGHT SAFETY RULES</span>
            </div>
            <CopyrightBlock guidelines={plan.copyright} />
          </div>
        </div>
      </section>
    </main>
  );
}

interface StrategyBlockProps {
  targetAudience: string;
  emotionalTriggers: string[];
  retentionStrategy: string[];
  trendReason: string;
  hookLine: string;
  theme: string;
  setting: string;
}

const StrategyBlock = ({
  targetAudience,
  emotionalTriggers,
  retentionStrategy,
  trendReason,
  hookLine,
  theme,
  setting
}: StrategyBlockProps) => (
  <div className="section-block">
    <h2 className="section-title">Blueprint Overview</h2>
    <p className="tagline" style={{ marginBottom: "18px" }}>
      {hookLine}
    </p>
    <div className="two-column">
      <div className="list">
        <div className="list-item">
          <span className="pill">Audience</span>
          <p>{targetAudience}</p>
        </div>
        <div className="list-item">
          <span className="pill">Theme</span>
          <p>{theme}</p>
        </div>
        <div className="list-item">
          <span className="pill">Setting</span>
          <p>{setting}</p>
        </div>
      </div>
      <div className="callout">{trendReason}</div>
    </div>
    <div className="separator" />
    <div className="two-column">
      <div>
        <h3 style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
          Emotional Triggers
        </h3>
        <ul className="list">
          {emotionalTriggers.map((trigger) => (
            <li key={trigger} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{trigger}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
          Retention Strategy
        </h3>
        <ul className="list">
          {retentionStrategy.map((strategy) => (
            <li key={strategy} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{strategy}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

interface ScriptBlockProps {
  acts: Plan["script"]["acts"];
}

const ScriptBlock = ({ acts }: ScriptBlockProps) => (
  <div className="section-block">
    <div className="grid">
      {acts.map((act) => (
        <div key={act.id} className="scene-card" style={{ padding: "24px 24px 28px" }}>
          <div className="scene-header">
            <h3>{act.title}</h3>
            <span className="pill">Act {act.id}</span>
          </div>
          <p style={{ marginBottom: "16px", color: "rgba(15, 23, 42, 0.75)" }}>{act.focus}</p>
          <div className="section-list">
            {act.scenes.map((scene) => (
              <div key={scene.id} className="scene-card" style={{ background: "rgba(255,255,255,0.92)" }}>
                <div className="scene-header">
                  <strong>{scene.minuteMark}</strong>
                  <span className="pill">{scene.duration}</span>
                </div>
                <h4 style={{ marginBottom: "8px" }}>{scene.title}</h4>
                <p style={{ marginBottom: "8px" }}>{scene.description}</p>
                <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#1d4ed8", marginBottom: "6px" }}>
                  Emotional Tone: {scene.emotionalTone.toUpperCase()} · Pacing: {scene.pacing}
                </p>
                {scene.patternInterrupt && (
                  <p style={{ fontSize: "0.9rem", marginBottom: "6px" }}>
                    <strong>Pattern Interrupt:</strong> {scene.patternInterrupt}
                  </p>
                )}
                {scene.emotionalPeak && (
                  <p style={{ fontSize: "0.9rem", marginBottom: "6px" }}>
                    <strong>Emotional Peak:</strong> {scene.emotionalPeak}
                  </p>
                )}
                {scene.cliffhanger && (
                  <p style={{ fontSize: "0.9rem", marginBottom: "6px" }}>
                    <strong>Cliffhanger:</strong> {scene.cliffhanger}
                  </p>
                )}
                <div style={{ marginTop: "12px" }}>
                  {scene.dialogue.map((line, index) => (
                    <p key={`${scene.id}-${index}`} style={{ marginBottom: "4px" }}>
                      <strong>{line.speaker}:</strong> {line.line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

interface VisualBlockProps {
  scenes: SceneBlueprint[];
}

const VisualBlock = ({ scenes }: VisualBlockProps) => (
  <div className="section-block">
    <div className="section-list">
      {scenes.map((scene) => (
        <div key={`visual-${scene.id}`} className="scene-card" style={{ background: "rgba(255,255,255,0.92)" }}>
          <div className="scene-header">
            <strong>
              Scene {scene.id}: {scene.title}
            </strong>
            <span className="pill">{scene.minuteMark}</span>
          </div>
          <ul className="list">
            <li className="list-item">
              <span style={{ color: "#1d4ed8", fontWeight: 600 }}>Character</span>
              <span>{scene.visualPrompt.characterFocus}</span>
            </li>
            <li className="list-item">
              <span style={{ color: "#1d4ed8", fontWeight: 600 }}>Camera</span>
              <span>{scene.visualPrompt.cameraAngle}</span>
            </li>
            <li className="list-item">
              <span style={{ color: "#1d4ed8", fontWeight: 600 }}>Lighting</span>
              <span>{scene.visualPrompt.lighting}</span>
            </li>
            <li className="list-item">
              <span style={{ color: "#1d4ed8", fontWeight: 600 }}>Environment</span>
              <span>{scene.visualPrompt.environment}</span>
            </li>
            <li className="list-item">
              <span style={{ color: "#1d4ed8", fontWeight: 600 }}>Action</span>
              <span>{scene.visualPrompt.action}</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  </div>
);

interface VoiceBlockProps {
  voices: VoiceBlueprint[];
}

const VoiceBlock = ({ voices }: VoiceBlockProps) => (
  <div className="section-block">
    <div className="section-list">
      {voices.map((voice) => (
        <div key={voice.character} className="scene-card" style={{ background: "rgba(255,255,255,0.92)" }}>
          <div className="scene-header">
            <strong>{voice.character}</strong>
            <span className="pill">{voice.style}</span>
          </div>
          <p style={{ marginBottom: "6px" }}>
            <strong>Gender Expression:</strong> {voice.gender}
          </p>
          <p style={{ marginBottom: "6px" }}>
            <strong>Age Tone:</strong> {voice.ageTone}
          </p>
          <p style={{ marginBottom: "6px" }}>
            <strong>Emotion Palette:</strong> {voice.emotionPalette}
          </p>
          <p style={{ marginBottom: "6px" }}>
            <strong>Speaking Speed:</strong> {voice.speakingSpeed}
          </p>
        </div>
      ))}
    </div>
  </div>
);

interface SoundBlockProps {
  soundDesign: Plan["soundDesign"];
}

const SoundBlock = ({ soundDesign }: SoundBlockProps) => (
  <div className="section-block">
    <div className="grid">
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Ambient Layers</h3>
        <ul className="list">
          {soundDesign.ambient.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Action Effects</h3>
        <ul className="list">
          {soundDesign.effects.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Score Direction</h3>
        <ul className="list">
          {soundDesign.score.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

interface RetentionBlockProps {
  retention: Plan["retentionBoosters"];
}

const RetentionBlock = ({ retention }: RetentionBlockProps) => (
  <div className="section-block">
    <div className="grid">
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Hook Lines</h3>
        <ul className="list">
          {retention.hookLines.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Suspense Moments</h3>
        <ul className="list">
          {retention.suspenseMoments.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Emotional Dialogues
        </h3>
        <ul className="list">
          {retention.emotionalDialogues.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Open Loops</h3>
        <ul className="list">
          {retention.openLoops.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

interface MonetizationBlockProps {
  monetization: Plan["monetization"];
}

const MonetizationBlock = ({ monetization }: MonetizationBlockProps) => (
  <div className="section-block">
    <div className="grid">
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Ad-Safe Timing</h3>
        <ul className="list">
          {monetization.adSafeMoments.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Mid-Roll Placement</h3>
        <ul className="list">
          {monetization.midRolls.map((roll) => (
            <li key={roll.timestamp} className="list-item">
              <span style={{ color: "#1d4ed8", fontWeight: 600 }}>{roll.timestamp}</span>
              <span>{roll.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Child-Safe Compliance
        </h3>
        <ul className="list">
          {monetization.compliance.map((item) => (
            <li key={item} className="list-item">
              <span style={{ color: "#1d4ed8" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

interface CopyrightBlockProps {
  guidelines: string[];
}

const CopyrightBlock = ({ guidelines }: CopyrightBlockProps) => (
  <div className="section-block">
    <ul className="list">
      {guidelines.map((item) => (
        <li key={item} className="list-item">
          <span style={{ color: "#1d4ed8" }}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

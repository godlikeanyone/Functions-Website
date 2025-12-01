"use client"

import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Activity, 
  Thermometer, 
  Droplets, 
  Fan, 
  BarChart3, 
  Zap, 
  Network, 
  ArrowRight,
  TrendingDown,
  Users,
  Building2,
  Cpu
} from "lucide-react"
import { useEffect, useState } from "react"

export default function PlatformPage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  // 模拟的双语结构，目前填充英文内容
  const content = {
    en: {
      hero: {
        eyebrow: "AI Smart Energy Optimization Platform",
        title: "Smarter Cooling, Lower Energy",
        description:
          "Apply advanced algorithms to analyze and control central chiller plants in real time. By transforming traditional systems into intelligent networks, we dynamically adjust chillers, pumps, and towers to maintain comfort while cutting energy use and carbon emissions.",
        cta: "Request Demo",
      },
      // 内核运作逻辑：感知-预测-决策-优化
      workflow: {
        title: "Closed-Loop Intelligence",
        description: "A continuous cycle of self-learning architecture combining neural networks and expert rules.",
        steps: [
          {
            step: "01",
            title: "Perception",
            desc: "Collects real-time minute-level data from BMS, IoT sensors, and weather forecasts.",
            icon: Activity
          },
          {
            step: "02",
            title: "Prediction",
            desc: "Simulates cooling load and equipment performance curves using Deep Learning models.",
            icon: Brain
          },
          {
            step: "03",
            title: "Decision",
            desc: "Calculates optimal staging, temperature setpoints, and frequency settings.",
            icon: Cpu
          },
          {
            step: "04",
            title: "Optimization",
            desc: "Executes precise control commands to achieve peak system efficiency.",
            icon: Zap
          }
        ]
      },
      // 深度节能机理 (原本的表格内容)
      mechanisms: {
        title: "Deep Energy-Saving Mechanisms",
        description: "Intelligent coordination delivers 8–10% total plant energy savings by targeting specific inefficiencies.",
        items: [
          {
            id: "chiller",
            title: "Chiller Optimization",
            icon: Thermometer,
            logic: "Neural network models analyze COP vs. Load Rate. Automatically raises outlet temperature by 1–2℃ based on demand.",
            saving: "≈ 4%",
            color: "text-blue-500",
            bg: "bg-blue-500/10"
          },
          {
            id: "pump",
            title: "Circulating Water Pump",
            icon: Droplets,
            logic: "AI frequency optimization maintains constant temperature difference (Delta-T), avoiding 'small temperature difference syndrome'.",
            saving: "≈ 3%",
            color: "text-cyan-500",
            bg: "bg-cyan-500/10"
          },
          {
            id: "tower",
            title: "Cooling Tower",
            icon: Fan,
            logic: "Joint optimization of fan and pump 'combined efficiency'. Every 1°C decrease in approach temperature yields significant savings.",
            saving: "≈ 2%",
            color: "text-sky-500",
            bg: "bg-sky-500/10"
          }
        ]
      },
      // 技术架构特点
      features: {
        title: "Architecture & Integration",
        items: [
          { title: "Plug-and-Play", desc: "Compatible with existing BMS/PLC for seamless deployment." },
          { title: "Small-Model Algorithms", desc: "Lightweight simulation for rapid edge inference." },
          { title: "Data Visibility", desc: "100% paperless operation with visualized dashboards." },
        ]
      },
      // 案例数据 (Case Studies)
      results: {
        title: "Proven Impact",
        description: "Real-world results from pharmaceutical, commercial, and retail deployments.",
        cases: [
          {
            client: "Shanghai Hines 1MP",
            metric: "6%",
            label: "Total Energy Reduction",
            desc: "Achieved during initial phase, validating AI stability under consistent load conditions.",
            icon: Building2
          },
          {
            client: "Fresenius Kabi (Pharma)",
            metric: "15%",
            label: "Annual Energy Savings",
            desc: "Optimized two chiller plants, lowering electricity costs by approx. RMB 2 Million.",
            icon: TrendingDown
          },
          {
            client: "Phase 4 Expansion",
            metric: "+17%",
            label: "Efficiency Gain",
            desc: "System COP improved from 4.21 to 4.83 within just four months of optimization.",
            icon: BarChart3
          },
          {
            client: "Metro China",
            metric: "55%",
            label: "Staffing Reduction",
            desc: "IoT integration & digital work-orders enabled 100% paperless operations nationwide.",
            icon: Users
          }
        ]
      }
    },
    // 如需中文版，可在此处扩展 zh 结构
    zh: {} 
  }

  // Fallback to English content
  const t = content.en

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* 1. HERO SECTION */}
      {/* 设计意图：干净、中心化，强调“AI”与“节能”的结合。背景使用微弱的网格和蓝光。 */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="absolute inset-0 opacity-30">
          {/* 这里使用了调整后的科技蓝光斑，更显眼 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.25),transparent_60%)]" />
          {/* 添加网格背景增加技术感 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full">
            <Brain className="h-4 w-4 text-sky-500" />
            <span className="text-sm font-medium text-sky-600 dark:text-sky-400 tracking-wide uppercase">
              {t.hero.eyebrow}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed mb-10">
            {t.hero.description}
          </p>
          
          {/* Dashboard Placeholder Diagram */}
          {/* 这是一个占位区域，用于放平台的主界面截图 (Dashboard UI) */}
          <div className="relative w-full aspect-[16/9] bg-muted/50 rounded-xl border border-border/50 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/40 transition-colors group-hover:text-muted-foreground/60">
              <Network className="h-20 w-20 mb-4 stroke-1" />
              <p className="font-medium uppercase tracking-widest text-sm">Platform Dashboard UI Preview</p>
              <p className="text-xs mt-2">Visualization of Real-time COP, Cooling Load, and Equipment Status</p>
            </div>
             {/* <img src="/dashboard-mockup.png" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover" /> */}
          </div>
        </div>
      </section>


      {/* 2. HOW IT WORKS (The AI Loop) */}
      {/* 设计意图：将“感知-预测-决策-优化”设计为横向流程，强调闭环控制。 */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.workflow.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.workflow.description}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* 装饰性连接线 (仅在大屏显示) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

            {t.workflow.steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center mb-6 z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:shadow-lg">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground/50 mb-2 tracking-widest">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* 3. DEEP SAVING MECHANISMS */}
      {/* 设计意图：这是技术内核，将原来的表格转化为三个高权重的卡片。 */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* 背景装饰：左侧的模糊光斑 */}
        <div className="absolute top-0 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* 左侧：文案与架构图 */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                {t.mechanisms.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.mechanisms.description}
              </p>
              
              <div className="space-y-6 pt-4">
                {t.features.items.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Architecture Diagram Placeholder */}
              <div className="mt-8 aspect-[4/3] bg-muted/30 rounded-xl border border-dashed border-border flex flex-col items-center justify-center p-6 text-center">
                 <Network className="h-12 w-12 text-muted-foreground/20 mb-3" />
                 <span className="text-xs font-mono text-muted-foreground uppercase">System Architecture Diagram</span>
                 <span className="text-[10px] text-muted-foreground/60 mt-1">(Neural Network + Expert Rules + Self-Learning)</span>
              </div>
            </div>

            {/* 右侧：三个机理卡片 (Chiller, Pump, Tower) */}
            <div className="lg:col-span-7 grid gap-6">
              {t.mechanisms.items.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.id} className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-all hover:shadow-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded-lg ${item.bg}`}>
                                <Icon className={`h-6 w-6 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                         </div>
                         <p className="text-muted-foreground text-sm mb-4 leading-relaxed border-l-2 border-border pl-4">
                           {item.logic}
                         </p>
                      </div>
                      
                      {/* 右侧：节能数据展示 */}
                      <div className="text-right flex-shrink-0">
                         <div className="text-sm text-muted-foreground mb-1">Typical Saving</div>
                         <div className={`text-3xl md:text-4xl font-bold ${item.color}`}>{item.saving}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>


      {/* 4. CASE STUDIES (Proven Results) */}
      {/* 设计意图：深色/高对比区域，展示实打实的数据。使用 Bento Grid 风格展示 4 个案例。 */}
      <section className="py-24 bg-slate-950 text-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
               <div className="text-sky-400 font-bold mb-2 uppercase tracking-widest text-xs">Application Value</div>
               <h2 className="text-3xl md:text-4xl font-bold">{t.results.title}</h2>
               <p className="text-slate-400 mt-4 max-w-xl">{t.results.description}</p>
            </div>
            <Button variant="outline" className="text-black border-slate-700 hover:bg-slate-800 hover:text-white transition-colors">
              View All Cases <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.results.cases.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/30 transition-colors flex flex-col justify-between h-full">
                   <div>
                      <div className="flex justify-between items-start mb-6">
                        <Icon className="h-6 w-6 text-sky-500" />
                        {/* 模拟增长曲线图 */}
                        <div className="h-8 w-16 opacity-30">
                           <svg viewBox="0 0 100 40" className="stroke-sky-400 stroke-2 fill-none">
                              <path d="M0 35 Q 20 35, 40 20 T 100 5" />
                           </svg>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">{item.metric}</div>
                      <div className="text-sm font-medium text-sky-400 mb-4">{item.label}</div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                   </div>
                   <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono uppercase tracking-wide">
                      {item.client}
                   </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}

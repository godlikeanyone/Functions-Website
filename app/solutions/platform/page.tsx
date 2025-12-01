"use client"

import { Button } from "@/components/ui/button"
import {
  BrainCircuit,
  Database,
  LineChart,
  Settings2,
  Snowflake,
  Droplets,
  Wind,
  CheckCircle2,
  ArrowRight,
  Zap,
  Network,
  BarChart3
} from "lucide-react"
import { useEffect, useState } from "react"

export default function PlatformPage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "AI Smart Energy Optimization Platform",
        title: "Smarter Cooling, Lower Energy",
        description:
          "Transform your central chiller plant into an intelligent network. Our platform applies advanced AI algorithms to perceive, predict, and optimize operations in real-time, delivering measurable carbon reduction.",
        cta: "Request Demo",
      },
      process: {
        title: "The AI Closed-Loop Model",
        description: "Moving beyond manual adjustments, our engine operates on a continuous 'Perception – Prediction – Decision – Optimization' cycle to ensure peak efficiency every minute.",
        steps: [
          { icon: Database, title: "Perception", desc: "Real-time data ingestion of load, weather, & equipment status." },
          { icon: BrainCircuit, title: "Prediction", desc: "AI models forecast cooling demand and system response." },
          { icon: Settings2, title: "Decision", desc: "Calculates optimal setpoints for chillers, pumps, and towers." },
          { icon: CheckCircle2, title: "Optimization", desc: "Automated execution for max efficiency & stability." },
        ]
      },
      savings: {
        title: "Deep Energy-Saving Mechanism",
        description: "Intelligent coordination delivers 8–10% total plant energy savings by targeting the three critical components of your cooling system.",
        cards: [
          {
            icon: Snowflake,
            component: "Chiller / Heat Pump",
            logic: "Neural network models analyze COP vs. Load. Automatically optimizes outlet temperature (+1–2℃) without compromising comfort.",
            value: "≈ 4%",
            label: "Energy Saving",
          },
          {
            icon: Droplets,
            component: "Circulating Pumps",
            logic: "Combines VFD with AI frequency optimization to maintain constant temperature difference, solving the 'small delta-T' syndrome.",
            value: "≈ 3%",
            label: "Energy Saving",
          },
          {
            icon: Wind,
            component: "Cooling Towers",
            logic: "Joint optimization of fan and pump 'combined efficiency'. Dynamic adjustment based on approach temperature.",
            value: "≈ 2%",
            label: "Energy Saving",
          },
        ]
      },
      features: {
        title: "Technical Architecture",
        list: [
          {
            icon: Network,
            title: "Self-Learning Architecture",
            desc: "Combines neural networks with expert rules. The system gets smarter over time, adapting to equipment aging and seasonal shifts."
          },
          {
            icon: Zap,
            title: "Plug-and-Play Integration",
            desc: "Compatible with existing BMS (Modbus/BACnet). Seamless deployment without ripping out your current control infrastructure."
          },
          {
            icon: BarChart3,
            title: "100% Visibility",
            desc: "Transforms black-box operations into visualized data insights, ensuring operational stability and traceable performance."
          },
        ]
      },
      results: {
        title: "Proven Impact",
        stats: [
          { value: "15%", label: "Annual Energy Savings", desc: "Fresenius Kabi (Pharma)" },
          { value: "55%", label: "Staff Reduction", desc: "Metro China (via Digital Ops)" },
          { value: "17%", label: "Efficiency Gain", desc: "System COP 4.21 → 4.83" },
          { value: "100%", label: "Paperless Op", desc: "Digital Workflow Integration" },
        ]
      }
    },
    zh: {
      hero: {
        eyebrow: "AI 智慧能源优化平台",
        title: "更智慧的制冷，更低的能耗",
        description:
          "将传统的中央空调冷站转化为智能网络。我们的平台应用先进的 AI 算法，实时感知、预测并优化系统运行，实现可衡量的碳减排与能效提升。",
        cta: "预约演示",
      },
      process: {
        title: "AI 闭环控制模型",
        description: "超越传统的人工调节，我们的引擎基于“感知 – 预测 – 决策 – 优化”的连续闭环运行，确保每一分钟都处于最佳能效点。",
        steps: [
          { icon: Database, title: "感知 (Perception)", desc: "实时采集负荷、天气及设备运行状态数据。" },
          { icon: BrainCircuit, title: "预测 (Prediction)", desc: "AI 模型预测冷负荷需求及系统响应曲线。" },
          { icon: Settings2, title: "决策 (Decision)", desc: "计算冷机、水泵及冷却塔的最佳运行设定点。" },
          { icon: CheckCircle2, title: "优化 (Optimization)", desc: "自动化执行指令，平衡能效与系统稳定性。" },
        ]
      },
      savings: {
        title: "深度节能机理",
        description: "通过对制冷系统三大内核组件的智能协同，实现整站 8–10% 的综合节能效果。",
        cards: [
          {
            icon: Snowflake,
            component: "冷水机组 / 热泵",
            logic: "基于 COP 与负荷率关系的神经网络模型。自动优化出水温度 (+1–2℃)，在保证舒适度的前提下提升效率。",
            value: "≈ 4%",
            label: "节能潜力",
          },
          {
            icon: Droplets,
            component: "循环水泵",
            logic: "结合变频驱动与 AI 频率优化，维持恒定温差，有效解决“小温差综合症”导致的能耗浪费。",
            value: "≈ 3%",
            label: "节能潜力",
          },
          {
            icon: Wind,
            component: "冷却塔",
            logic: "风机与水泵“联合效率”的协同优化。基于逼近温度（Approach Temp）动态调整运行策略。",
            value: "≈ 2%",
            label: "节能潜力",
          },
        ]
      },
      features: {
        title: "技术架构亮点",
        list: [
          {
            icon: Network,
            title: "自学习进化架构",
            desc: "融合神经网络模型与专家规则。系统随时间推移变得更聪明，自动适应设备老化和季节变化。"
          },
          {
            icon: Zap,
            title: "即插即用集成",
            desc: "兼容现有 BMS 系统（Modbus/BACnet）。无需推翻现有控制基础设施即可实现无缝部署。"
          },
          {
            icon: BarChart3,
            title: "100% 可视化运维",
            desc: "将黑盒操作转化为可视化的数据洞察，在提升能效的同时确保运营稳定性和可追溯性。"
          },
        ]
      },
      results: {
        title: "典型项目成果",
        stats: [
          { value: "15%", label: "年均节能率", desc: "费森尤斯卡比 (制药)" },
          { value: "55%", label: "运维人力缩减", desc: "麦德龙中国 (数字化运维)" },
          { value: "17%", label: "能效提升", desc: "系统能效从 4.21 提升至 4.83" },
          { value: "100%", label: "无纸化运营", desc: "全流程数字化工单集成" },
        ]
      }
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        {/* 使用你之前选定的蓝色光斑方案 */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <BrainCircuit className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500">{t.hero.eyebrow}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-balance leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {t.hero.cta}
                </Button>
                <Button variant="outline" size="lg">
                  Learn more
                </Button>
              </div>
            </div>
            
            {/* Abstract Platform Visualization Placeholder */}
            <div className="relative aspect-video lg:aspect-square bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                 {/* 占位：建议放置一个 Dashboard 截图或者 3D 数据流动的抽象图 */}
                 <div className="text-center space-y-4">
                    <LineChart className="h-20 w-20 text-blue-500/50 mx-auto" />
                    <p className="text-slate-500 text-sm uppercase tracking-widest">Platform Interface UI</p>
                 </div>
              </div>
              {/* Overlay elements to simulate UI depth */}
              <div className="absolute bottom-6 left-6 right-6 h-1/3 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-600/50 p-4">
                 <div className="h-2 w-1/3 bg-blue-500/30 rounded mb-2"></div>
                 <div className="h-2 w-2/3 bg-slate-600/30 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Logic (Process Flow) */}
      <section className="py-20 border-y border-border/40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">{t.process.title}</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">{t.process.description}</p>
          </div>

          {/* Process Steps Visual */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10" />

            {t.process.steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  <div className="h-24 w-24 rounded-full bg-background border border-border shadow-sm flex items-center justify-center mb-6 z-10 transition-colors group-hover:border-blue-500/50 group-hover:shadow-blue-500/10">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Deep Energy Saving Mechanism (The Table Converted to Cards) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.savings.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">{t.savings.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.savings.cards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div key={idx} className="flex flex-col bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-8">
                    <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                       <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                       <div className="text-3xl font-bold text-blue-600">{card.value}</div>
                       <div className="text-xs text-muted-foreground uppercase font-medium">{card.label}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{card.component}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {card.logic}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Architecture & Features */}
      <section className="py-24 bg-slate-950 text-slate-50 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 p-12 opacity-10">
            <Network className="h-96 w-96" />
         </div>

         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.features.title}</h2>
                  <div className="space-y-8">
                    {t.features.list.map((item, i) => {
                      const Icon = item.icon
                      return (
                        <div key={i} className="flex gap-4">
                           <div className="mt-1 flex-shrink-0">
                              <div className="h-10 w-10 rounded bg-slate-800 flex items-center justify-center border border-slate-700">
                                 <Icon className="h-5 w-5 text-blue-400" />
                              </div>
                           </div>
                           <div>
                              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                      )
                    })}
                  </div>
               </div>
               
               {/* Feature Image Placeholder */}
               <div className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <p className="text-slate-600 text-sm uppercase tracking-widest">Architecture Diagram</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 5: Proven Impact (Stats Bar) */}
      <section className="py-20 border-t border-border">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold">{t.results.title}</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
               {t.results.stats.map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-muted/30 rounded-xl">
                     <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                     <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
                     <div className="text-xs text-muted-foreground">{stat.desc}</div>
                  </div>
               ))}
            </div>

            <div className="mt-16 text-center">
               <p className="text-lg text-muted-foreground mb-6">
                  Ready to optimize your building performance?
               </p>
               <Button size="lg" className="group">
                  Partner with us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
               </Button>
            </div>
         </div>
      </section>
    </div>
  )
}

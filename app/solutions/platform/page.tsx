"use client"

import { Button } from "@/components/ui/button"
import {
  BrainCircuit, // AI/算法
  Zap,          // 能源
  Thermometer,  // 温度/Chiller
  Wind,         // 冷却塔
  Droplets,     // 水泵
  Activity,     // 监测
  Network,      // 神经网络/连接
  BarChart3,    // 数据图表
  ArrowRight,
  RefreshCcw,   // 闭环
  Layers        // 架构
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
          "An intelligent control brain for central chiller plants. By learning from operational data, it dynamically adjusts chillers, pumps, and cooling towers to maintain comfort while cutting energy use and carbon emissions.",
        cta: "Request a Demo",
      },
      loop: {
        title: "The Intelligence Loop",
        description: "A closed-loop 'Perception – Prediction – Decision – Optimization' model that continuously fine-tunes operation to achieve peak system efficiency.",
        steps: [
          { title: "Perception", desc: "Real-time data collection & load monitoring" },
          { title: "Prediction", desc: "Forecasting weather & equipment performance" },
          { title: "Decision", desc: "Calculating optimal staging & setpoints" },
          { title: "Optimization", desc: "Automated execution & feedback" },
        ]
      },
      mechanisms: {
        title: "Deep Energy-Saving Mechanism",
        description: "Intelligent coordination delivers 8–10% total plant energy savings by targeting the three core components.",
        cards: [
          {
            icon: Thermometer,
            equipment: "Chillers",
            logic: "Neural network optimization based on COP & load rate.",
            action: "Optimizes outlet temp (+1–2℃)",
            saving: "≈ 4%",
          },
          {
            icon: Droplets,
            equipment: "Water Pumps",
            logic: "AI frequency optimization + VFD control.",
            action: "Eliminates 'small temp difference' syndrome",
            saving: "≈ 3%",
          },
          {
            icon: Wind,
            equipment: "Cooling Towers",
            logic: "Joint optimization of fan & pump efficiency.",
            action: "Lowers approach temp (-1°C)",
            saving: "≈ 2%",
          },
        ]
      },
      features: {
        title: "Technical Architecture & Value",
        items: [
          {
            icon: BrainCircuit,
            title: "AI-Driven Small Models",
            desc: "Simulates performance using minute-level data to recommend precise operational settings."
          },
          {
            icon: Network,
            title: "Self-Learning Architecture",
            desc: "Combines neural networks and expert rules, improving accuracy automatically over time."
          },
          {
            icon: Layers,
            title: "Plug-and-Play Integration",
            desc: "Seamlessly compatible with existing BMS and IoT protocols (BACnet, Modbus, MQTT)."
          },
          {
            icon: Zap,
            title: "Quantifiable Results",
            desc: "Transforms traditional systems into intelligent networks, delivering measurable electricity cost reductions."
          }
        ]
      },
      cases: {
        title: "Proven Results",
        items: [
          {
            metric: "17%",
            label: "Efficiency Gain",
            desc: "Fresenius Kabi (Phase 4): System efficiency improved from 4.21 to 4.83 within just four months."
          },
          {
            metric: "15%",
            label: "Energy Savings",
            desc: "Fresenius Kabi (Pharma): Two chiller plants saved ~RMB 2M annually in electricity costs."
          },
          {
            metric: "6%",
            label: "Initial Reduction",
            desc: "Shanghai Hines 1MP: Achieved immediate savings during the initial AI deployment phase."
          },
          {
            metric: "55%",
            label: "Staff Reduction",
            desc: "Metro China: IoT integration enabled 100% paperless operation and optimized maintenance staffing."
          },
        ]
      }
    },
    zh: {
      hero: {
        eyebrow: "AI 智慧能源优化平台",
        title: "更智慧的制冷，更低的能耗",
        description:
          "中央空调机房的智能控制大脑。通过从运行数据中学习，动态调节冷机、水泵和冷却塔，在保持舒适度的同时大幅降低能耗和碳排放。",
        cta: "申请演示",
      },
      loop: {
        title: "智能闭环模型",
        description: "基于“感知 – 预测 – 决策 – 优化”的闭环模型，持续微调运行状态以实现系统效率峰值。",
        steps: [
          { title: "感知 (Perception)", desc: "实时数据采集与负荷监测" },
          { title: "预测 (Prediction)", desc: "预测天气变化与设备性能" },
          { title: "决策 (Decision)", desc: "计算最佳加减机与设定点" },
          { title: "优化 (Optimization)", desc: "自动化执行与效果反馈" },
        ]
      },
      mechanisms: {
        title: "深度节能机制",
        description: "通过对三大内核组件的智能协同，实现机房整体节能 8–10%。",
        cards: [
          {
            icon: Thermometer,
            equipment: "冷水机组",
            logic: "基于 COP 和负荷率的神经网络优化。",
            action: "优化出水温度 (+1–2℃)",
            saving: "≈ 4%",
          },
          {
            icon: Droplets,
            equipment: "循环水泵",
            logic: "AI 频率优化 + 变频驱动控制。",
            action: "消除“小温差综合症”",
            saving: "≈ 3%",
          },
          {
            icon: Wind,
            equipment: "冷却塔",
            logic: "风机与水泵“联合效率”优化。",
            action: "降低逼近温度 (-1°C)",
            saving: "≈ 2%",
          },
        ]
      },
      features: {
        title: "技术架构与价值",
        items: [
          {
            icon: BrainCircuit,
            title: "AI 驱动的小模型算法",
            desc: "利用分钟级数据模拟性能，提供精确的运行建议或自动控制指令。"
          },
          {
            icon: Network,
            title: "自学习架构",
            desc: "融合神经网络与专家规则，随着时间推移自动提高预测精度。"
          },
          {
            icon: Layers,
            title: "即插即用集成",
            desc: "与现有的 BMS 和 IoT 协议（BACnet, Modbus, MQTT）无缝兼容。"
          },
          {
            icon: Zap,
            title: "可量化的成果",
            desc: "将传统水系统转化为智能网络，提供可测量的电力成本降低。"
          }
        ]
      },
      cases: {
        title: "实证效果",
        items: [
          {
            metric: "17%",
            label: "效率提升",
            desc: "费森尤斯卡比 (四期): 四个月内系统能效从 4.21 提升至 4.83。"
          },
          {
            metric: "15%",
            label: "能源节约",
            desc: "费森尤斯卡比 (制药): 两个冷站年均节省电费约 200 万人民币。"
          },
          {
            metric: "6%",
            label: "初始降幅",
            desc: "上海 Hines One Museum Place: 在 AI 部署初期即实现显着节能。"
          },
          {
            metric: "55%",
            label: "人力优化",
            desc: "麦德龙中国: IoT 集成实现了 100% 无纸化运营，优化了现场维护人员配置。"
          },
        ]
      }
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        {/* Sky Blue Radial*/}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/20 via-blue-500/10 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full backdrop-blur-sm">
            <BrainCircuit className="h-4 w-4 text-sky-500" />
            <span className="text-sm font-medium text-sky-500 uppercase tracking-wide">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance tracking-tight">{t.hero.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed mb-10">
            {t.hero.description}
          </p>
          
          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto aspect-[16/9] bg-muted/50 rounded-xl border border-border/50 shadow-2xl overflow-hidden group">
            <img 
                src="/digital-platform-dashboard.webp" 
                alt="AI Smart Energy Optimization Platform Dashboard" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            
            {/* Decorative overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 2: How It Works (The Loop) */}
      <section className="py-24 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.loop.title}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t.loop.description}</p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop Only) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

                {t.loop.steps.map((step, i) => (
                    <div key={i} className="relative flex flex-col items-center text-center z-10">
                        <div className="h-24 w-24 rounded-full bg-background border-4 border-card shadow-lg flex items-center justify-center mb-6 group hover:border-sky-500/30 transition-colors duration-300">
                             {/* Icons based on index */}
                             {i === 0 && <Activity className="h-8 w-8 text-sky-500" />}
                             {i === 1 && <BarChart3 className="h-8 w-8 text-sky-500" />}
                             {i === 2 && <BrainCircuit className="h-8 w-8 text-sky-500" />}
                             {i === 3 && <RefreshCcw className="h-8 w-8 text-sky-500" />}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 3: Deep Energy Saving Mechanism (The Table Transformed) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16">
                <div className="text-xs font-bold text-sky-500 mb-2 uppercase tracking-widest">Core Logic</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.mechanisms.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl">{t.mechanisms.description}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {t.mechanisms.cards.map((card, i) => {
                    const Icon = card.icon
                    return (
                        <div key={i} className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-sky-500/10 rounded-lg text-sky-500">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Saving</div>
                                    <div className="text-3xl font-bold text-sky-500">{card.saving}</div>
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4">{card.equipment}</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">Mechanism</div>
                                    <p className="text-sm leading-relaxed">{card.logic}</p>
                                </div>
                                <div className="pt-4 border-t border-border/50">
                                    <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">Optimization Action</div>
                                    <p className="text-sm font-medium text-foreground">{card.action}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      {/* SECTION 4: Architecture & Features (Bento Grid) */}
      <section className="py-24 bg-muted/30">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 {/* Left: Text Grid */}
                 <div className="grid sm:grid-cols-2 gap-8">
                    {t.features.items.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <div key={i} className="flex flex-col gap-3">
                                <div className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        )
                    })}
                 </div>

                 {/* Right: Architecture Diagram Placeholder */}
                 <div className="relative aspect-square lg:aspect-[4/3] bg-card rounded-2xl border border-border shadow-xl overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                         <Network className="h-20 w-20 text-muted-foreground/20 mx-auto mb-4" />
                         <p className="text-muted-foreground/50 font-medium uppercase tracking-widest">System Architecture Diagram</p>
                         {/* <img src="/architecture-diagram.webp" alt="Architecture" className="absolute inset-0 w-full h-full object-contain p-8" /> */}
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* SECTION 5: Case Study Results (Metrics) */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.cases.title}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.cases.items.map((item, i) => (
                    <div key={i} className="bg-card p-6 rounded-xl border border-border hover:border-primary/40 transition-colors">
                        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
                            {item.metric}
                        </div>
                        <div className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-4">
                            {item.label}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button size="lg" className="rounded-full px-8 bg-sky-600 hover:bg-sky-500 text-white">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
      </section>
    </div>
  )
}

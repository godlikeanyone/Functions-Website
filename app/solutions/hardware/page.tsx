"use client"

import { Button } from "@/components/ui/button"
import {
  Zap,
  Wind,
  RefreshCw,
  ShieldCheck,
  Cpu,
  Gauge,
  Maximize,
  Activity,
  Wifi,
  LineChart,
  Award,
  MonitorSmartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function HardwarePage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "Hardware",
        title: "Engineering the Invisible",
        description:
          "From proprietary MESP filtration to digital twin analytics, our hardware ecosystem is designed to make buildings breathe, think, and perform.",
      },
      sections: {
        mesp: {
          tag: "Core Technology",
          title: "MESP Filtration",
          description:
            "Next generation MESP+ by Functions is a highly efficient & environmentally friendly filtration technology desgined for building HVAC systems. Utilizing patented advanced Micro Electrostatic Precipitation (MESP+) technology, it delivers superior air quality without compromising energy performance.",
          highlights: [
            { title: "Advanced Technology", text: "Uses Micro-Electrostatic fields to capture sub-micron particles." },
            { title: "Comprehensive Protection", text: "Removes PM2.5, allergens, dust, and airborne pathogens." },
            { title: "Modular Design", text: "Seamlessly retrofits into existing AHUs and Fan Coil Units (FCU)." },
          ],
          cta: "Discover MESP+",
          features: [
            {
              icon: Zap,
              title: "High Efficiency",
              text: ">95–99% removal of PM2.5, bacteria, and viruses.",
            },
            {
              icon: Wind,
              title: "Low Energy",
              text: "Up to 50% reduction in fan power versus HEPA systems.",
            },
            {
              icon: RefreshCw,
              title: "Washable & Reusable",
              text: " significantly lower operating costs and waste generation.",
            },
            {
              icon: ShieldCheck,
              title: "Safe & Silent",
              text: "No arcing, no ozone, compliant with ASHRAE standards.",
            },
          ],
        },
        ventilation: {
          tag: "Commercial Systems",
          title: "Ventilation & Purification",
          description:
            "Our comprehensive suite of solutions—including wall-mounted ventilators, Energy Recovery Ventilators (ERV), and commercial in-ceiling purifiers—delivers pristine fresh air while minimizing energy loss. We combine automated control with high-efficiency filtration to create smarter, healthier indoor environments.",
          cta: "Explore Ventilation Solutions",
          features: [
            "Energy Recovery (ERV): High-efficiency heat exchange cores recover thermal energy to precondition fresh air, reducing HVAC energy load by up to 80%.",
            "Versatile Form Factors: A complete product lineup featuring wall-mounted, ceiling-concealed, and cabinet-style units to fit any architectural requirement.",
            "Integrated Purification: Equipped with medical-grade HEPA or MESP+ filtration to strictly eliminate particulates and pathogens from incoming fresh air.",
            "Smart Automation: Intelligent sensors monitor real-time CO2 levels and occupancy to adjust airflow on demand, optimizing both air quality and efficiency.",
          ],
        },
        monitoring: {
          tag: "Digital Intelligence",
          title: "Monitoring & Digital Analytics",
          description:
            "Turning invisible factors like air, comfort, and energy into actionable insights. Designed for consultants, engineers, and facility teams to measure, manage, and prove performance.",
          cta: "View Analytics Platform",
          subFeatures: [
            {
              icon: Activity,
              title: "Comprehensive Measurement",
              text: "Tracks 16 key parameters (PM₂.₅, CO₂, TVOC, etc.) for a complete environmental picture.",
            },
            {
              icon: Wifi,
              title: "Seamless Integration",
              text: "Wi-Fi, LoRa, MQTT, BACnet, and Modbus integration with BMS and IoT platforms.",
            },
            {
              icon: LineChart,
              title: "Data-Driven Performance",
              text: "Supports demand-based ventilation, reducing HVAC runtime and maintenance costs.",
            },
            {
              icon: Award,
              title: "Certification Ready",
              text: "Live data and alerts to meet WELL, RESET, LEED, and Fitwel criteria.",
            },
            {
              icon: MonitorSmartphone,
              title: "Digital Platform",
              text: "Intuitive dashboards, analytics, and automated reporting for ESG outcomes.",
            },
          ],
        },
      },
    },
    zh: {
      hero: {
        eyebrow: "硬件",
        title: "重塑隐形环境",
        description: "从自研 MESP 过滤技术到数字孪生分析，我们的硬件生态系统旨在让建筑会呼吸、会思考、且性能卓越。",
      },
      sections: {
        mesp: {
          tag: "内核技术",
          title: "MESP 过滤技术",
          description:
            "下一代 MESP+（由 Functions 推出） 是一种专为建筑暖通空调（HVAC）系统设计的高效、环保型空气过滤技术。该技术采用获得专利的先进微型静电沉降（Micro Electrostatic Precipitation，MESP+）技术，在不牺牲能源性能的前提下，显着提升空气质量。",
          // 新增中文 highlights 数据
          highlights: [
            { title: "先进技术", text: "利用微静电场高效捕获亚微米级颗粒物。" },
            { title: "全面防护", text: "有效去除 PM2.5、过敏原、灰尘及空气传播的病原体。" },
            { title: "模块化设计", text: "可无缝改造适配现有的空气处理机组 (AHU) 和风机盘管 (FCU)。" },
          ],
          cta: "探索 MESP+",
          features: [
            {
              icon: Zap,
              title: "高效净化",
              text: "PM2.5、细菌和病毒的去除率 >95–99%。",
            },
            {
              icon: Wind,
              title: "低能耗",
              text: "与 HEPA 系统相比，风机能耗降低高达 50%。",
            },
            {
              icon: RefreshCw,
              title: "可水洗重复使用",
              text: "显着降低运营成本并减少废物产生。",
            },
            {
              icon: ShieldCheck,
              title: "安全静音",
              text: "无拉弧，无臭氧，符合 ASHRAE 标准。",
            },
          ],
        },
        ventilation: {
          tag: "商业系统",
          title: "商用净化与新风系统",
          description:
            "一系列旨在提升室内空气质量同时降低能耗的商用系统。我们的解决方案结合了自动控制、模块化过滤和能量回收，创造更智能、更高效的气流管理。",
          cta: "探索新风解决方案",
          features: [
            "由 CO₂ 浓度或占用率触发的智能按需通风",
            "集成 HEPA 或 MESP 过滤，用于颗粒物和病原体控制",
            "能量回收内核效率高达 60%",
            "紧凑的吸顶式设计，易于安装且干扰最小",
          ],
        },
        monitoring: {
          tag: "数字智能",
          title: "监测与数字分析",
          description:
            "将空气、舒适度和能源等不可见因素转化为可操作的洞察。专为顾问、工程师和设施团队设计，用于测量、管理和证明建筑性能。",
          cta: "查看分析平台",
          subFeatures: [
            {
              icon: Activity,
              title: "全面测量",
              text: "追踪 16 个关键参数（PM₂.₅、CO₂、TVOC等），提供完整的环境画像。",
            },
            {
              icon: Wifi,
              title: "无缝集成",
              text: "支持 Wi-Fi, LoRa, MQTT, BACnet 和 Modbus，轻松对接 BMS 和 IoT 平台。",
            },
            {
              icon: LineChart,
              title: "数据驱动性能",
              text: "支持按需通风，减少不必要的暖通空调运行时间和维护成本。",
            },
            {
              icon: Award,
              title: "认证合规",
              text: "实时数据和警报助力满足 WELL, RESET, LEED 和 Fitwel 标准。",
            },
            {
              icon: MonitorSmartphone,
              title: "数字平台",
              text: "直观的仪表板、分析和自动报告，展示可衡量的 ESG 成果。",
            },
          ],
        },
      },
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.3),transparent_50%)]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-primary tracking-wide uppercase">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance tracking-tight">{t.hero.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-24 md:gap-32 pb-32">
        {/* SECTION 1: MESP Filtration (Technology Focus) */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">
                  {t.sections.mesp.tag}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  {t.sections.mesp.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t.sections.mesp.description}
                </p>

                {/* ---Highlight List --- */}
                <ul className="space-y-3 mb-10">
                  {t.sections.mesp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground font-medium">{item.title}:</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* ---------------------------------- */}

                {/* 2x2 Grid for MESP Advantages */}
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {t.sections.mesp.features.map((feature, i) => {
                    const Icon = feature.icon
                    return (
                      <div key={i} className="p-5 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary mb-3" />
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-snug">{feature.text}</p>
                      </div>
                    )
                  })}
                </div>

                <Button variant="outline" className="group">
                  {t.sections.mesp.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Visual Area */}
              <div className="order-1 lg:order-2 relative aspect-square lg:h-[700px] bg-gradient-to-br from-muted to-muted/50 rounded-3xl overflow-hidden border border-border shadow-2xl">
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/30">
                    <img src="/mesp-filter.webp" alt="MESP Technology" className="absolute inset-0 w-full h-full object-cover" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Commercial Ventilation (System Focus) */}
        <section className="relative bg-card py-24 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Visual Area - Left side for zigzag effect */}
              <div className="relative aspect-square lg:h-[600px] bg-muted rounded-3xl overflow-hidden border border-border shadow-2xl">
                 <img 
                   src="/ventilation.webp" 
                   alt="Ventilation System" 
                   className="absolute inset-0 w-full h-full object-cover" 
                 />
              </div>

              {/* Text Content */}
              <div>
                <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">
                  {t.sections.ventilation.tag}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  {t.sections.ventilation.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t.sections.ventilation.description}
                </p>

                {/* List Style for Features */}
                <ul className="space-y-4 mb-10">
                  {t.sections.ventilation.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="default" className="group">
                  {t.sections.ventilation.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Monitoring & Analytics (Data Focus) */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left: Sticky Header / Introduction (Occupies 4 cols) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">
                  {t.sections.monitoring.tag}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  {t.sections.monitoring.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t.sections.monitoring.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="group">
                    {t.sections.monitoring.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                {/* Mini Image for Context */}
                <div className="mt-12 hidden lg:block aspect-video rounded-xl bg-muted border border-border overflow-hidden">
                    {/* Dashboard Screenshot */}
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground/20">
                        <img src="/monitor.webp" alt="Monitor"  />
                      </div>
                </div>
              </div>

              {/* Right: Feature Grid (Occupies 7 cols) */}
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  {t.sections.monitoring.subFeatures.map((feature, i) => {
                    const Icon = feature.icon
                    const isLast = i === t.sections.monitoring.subFeatures.length - 1
                    const isOddTotal = t.sections.monitoring.subFeatures.length % 2 !== 0
                    
                    return (
                      <div 
                        key={i} 
                        className={`p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                            isLast && isOddTotal ? "sm:col-span-2" : ""
                        }`}
                      >
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                           <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

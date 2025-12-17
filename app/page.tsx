"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StatsBand } from "@/components/stats-band"
import { LogoStrip } from "@/components/logo-strip"
import { CaseStudyCard } from "@/components/case-study-card"
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [locale, setLocale] = useState("en")
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    // Get locale from parent layout if needed
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "Engineering Sustainability",
        title: [
                  "Smarter buildings.",
                  "Healthier lives.",
                  "Sustainable future."
                ],
        description:
          "We help our clients balance economic efficiency, environmental responsibility, and human wellbeing — creating buildings that perform today and stand up to tomorrow.",
        cta1: "Get Started",
        cta2: "View Solutions",
      },
      problem: {
        title: ["Infrastructure", "Intelligence", "Impact"],
        subtitle: "A holistic approach to healthier, smarter and greener built environments.",
        panels: [
          {
            title: "Hardware Solutions",
            detail: "Delivering advanced air and ventilation systems to enhance indoor air quality and building performance.",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg", // 记得确认图片路径
            bgPosition: "left",
            bullets: [
              "EcoFlow: Industrial-grade Micro Electrostatic Precipitation (MESP) that delivers healthy indoor air with zero consumable maintenance.",
              "SkyVent: Next generation ERV units that balance superior purified fresh air delivery with maximum thermal energy recovery.",
              "Smart Sensing: IoT-enabled environmental sensors providing the granular data foundation for building optimization."
            ],
          },
          {
            title: "Digital Platforms",
            detail: "Harnessing data intelligence to optimize energy performance and indoor environmental quality.",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg",
            bgPosition: "center",
            bullets: [
              "Centralized Monitoring: A unified dashboard visualizing real-time IEQ metrics, occupant comfort, and operational health.",
              "AI Energy Optimization: Proprietary algorithms that dynamically adjust HVAC loads to reduce carbon footprint without compromising comfort.",
              "Data-Driven Decisions: Predictive analytics that empower facility managers to anticipate needs rather than react to issues."
            ],
          },
          {
            title: "Sustainability Services",
            detail: "Guiding buildings and organizations toward a healthier, greener, and more responsible future.",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg",
            bgPosition: "right",
            bullets: [
              "Global Certification: Expert leadership for LEED, WELL, BREEAM, and RESET to validate building performance.",
              "ESG Strategy: Tailored roadmaps and reporting solutions that align corporate goals with international sustainability benchmarks.",
              "Health & Wellbeing: Holistic strategies that prioritize human-centric design to boost productivity and occupant satisfaction."
            ],
          },
        ],
      },
      companyInfo: {
        intro: "Founded in 2017 in Hong Kong, Functions delivers environmental and sustainability consultancy projects across Asia, the Subcontinent and the Middle East through a network of industry partners who excel in their regions.",
        points: [
          {
            title: "Expertise",
            detail: "Functions brings together seasoned consultants and engineers with over 40 years of combined experience in indoor environmental quality and sustainability.",
          },
          {
            title: "Capabilities",
            detail: "Functions specializes in filtration, ventilation, monitoring, digital integration, and environmental solutions to build healthier, more efficient spaces.",
          },
          {
            title: "Collaboration",
            detail: "Functions works with partners to customize, source, or co-develop solutions, supported by local communication, project management, and quality control.",
          },
          {
            title: "Solutions",
            detail: "Functions delivers end-to-end wellness and sustainability services—from planning and design to construction, retrofit, and operations.",
          },
        ],
        logos: [
          "/well.webp",
          "/leed.webp",
          "/reset.webp",
          "/breeam.webp",
          "/esg.webp",
          "/cma.webp",
          "/ashrae.webp",
        ],
      },
      cta: {
        title: "Ready to build a more sustainable future?",
        description: "Let‘s discuss how Functions could accelerate your journey",
        button: "Schedule an inquiry",
      },
    },
    zh: {
      hero: {
        eyebrow: "工程卓越",
        title: [
                  "更智能的建筑。",
                  "更健康的生活。",
                  "更可持续的未来。"
                ],
        description:
          "我们帮助客户在经济效率、环境责任和人类福祉之间取得平衡——打造既能满足当今需求又能经受住未来考验的高性能建筑。",
        description: "我们帮助客户在经济效率、环境责任和人类福祉之间取得平衡——打造既能满足当今需求又能经受住未来考验的高性能建筑。",
        cta1: "开始使用",
        cta2: "查看解决方案",
      },
      problem: {
        title: ["基建", "智能", "影响力"],
        subtitle: "打造更健康、更智能、更绿色建筑环境的全方位方案。",
        panels: [
          {
            title: "硬件解决方案",
            detail: "提供先进的空气与通风系统，全面提升室内空气质量与建筑性能。",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg",
            bgPosition: "left",
            bullets: [
              "EcoFlow: 工业级微静电沉淀 (MESP) 技术，提供零耗材维护的健康室内空气。",
              "SkyVent: 下一代全热交换 (ERV) 机组，在提供卓越净化新风的同时实现最大化热能回收。",
              "智能传感: 支持物联网的环境传感器，为建筑优化奠定精细的数据基础。"
            ],
          },
          {
            title: "数字化平台",
            detail: "利用数据智能优化能源绩效与室内环境质量。",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg",
            bgPosition: "center",
            bullets: [
              "集中监控: 统一仪表盘，实时可视化呈现 IEQ 指标、人员舒适度及运营健康状况。",
              "AI 能源优化: 专有算法动态调整暖通空调负荷，在不牺牲舒适度的前提下减少碳足迹。",
              "数据驱动决策: 预测性分析赋能设施管理者未雨绸缪，变被动响应为主动管理。"
            ],
          },
          {
            title: "可持续发展服务",
            detail: "指引建筑与组织走向更健康、更绿色、更负责任的未来。",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg",
            bgPosition: "right",
            bullets: [
              "全球认证: 提供 LEED, WELL, BREEAM 和 RESET 的专家级指导，权威验证建筑性能。",
              "ESG 策略: 定制的路线图与报告解决方案，将企业目标与国际可持续发展基准对齐。",
              "健康与福祉: 优先考虑以人为本设计的整体策略，旨在提高生产力和居住者满意度。"
            ],
          },
        ],
      },
      companyInfo: {
        intro: "Functions Ltd成立于2017年，总部位于香港，通过其在各地区表现卓越的行业合作伙伴网络，在亚洲、次大陆和中东提供环境和可持续发展咨询项目。",
        points: [
          {
            title: "专业经验",
            detail: "Functions汇集了拥有40年以上室内环境质量与可持续发展经验的资深顾问和工程师。",
          },
          {
            title: "能力",
            detail: "Functions专注于过滤、通风、监测、数字化集成及环境解决方案，打造更健康、更高效的空间。",
          },
          {
            title: "合作",
            detail: "Functions与合作伙伴共同定制、采购或联合开发解决方案，并提供本地沟通、项目管理及质量控制支持。",
          },
          {
            title: "解决方案",
            detail: "Functions提供端到端的健康与可持续服务——从规划设计到施工、改造及运营。",
          },
        ],
        logos: [
          "/well.webp",
          "/leed.webp",
          "/reset.webp",
          "/breeam.webp",
          "/esg.webp",
          "/cma.webp",
          "/ashrae.webp",
        ],
      },
      cta: {
        title: "准备好转型您的企业了吗？",
        description: "让我们讨论Functions Ltd如何加速您的数字化之旅",
        button: "预约咨询",
      },
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-home.webp')" }}
      >
        {/* Half-transparent overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <div className="animate-fade-in">
            {/* Subtitle */}
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full">
              <span className="text-sm font-medium text-white">{t.hero.eyebrow}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-snug space-y-2">
              {Array.isArray(t.hero.title)
                ? t.hero.title.map((line, i) => <div key={i}>{line}</div>)
                : t.hero.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{t.hero.description}</p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base text-white bg-primary hover:bg-primary/90">
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-white text-white hover:bg-white/10 cursor-pointer"
                >
                  {t.hero.cta2}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoStrip title={locale === "zh" ? "受到行业领导者的信赖" : "Trusted by industry leaders"} />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            {Array.isArray(t.problem.title) ? (
              t.problem.title.map((item, index) => (
                <span key={index} className="flex items-center">
                  <span>{item}</span>
                  
                  {index < t.problem.title.length - 1 && (
                    <span className="mx-3 h-8 w-[2px] bg-gray-300/50 rotate-12 md:rotate-0 md:h-10 md:w-[3px] rounded-full" aria-hidden="true" />
                  )}
                </span>
              ))
            ) : (
              t.problem.title
            )}
          </h2>
          {/* Subtitle */}
          <p className="mt-6 mb-12 text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed text-balance">
            {t.problem.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 h-[480px]">
            {t.problem.panels.map((panel, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-gray-200 cursor-pointer flex flex-col justify-end text-white"
                style={{
                  backgroundImage: `url(${panel.bgImage})`,
                  backgroundSize: "300% 100%",
                  backgroundPosition: panel.bgPosition,
                }}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                animate={{
                  flex: active === index ? 1.8 : 1,
                  transition: { duration: 0.6, type: "spring" },
                }}
              >
                {/* Half-transparent overlay */}
                <div className="absolute inset-0 bg-black/40" />
      
                {/* Content */}
                <motion.div
                  className="relative p-6 md:p-8 z-10 flex flex-col h-full"
                  style={{ maxWidth: "550px" }}
                  animate={{
                    justifyContent: active === index ? "flex-start" : "flex-end",
                  }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                >
                  {/* Title + Detail */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: active === index ? 0 : 20,
                      opacity: active === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-semibold mb-2">{panel.title}</h3>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed">{panel.detail}</p>
                  </motion.div>
                
                  {/* Bullet Points */}
                  {active === index && panel.bullets && (
                    <motion.ul
                      className="mt-4 text-gray-200 list-disc list-inside text-sm space-y-2" // 增加了 space-y-2 让间距更舒服
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {panel.bullets.map((bullet, i) => {
                        const parts = bullet.split(":")
                        const hasLabel = parts.length > 1
                    
                        return (
                          <li key={i}>
                            {hasLabel ? (
                              <>
                                <span className="font-bold text-white">{parts[0]}:</span>
                                <span>{parts.slice(1).join(":")}</span>
                              </>
                            ) : (
                              bullet
                            )}
                          </li>
                        )
                      })}
                    </motion.ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Intro */}
          <p className="text-lg md:text-xl mb-12 text-gray-700">{t.companyInfo.intro}</p>

          {/* World Map */}
          <div className="my-12 flex justify-center">
            <motion.img
              src="/world-map.webp"
              alt="Global Presence"
              className="w-full max-w-4xl h-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          {/* 4 Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.companyInfo.points.map((point, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.detail}</p>
              </div>
            ))}
          </div>
          
          {/* Certification Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {t.companyInfo.logos.map((logo, index) => (
              <img key={index} src={logo} alt={`logo-${index}`} className="h-12" />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90 text-balance">{t.cta.description}</p>
          <Link href="mailto:inquiry@functions.ltd">
            <Button size="lg" variant="secondary" className="text-base cursor-pointer hover:bg-primary-foreground/10 transition">
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

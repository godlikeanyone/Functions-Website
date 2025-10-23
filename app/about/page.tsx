"use client"

import { Button } from "@/components/ui/button"
import { StatsBand } from "@/components/stats-band"
import { ArrowRight, Target, Users, Globe, Award } from "lucide-react"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "About Functions Ltd",
        title: "Engineering the future, one solution at a time",
        description:
          "Founded in 2015, Functions Ltd has grown from a small team of engineers to a global technology partner trusted by Fortune 500 companies.",
      },
      mission: {
        title: "Our mission",
        description:
          "To empower enterprises with innovative technology solutions that transform complexity into competitive advantage, enabling them to focus on what they do best.",
      },
      values: [
        {
          icon: Target,
          title: "Excellence",
          description: "We pursue the highest standards in everything we build, never settling for good enough.",
        },
        {
          icon: Users,
          title: "Partnership",
          description: "Your success is our success. We work as an extension of your team, not just a vendor.",
        },
        {
          icon: Globe,
          title: "Innovation",
          description: "We stay ahead of technology trends to deliver future-proof solutions that scale.",
        },
        {
          icon: Award,
          title: "Integrity",
          description: "Transparency, honesty, and ethical practices guide every decision we make.",
        },
      ],
      stats: [
        { value: "2015", label: "Founded" },
        { value: "500+", label: "Projects Delivered" },
        { value: "50+", label: "Enterprise Clients" },
        { value: "200+", label: "Team Members" },
      ],
      team: {
        title: "Leadership team",
        description: "Experienced leaders driving innovation and excellence",
        members: [
          {
            name: "Sarah Chen",
            role: "Chief Executive Officer",
            bio: "Former VP of Engineering at Fortune 100 tech company. 20+ years building enterprise systems.",
            image: "/team-ceo.jpg",
          },
          {
            name: "Michael Rodriguez",
            role: "Chief Technology Officer",
            bio: "PhD in Computer Science. Led engineering teams at leading cloud infrastructure companies.",
            image: "/team-cto.jpg",
          },
          {
            name: "Emily Watson",
            role: "Chief Operating Officer",
            bio: "15+ years scaling operations for high-growth technology companies across 3 continents.",
            image: "/team-coo.jpg",
          },
        ],
      },
      timeline: {
        title: "Our journey",
        events: [
          { year: "2015", title: "Founded", description: "Started with 5 engineers and a vision" },
          { year: "2017", title: "First Enterprise Client", description: "Secured Fortune 500 partnership" },
          { year: "2019", title: "Global Expansion", description: "Opened offices in London and Singapore" },
          { year: "2021", title: "AI Innovation Lab", description: "Launched dedicated AI research division" },
          { year: "2023", title: "Industry Recognition", description: "Named Top 10 Enterprise Tech Partner" },
          { year: "2025", title: "Continued Growth", description: "500+ projects, 50+ enterprise clients" },
        ],
      },
      cta: {
        title: "Join us on our mission",
        description: "We're always looking for talented engineers and innovators",
        button: "View Open Positions",
      },
    },
    zh: {
      hero: {
        eyebrow: "关于Functions Ltd",
        title: "一次一个解决方案，工程未来",
        description: "Functions Ltd成立于2015年，从一个小型工程师团队发展成为财富500强公司信赖的全球技术合作伙伴。",
      },
      mission: {
        title: "我们的使命",
        description: "通过创新的技术解决方案赋能企业，将复杂性转化为竞争优势，使他们能够专注于自己最擅长的事情。",
      },
      values: [
        {
          icon: Target,
          title: "卓越",
          description: "我们在构建的一切中追求最高标准，永不满足于足够好。",
        },
        {
          icon: Users,
          title: "合作伙伴关系",
          description: "您的成功就是我们的成功。我们作为您团队的延伸工作，而不仅仅是供应商。",
        },
        {
          icon: Globe,
          title: "创新",
          description: "我们领先于技术趋势，提供可扩展的面向未来的解决方案。",
        },
        {
          icon: Award,
          title: "诚信",
          description: "透明、诚实和道德实践指导我们做出的每一个决定。",
        },
      ],
      stats: [
        { value: "2015", label: "成立" },
        { value: "500+", label: "已交付项目" },
        { value: "50+", label: "企业客户" },
        { value: "200+", label: "团队成员" },
      ],
      team: {
        title: "领导团队",
        description: "经验丰富的领导者推动创新和卓越",
        members: [
          {
            name: "陈莎拉",
            role: "首席执行官",
            bio: "前财富100强科技公司工程副总裁。20多年构建企业系统经验。",
            image: "/team-ceo.jpg",
          },
          {
            name: "迈克尔·罗德里格斯",
            role: "首席技术官",
            bio: "计算机科学博士。曾在领先的云基础设施公司领导工程团队。",
            image: "/team-cto.jpg",
          },
          {
            name: "艾米丽·沃森",
            role: "首席运营官",
            bio: "15年以上在3大洲为高增长技术公司扩展运营的经验。",
            image: "/team-coo.jpg",
          },
        ],
      },
      timeline: {
        title: "我们的旅程",
        events: [
          { year: "2015", title: "成立", description: "从5名工程师和一个愿景开始" },
          { year: "2017", title: "首个企业客户", description: "获得财富500强合作伙伴关系" },
          { year: "2019", title: "全球扩张", description: "在伦敦和新加坡开设办事处" },
          { year: "2021", title: "AI创新实验室", description: "推出专门的AI研究部门" },
          { year: "2023", title: "行业认可", description: "被评为十大企业技术合作伙伴" },
          { year: "2025", title: "持续增长", description: "500+项目，50+企业客户" },
        ],
      },
      cta: {
        title: "加入我们的使命",
        description: "我们一直在寻找有才华的工程师和创新者",
        button: "查看职位空缺",
      },
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t.hero.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t.hero.description}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.mission.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.mission.description}</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBand stats={t.stats} />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.team.title}</h2>
            <p className="text-lg text-muted-foreground">{t.team.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.team.members.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-sm text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{t.timeline.title}</h2>

          <div className="space-y-8">
            {t.timeline.events.map((event, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">{event.year}</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  {index < t.timeline.events.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-border -translate-x-1/2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90 text-balance">{t.cta.description}</p>
          <Button size="lg" variant="secondary" className="text-base">
            {t.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

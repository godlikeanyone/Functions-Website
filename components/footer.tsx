import Link from "next/link"

interface FooterProps {
  locale?: string
}

export function Footer({ locale = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: locale === "zh" ? "解决方案" : "Solutions",
      links: [
        { label: locale === "zh" ? "硬件方案" : "Hardware", href: "/solutions/hardware" },
        { label: locale === "zh" ? "软件平台" : "Platform", href: "/solutions/platform" },
        { label: locale === "zh" ? "咨询服务" : "Advisory", href: "/solutions/consulting" },
      ],
    },
    {
      title: locale === "zh" ? "成功案例" : "Case Studies",
      links: [],
    },
    {
      title: locale === "zh" ? "关于我们" : "About",
      links: [],
    },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-light.webp"
                alt="Functions Limited Logo"
                className="w-12 h-12 rounded-lg object-contain"
              />
              <span className="font-semibold">Functions Limited</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {locale === "zh"
                ? "为企业提供创新的技术和工程解决方案"
                : "Engineering Sustainability"}
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Functions Ltd. {locale === "zh" ? "保留所有权利。" : "All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {locale === "zh" ? "隐私政策" : "Privacy"}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {locale === "zh" ? "服务条款" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

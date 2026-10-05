import type { Dictionary, Source } from "./types";
import { sources as enSources } from "./en";

const sources = {
  openaiTraining: { ...enSources.openaiTraining, label: "OpenAI：数据如何被用于改进模型（英文）" },
  oaic: { ...enSources.oaic, label: "澳大利亚信息专员办公室 OAIC（英文）" },
  tpb: { ...enSources.tpb, label: "税务从业者委员会 TPB：职业行为守则（英文）" },
  austrac: { ...enSources.austrac, label: "AUSTRAC：第二阶段反洗钱改革（英文）" },
  asic: { ...enSources.asic, label: "ASIC：信贷持牌人与最佳利益义务（英文）" },
  mara: { ...enSources.mara, label: "移民代理注册管理局 OMARA（英文）" },
  homeAffairs: { ...enSources.homeAffairs, label: "内政部：文件翻译要求（英文）" },
} satisfies Record<string, Source>;

const zh: Dictionary = {
  meta: {
    siteTitle: "Highly Distinguish — 为澳洲小企业提供安全、实用的 AI 服务",
    siteDescription:
      "我们帮助全澳的小型会计所、贷款经纪和移民代理用 AI 节省时间，同时保护客户资料、守住行业合规底线。",
  },
  nav: {
    industries: "服务行业",
    services: "服务内容",
    caseStudies: "案例",
    insights: "文章",
    about: "关于我们",
    contact: "联系我们",
    cta: "免费 AI 安全体检",
    switchLanguage: "English",
    switchLanguageLabel: "Switch to English",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },
  common: {
    bookCheck: "预约免费 AI 安全体检",
    learnMore: "了解更多",
    readMore: "阅读全文",
    sources: "参考来源",
    callUs: "致电我们",
    emailUs: "发邮件给我们",
    allInsights: "全部文章",
    publishedOn: "发布于",
    minRead: "分钟阅读",
  },
  footer: {
    tagline: "为全澳小型专业服务机构提供安全、实用的 AI 服务。",
    explore: "浏览",
    company: "公司",
    archive: "技术博客",
    archiveTech: "English posts",
    archiveChinese: "中文技术博客",
    privacy: "隐私政策（英文）",
    terms: "使用条款（英文）",
    disclaimer: "我们提供技术服务，不提供法律、税务或移民方面的专业意见。关于您的具体合规义务，请咨询所属行业协会或律师。",
  },
  home: {
    eyebrow: "专为小型会计所、贷款经纪和移民代理设计的 AI 服务",
    title: "用 AI 每周省下好几个小时，",
    titleHighlight: "同时不让客户资料承担风险。",
    body: "我们帮全澳的小企业选对 AI 工具、安全地配置好、并培训您的团队。说人话，价格固定，重要内容始终由人把关。",
    secondaryCta: "了解服务流程",
    proof: ["20 年企业级 IT 经验，包括全球大型银行", "在真实财务文件上开发并测试过 AI 系统", "中英双语服务", "澳洲公司 · ABN 70 651 431 677"],
    checklistTitle: "您的 AI 安全配置",
    checklist: [
      "企业级 AI 方案，默认不用您的数据训练模型",
      "员工已阅读的书面 AI 使用规范",
      "客户资料不进入个人账号",
      "发给客户的内容都经过人工审核",
      "针对最耗时工作的现成模板",
    ],
    problemsTitle: "这些情况是不是很熟悉？",
    problems: [
      {
        title: "您的员工可能已经在用 ChatGPT 了。",
        body: "在免费版和个人版 ChatGPT 上，除非每个用户手动关闭，对话内容可能被用于训练 OpenAI 的模型。员工把客户的税号粘贴进去，就等于做了一个没人想做的决定。",
      },
      {
        title: "人人都说 AI 会改变你的行业，却没人告诉你下周一该做什么。",
        body: "您不需要一份战略报告。您需要的是三四件下周就能更快完成的事，而且要设置得妥当。",
      },
      {
        title: "客户资料出一次错，您都承担不起。",
        body: "行业守则里的保密义务不会因为公司小就减轻。而且自 2026 年 7 月 1 日起，反洗钱改革让更多机构需要遵守隐私规定。",
      },
    ],
    stepsTitle: "服务流程",
    stepsIntro: "先免费了解。觉得值得，再继续。",
    steps: [
      {
        title: "1. 免费 AI 安全体检",
        body: "30 分钟交流，了解您的团队目前怎么用 AI。您会得到一页纸的总结：哪些风险要马上处理，哪些省时方法值得一试。没有任何义务。",
      },
      {
        title: "2. AI 安全上手套餐",
        body: "为您选择并配置企业级 AI 工具，撰写 AI 使用规范，培训员工，并针对您日常的真实工作制作模板。固定价格，事先谈好。",
      },
      {
        title: "3. 长期支持",
        body: "按月提供支持：解答问题、在您采用新工具前先帮您评估，并随着业务发展把更多流程自动化。",
      },
    ],
    industriesTitle: "专为像您这样的机构打造",
    industriesIntro: "每个行业都有自己的规则，也有自己最耗时间的环节。我们从这两点出发。",
    industriesMore: {
      title: "不在这几个行业？",
      body: "只要您的生意要处理敏感的客户信息，同样的“安全用 AI”方法都适用——不论您做哪一行。",
      cta: "说说您的情况",
    },
    founderBand: {
      eyebrow: "建议背后的底气",
      statValue: "20",
      statUnit: "年",
      statCaption: "企业级 IT 经验——在客户数据不容有失的地方历练出来。",
      banksLabel: "曾任职于",
      banks: ["摩根士丹利", "汇丰", "花旗"],
      body: "保护全球大银行客户数据的那套习惯，正是五个人的小公司真正需要的——用大白话讲清楚、按小公司的预算定价。正因为这段背景，我们才会像您一样，把客户的资料当回事。",
      signatureName: "Highly Distinguish",
      signatureRole: "创始人亲自主理 · 澳洲科技公司",
      cta: "更多关于我们",
    },
    honestyTitle: "AI 做不到的事，我们会如实告诉您。",
    honestyBody:
      "我们开发并实测过一个 AI 系统，用来回答关于上市公司真实财务报告的问题。它表现不错，但多步骤问题里仍有大约五分之一会答错，人类专家做得更好。所以我们搭建的所有方案，凡是要发给客户、银行或监管机构的内容，都保留人工审核这一步。",
    honestyStats: [
      { value: "79.5%", label: "在 1,490 个多步骤财报问题中，我们最佳 AI 方案的答对率" },
      { value: "89.4%", label: "人类专家在同一测试中的得分" },
    ],
    honestyFootnote: "测试基于已发表的研究基准 ConvFinQA（EMNLP 2022）。我们的方法和结果已在 GitHub 公开。",
    honestyCta: "查看案例",
    whyTitle: "为什么选择 Highly Distinguish",
    why: [
      {
        title: "银行级的工作习惯",
        body: "我们的背景是全球大型银行的企业级系统，那里处理客户数据没有商量余地。我们把同样的习惯带到只有五个人的办公室。",
      },
      { title: "中英双语，说人话", body: "不讲术语，不炒概念。我们可以用中文或英文培训您的团队、讲清楚风险。" },
      { title: "固定价格", body: "开工前就知道花多少钱，不会有“又多花了几个小时”的意外账单。" },
      { title: "本地、可问责", body: "我们是有 ABN 的澳洲公司，打电话有真人接听。" },
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        q: "免费版 ChatGPT 能处理客户资料吗？",
        a: "在 ChatGPT 免费版、Plus 和 Pro 上，对话默认可能被用于改进 OpenAI 的模型。每个用户可以在“设置 → 数据控制”里关闭，但这是按人设置的，很容易遗漏。ChatGPT Business 和 Enterprise 默认不会用您的数据训练模型。即使用企业版，也仍然需要明确规定哪些内容可以输入。",
        sources: [sources.openaiTraining],
      },
      {
        q: "我的公司年营业额不到 300 万澳元，《隐私法》管我吗？",
        a: "很多小企业可以豁免，但并非全部。豁免有例外情况；而且自 2026 年 7 月 1 日起，成为反洗钱（AML/CTF）申报实体的机构，在处理与反洗钱相关的信息时必须遵守澳大利亚隐私原则。行业守则中的保密义务不分公司规模。政府下一轮隐私改革也在讨论取消小企业豁免。您的具体情况请咨询行业协会或律师。",
        sources: [sources.oaic, sources.austrac],
      },
      {
        q: "AI 会取代我的员工吗？",
        a: "AI 会让某些工作变得非常便宜。经营得好的公司，会把省下来的时间用在客户真正看重的地方：专业判断、客户关系、把事情做对。我们帮您判断哪些工作适合自动化，哪些应该留给人。",
      },
      { q: "我需要懂技术吗？", a: "不需要。会用电子邮件，就会用我们配置的工具。设置由我们来做，并培训您的团队。" },
      {
        q: "你们提供法律或合规意见吗？",
        a: "不提供。我们负责技术实施，并指出我们看到的风险，附上官方指引的链接。关于您的具体义务，请咨询所属行业协会或律师。",
      },
    ],
    ctaTitle: "30 分钟，弄清楚您的现状。",
    ctaBody: "免费、没有义务。无论是否与我们合作，您都会带走一页可以直接行动的总结。",
  },
  industries: [
    {
      slug: "accountants",
      name: "会计所与记账服务",
      teaser: "客户邮件、会议记录和催收资料，都能更快完成，同时守住保密义务。",
      metaTitle: "澳洲小型会计所的 AI 服务",
      metaDescription: "在会计所和记账业务中安全使用 AI：更快处理客户邮件、会议记录和资料收集，同时遵守 TPB 保密义务和反洗钱规定。",
      heroTitle: "小型会计所安全使用 AI 的正确方式",
      heroBody:
        "报税季不会变短，但围绕它的大量写作、总结和催收工作可以。我们帮小型会计所用 AI 处理行政事务，保护好客户资料，让数字留在会计软件里，而不是交给聊天机器人。",
      useCases: [
        { title: "几分钟写好客户邮件", body: "回复、提醒、用通俗语言解释税务概念的初稿，由您审核后发出。" },
        { title: "会议记录变成待办清单", body: "把一次客户会议整理成摘要、任务清单和跟进邮件。" },
        { title: "催收资料", body: "根据您自己的模板，为每位客户生成个性化的资料清单和礼貌的催收提醒。" },
        { title: "读懂长篇信件", body: "把冗长的 ATO 来信或法规更新整理成通俗摘要，作为您审阅的起点。" },
      ],
      risks: [
        {
          title: "保密是职业义务",
          body: "税务代理和 BAS 代理的职业行为守则要求对客户信息保密。把客户资料粘贴进个人版 AI 工具，可能构成向第三方披露。",
          sources: [sources.tpb],
        },
        {
          title: "反洗钱改革已经生效",
          body: "自 2026 年 7 月 1 日起，提供特定指定服务的会计师需履行反洗钱义务；即使原本可以豁免，处理相关个人信息时也须遵守澳大利亚隐私原则。",
          sources: [sources.austrac, sources.oaic],
        },
        {
          title: "聊天机器人不是计算器",
          body: "AI 可能非常自信地给出错误的数字。计算应该交给会计软件或确定性的工具，绝不能直接采用聊天机器人给出的数字。",
        },
      ],
      setup: [
        "默认不使用您的数据训练模型的企业级 AI 工具，尽量直接在您已有的 Microsoft 365 或 Google Workspace 里开通",
        "一份书面 AI 使用规范，写清楚哪些内容可以输入、哪些不可以",
        "一次员工培训，使用您所里的真实案例",
        "常用邮件和清单的现成模板",
      ],
    },
    {
      slug: "mortgage-brokers",
      name: "贷款与融资经纪",
      teaser: "整理客户资料、更新进度、查找银行政策，最终判断仍由您来做。",
      metaTitle: "澳洲贷款经纪的 AI 服务",
      metaDescription: "帮助小型贷款和融资经纪公司安全使用 AI：更快整理客户资料、发送进度更新、查找资料，同时保护信用信息。",
      heroTitle: "贷款经纪用 AI：少打字，多陪客户",
      heroBody:
        "每一单都要花好几个小时写记录、发更新、处理文书，其中很多 AI 都能起草。我们会把敏感的财务信息保护好，推荐方案始终由您来定。",
      useCases: [
        { title: "客户情况摘要", body: "把面谈笔记整理成结构化摘要：客户现状、目标和待确认的问题。" },
        { title: "起草档案记录", body: "说明某个产品为什么适合客户的记录初稿，由您核实、修改并负责。" },
        { title: "客户进度更新", body: "在申请的每个阶段，用英文或客户的母语发送清楚的进度说明。" },
        { title: "资料查找", body: "在您已有的银行政策文件中搜索和总结，更快找到相关条款。" },
      ],
      risks: [
        {
          title: "财务和信用信息极其敏感",
          body: "工资单、银行流水和信用记录不应输入个人版 AI 工具。来自信用报告的信息还受到额外的法律限制。",
          sources: [sources.oaic],
        },
        {
          title: "最佳利益义务始终在您身上",
          body: "AI 可以起草记录，但评估和推荐必须是您自己的专业判断。记录应体现您的思考，而不是聊天机器人的。",
          sources: [sources.asic],
        },
        {
          title: "先看持牌人的规定",
          body: "您的信贷持牌人或聚合商可能已经对 AI 工具和客户数据存放位置有规定。我们会在这些规定范围内工作。",
        },
      ],
      setup: [
        "配置为不使用客户数据训练模型的企业级 AI 工具",
        "与您持牌人要求相衔接的 AI 使用规范",
        "客户情况摘要、档案记录和进度更新的模板",
        "员工培训，重点讲清楚哪些内容绝对不能输入 AI 工具",
      ],
    },
    {
      slug: "migration-agents",
      name: "移民代理",
      teaser: "材料清单、客户更新和证据整理，同时保护好护照和健康信息。",
      metaTitle: "澳洲注册移民代理的 AI 服务",
      metaDescription: "帮助小型移民代理机构安全使用 AI：更快生成材料清单、发送客户更新、整理证据，同时保护敏感的客户信息。",
      heroTitle: "移民代理用 AI：行政工作更少，用心不减",
      heroBody:
        "每一份签证申请都离不开材料清单、跟进和证据整理。AI 可以分担很大一部分。我们会把护照、健康信息和家庭资料保护好。",
      useCases: [
        { title: "材料清单", body: "根据您自己的模板，为每位客户生成定制清单，并跟进缺少的材料。" },
        { title: "用客户的语言更新进度", body: "用英文和客户的母语起草进度更新和说明，由您审核。" },
        { title: "整理证据", body: "对大量支持文件进行分类和摘要，让您审阅得更快。" },
        { title: "期限提醒", body: "用简单的自动化工具跟踪补料要求和各类到期日期。" },
      ],
      risks: [
        {
          title: "行为守则下的保密义务",
          body: "注册移民代理必须保护客户信息。护照、健康信息和家庭资料绝不应输入个人版 AI 工具。",
          sources: [sources.mara],
        },
        {
          title: "AI 翻译不等于认证翻译",
          body: "AI 可以帮您理解文件内容，但随申请递交的翻译件必须符合内政部的要求。",
          sources: [sources.homeAffairs],
        },
        {
          title: "AI 可能编造签证规定",
          body: "聊天机器人可能非常自信地给出过时或凭空编造的要求。一定要对照法规和最新政策核实。",
        },
      ],
      setup: [
        "配置为不使用客户数据训练模型的企业级 AI 工具",
        "涵盖敏感信息和翻译问题的 AI 使用规范",
        "基于您自己文件的材料清单和客户更新模板",
        "中文或英文的团队培训",
      ],
    },
  ],
  industryPage: {
    useCasesTitle: "AI 能帮您省时间的地方",
    risksTitle: "需要注意的地方",
    setupTitle: "我们为您配置的内容",
    ctaTitle: "不知道从哪里开始？",
    ctaBody: "预约 30 分钟免费 AI 安全体检。我们会了解您团队目前的工作方式，并告诉您最安全的快速见效方法。",
  },
  services: {
    metaTitle: "服务内容",
    metaDescription: "为全澳小型专业服务机构提供免费 AI 安全体检、固定价格的 AI 安全上手套餐和长期支持。",
    title: "服务简单，价格清楚",
    intro: "先做免费体检。觉得对您的公司有意义，再继续。",
    tiers: [
      {
        name: "AI 安全体检",
        price: "免费 · 30 分钟",
        summary: "了解您的公司目前如何使用 AI，以及风险和快速见效的机会在哪里。",
        includes: ["交流团队目前使用的工具和习惯", "一页纸总结：要处理的风险和值得尝试的省时方法", "坦诚告诉您，到底需不需要我们"],
        cta: "预约免费体检",
      },
      {
        name: "AI 安全上手套餐",
        price: "固定价格，事先报价",
        summary: "开始正确使用 AI 所需的一切，按您公司的情况配置好。",
        includes: [
          "选择并配置企业级 AI 工具",
          "一份给员工的书面 AI 使用规范",
          "一次实操培训（中文或英文）",
          "常见工作的模板",
          "30 天后的跟进回访",
        ],
        cta: "索取报价",
      },
      {
        name: "长期支持",
        price: "按月收费",
        summary: "一个技术伙伴，在情况变化时让您的 AI 用得安全又好用。",
        includes: ["解答团队关于 AI 的问题", "在您采用新工具前先做评估", "随业务发展搭建自动化流程", "随着规则和工具变化更新使用规范"],
        cta: "与我们聊聊",
      },
    ],
    notTitle: "我们不做的事",
    notBody:
      "我们是技术公司，不是律师事务所。我们不提供法律、税务或移民方面的意见，也不会告诉您“已经合规”。我们会指出看到的风险，附上官方指引，并搭建让好习惯变得更容易的系统。",
  },
  caseStudies: [
    {
      slug: "ai-that-shows-its-working",
      title: "让 AI 在财务报告上“写出计算过程”",
      tag: "财务文件",
      teaser: "我们如何不让 AI 做心算，并如实测量它仍然会错多少。",
      metaDescription: "案例：开发一个回答公司财务报告问题的 AI，把“读懂”和“计算”分开，并诚实地测量准确率。",
      problem:
        "问聊天机器人一个关于财务报告的追问，比如“和上一年相比增长了百分之几？”，它常常搞错你指的是哪一年，或者在“脑子里”算错，而且非常自信。",
      approach: [
        "分工：AI 负责读懂文件、找出需要哪些数字；一个独立且受严格限制的计算器负责计算。",
        "要求 AI 在给出答案前一步步写下推理过程，让每个答案都可以核查。",
        "遇到有歧义的表格时（例如两列标题相同），系统宁可拒绝回答也不瞎猜。",
        "每一项改动都在 1,490 个真实问题上用严格的统计方法测量，而不是只看几个漂亮的例子。",
      ],
      results: [
        { value: "79.5%", label: "1,490 个问题的答对率（严格评分）" },
        { value: "68.9%", label: "2022 年原始研究模型在同一测试中的成绩" },
        { value: "89.4%", label: "人类专家在同一测试中的成绩" },
      ],
      resultsNote: "最难的情况（表格中有重复的列标题）答对率只有 53.1%。所以系统现在遇到这类情况会拒绝回答，而不是猜。",
      lesson: "精心设计的 AI 在财务文件上确实有用，但出错的频率仍然高到足以要求：凡是重要的内容，都必须由有资质的人核对。",
      forYou:
        "为您的公司配置 AI 时，我们采用同样的原则：AI 负责起草和总结，软件负责计算，人负责审核。哪里可靠、哪里不可靠，我们都会如实告诉您。",
      links: [{ label: "完整方法、代码和数据（GitHub，英文）", href: "https://github.com/CloudsDocker/AI-FDE-Playbook" }],
    },
    {
      slug: "secure-by-default",
      title: "默认安全：我们如何构建自己的 AI 产品",
      tag: "数据保护",
      teaser: "我们在自己应用里坚持的习惯，也会带到您的公司。",
      metaDescription: "我们如何在部署于澳洲的 AI 应用中保护 API 密钥和用户数据，以及如何把同样的习惯带到客户的配置中。",
      problem:
        "很多使用 AI 的小应用和小工具，把密钥直接打包在应用里，把密码写在普通配置文件里，数据哪里便宜就往哪里送。一切正常，直到有人取出密钥刷爆账单，或数据流到了不该去的地方。",
      approach: [
        "密钥只存放在服务器上，绝不打包进用户下载的应用。",
        "密钥保存在专门的密钥管理服务中，不出现在配置文件或日志里。",
        "自动部署使用短期凭证，而不是长期有效的密码。",
        "服务运行在 Google Cloud 澳洲区域，并设置访问频率限制防止滥用。",
      ],
      results: [
        { value: "0", label: "打包进应用的密钥数量" },
        { value: "澳洲", label: "服务云区域所在的国家" },
      ],
      resultsNote: "这是 LessChoice 的后端。LessChoice 是我们开发的 AI iOS 应用，用来推荐值得去的地方。",
      lesson: "好的安全主要是一组枯燥的习惯，每次都照做。从一开始就做，成本很低；事后再补，代价很高。",
      forYou: "为您的公司配置工具时，我们用同样的习惯：选对版本、设对选项、数据放在该放的地方、只给需要的人开权限。",
      links: [{ label: "后端源代码（GitHub，英文）", href: "https://github.com/CloudsDocker/lesschoice-backend" }],
    },
  ],
  caseStudyPage: {
    indexTitle: "案例",
    indexIntro: "我们真实做过的系统、学到的经验，以及它们对您的意义。",
    problem: "问题",
    approach: "我们的做法",
    results: "结果",
    lesson: "经验",
    forYou: "这对您意味着什么",
    furtherReading: "延伸阅读",
  },
  insightsPage: {
    metaDescription: "用通俗语言讲解澳洲小型会计所、贷款经纪和移民代理如何安全使用 AI。",
    title: "文章",
    intro: "用通俗语言讲清楚：小型专业服务机构如何安全地使用 AI。",
  },
  about: {
    metaTitle: "关于我们",
    metaDescription: "Highly Distinguish 是一家澳洲科技公司，帮助小型专业服务机构安全地使用 AI。",
    title: "大企业的经验，专注小企业",
    intro:
      "Highly Distinguish 是一家澳洲科技公司。我们帮助小型专业服务机构享受 AI 带来的好处，同时避开风险。标准向大银行看齐，讲解用通俗的语言。",
    founderTitle: "创始人",
    founderBody: [
      "我们的创始人拥有 20 年软件系统开发与运维经验，曾在摩根士丹利、汇丰、花旗等全球大型银行从事工程工作。在那里，保护客户数据不是可选项。",
      "如今的工作是设计并测试 AI 系统，包括一个已公开文档的财务报告问答 AI，以及一款 AI iOS 应用，并用中英文发表技术文章。",
      "我们做 AI 服务，是因为小企业里有一个很普遍的现象：被要求“用上 AI”，员工私下用免费工具处理客户资料，却没有人用通俗的语言讲清楚其中的利弊。",
    ],
    principlesTitle: "我们的工作原则",
    principles: [
      { title: "坦诚说明局限", body: "哪里可靠、哪里不可靠，我们都会告诉您，哪怕这意味着我们的活儿变少。" },
      { title: "人始终说了算", body: "AI 负责起草，人负责决定、核对和签字。" },
      { title: "数据由您掌控", body: "我们优先选择让您的数据不被用于模型训练、并由您掌控的工具和设置。" },
      { title: "固定价格", body: "事先报价，说到做到。" },
    ],
    companyTitle: "公司信息",
    companyLabels: { name: "公司名称", location: "所在地", phone: "电话" },
    elsewhereTitle: "其他平台",
    elsewhere: [
      { label: "我们的技术博客", href: "https://www.todzhang.com" },
      { label: "GitHub", href: "https://github.com/CloudsDocker" },
    ],
  },
  contact: {
    metaTitle: "联系我们 · 免费 AI 安全体检",
    metaDescription: "为您在澳洲各地的会计所、贷款经纪或移民代理业务预约 30 分钟免费 AI 安全体检。",
    title: "预约免费 AI 安全体检",
    intro: "给我们打电话或发邮件，我们会安排一个您方便的 30 分钟时段，全澳均可线上进行，就近也可当面。",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    hours: "周一至周五，澳洲东部时间工作时段。",
    emailSubject: "预约免费 AI 安全体检",
    emailBody: "您好，\n\n我想预约一次免费 AI 安全体检。\n\n公司名称：\n所属行业：\n员工人数：\n方便沟通的时间：\n\n谢谢！",
    stepsTitle: "接下来会怎样",
    steps: [
      { title: "我们聊 30 分钟", body: "聊聊您的团队、目前用的工具，以及最耗时间的工作。" },
      { title: "您会收到一页纸总结", body: "需要马上处理的风险和值得尝试的省时方法，用通俗语言写清楚。" },
      { title: "由您决定", body: "可以自己按总结去做，也可以找我们要固定报价。怎么选都没有压力。" },
    ],
    area: "全澳客户均可线上服务，就近可安排当面。",
  },
  notFound: { title: "页面不存在", body: "您要找的页面已移动或不存在。", home: "返回首页" },
};

export default zh;

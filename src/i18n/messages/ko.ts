import type { SiteDictionary } from "@/i18n/schema";

export const ko: SiteDictionary = {
  meta: {
    siteName: "LogK",
    homeTitle: "LogK — 기업용 멀티 AI 플랫폼",
    homeDescription:
      "25개 이상의 AI를 한 번에 위임하고, 개인정보를 자동 비식별화하며, 조직 단위로 관리합니다. 원화 결제 지원.",
    productTitle: "LogK 서비스 소개 — 멀티 AI 위임부터 기업 관리까지",
    productDescription:
      "모델 선택, 실행 전 비용 확인, 개인정보 자동 비식별화, 결재 워크플로, 조직 관리까지 — 기업 AI 활용의 전체 흐름.",
    pricingTitle: "LogK 요금제 — ₩10,000부터 시작하는 멀티 AI 구독",
    pricingDescription:
      "Lite ₩10,000 · Standard ₩30,000 · Pro ₩50,000 · Business ₩100,000. 모든 플랜에 멀티 LLM 비교 활용 포함. 연간 구독 시 20% 할인.",
    mockupsTitle: "LogK 제품 화면 — 실제 UI 목업 모음",
    mockupsDescription:
      "모델 선택, 답변 비교, 개인정보 비식별화, 크레딧 과금의 실제 화면입니다."
  },
  nav: {
    items: [
      { key: "solution", label: "서비스 소개", href: "#service" },
      { key: "pricing", label: "요금제", href: "pricing" },
      { key: "company", label: "회사 소개", href: "#company" },
      { key: "contact", label: "문의하기", href: "mailto:adm@logk.co.kr" }
    ],
    product: "제품",
    pricing: "요금제",
    talkToSales: "도입 문의",
    home: "홈",
    bookDemo: "무료 데모 신청",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기"
  },
  theme: {
    light: "라이트",
    dark: "다크",
    toggleLabel: "색상 테마 전환"
  },
  localeSwitcher: {
    label: "언어"
  },
  hero: {
    eyebrow: "기업용 멀티 AI 플랫폼",
    title: "여러 AI를,\n조직에 맞게",
    titleAccent: "안전하게 쓰세요.",
    lede:
      "멀티 LLM 동시 위임, 개인정보 자동 비식별화, 조직 관리, 결재 워크플로까지 — AI 활용의 복잡함을 SelecAI 하나로 해결합니다.",
    primaryCta: "서비스 소개",
    secondaryCta: "요금제 보기",
    metrics: [
      { value: "한 번 입력", label: "여러 모델에 동시에 요청" },
      { value: "비용 먼저", label: "실행 전 예상 크레딧 확인" },
      { value: "결과 비교", label: "답변 차이를 한 화면에서 검토" }
    ],
    previewFeatures: [
      {
        id: "chats",
        label: "채팅",
        summary: "하나의 대화를 여러 모델에 위임하면서 문맥을 일관되게 유지합니다."
      },
      {
        id: "projects",
        label: "프로젝트",
        summary: "목표와 담당자, 반복 워크플로를 기준으로 AI 작업 공간을 정리합니다."
      },
      {
        id: "agents",
        label: "에이전트",
        summary: "초안 작성, 비판적 검토, 검증처럼 역할이 분명한 에이전트를 구성합니다."
      },
      {
        id: "usage",
        label: "사용량",
        summary: "팀과 워크플로별 요청량, 토큰 사용량, 모델 분포를 한눈에 확인합니다."
      },
      {
        id: "spending",
        label: "지출",
        summary: "위임 실행 전후의 크레딧 사용량과 예산 영향을 투명하게 추적합니다."
      },
      {
        id: "billing",
        label: "과금",
        summary: "청구서, 결제수단, 계정 단위 과금 설정을 한곳에서 관리합니다."
      }
    ],
    previewFallback: {
      title: "제품 미리보기 로딩 중…",
      body: "인터랙티브 데모를 보려면 JavaScript를 활성화하세요."
    }
  },
  trust: [
    "25+ AI 모델 지원",
    "실행 전 비용 확인",
    "멀티 LLM 동시 위임",
    "개인정보 자동 비식별화",
    "결재 워크플로",
    "기업 조직 관리"
  ],
  solution: {
    eyebrow: "솔루션",
    title: "하나의 질문을 여러 AI 서비스에 동시에 위임합니다.",
    description:
      "많은 AI 제품은 하나의 채팅창이나 개발자용 게이트웨이에 머물러 있습니다. LogK는 그 위에서 모델 선택, 비용 판단, 결과 비교, 검증까지 이어지는 사용자 중심의 의사결정 레이어를 만듭니다.",
    cards: [
      {
        index: "01",
        title: "하나의 대시보드에서 여러 모델을 선택",
        body:
          "사용자는 하나의 모델을 빠르게 선택하거나 여러 모델을 함께 선택해 비교, 집계, 작업별 추천 조합을 구성할 수 있습니다.",
        bullets: [
          "프로바이더, 속도, 품질, 모달리티 기준의 모델 카드",
          "여러 답변을 한 화면에서 비교",
          "질문 맥락에 맞춘 추천 모델 스택"
        ],
        tall: true
      },
      {
        index: "02",
        title: "위임 전에 비용을 먼저 확인",
        body:
          "요청을 실행하기 전에 예상 크레딧을 보여주어, 가격과 품질, 응답 범위 사이에서 의도적인 선택을 할 수 있게 합니다."
      },
      {
        index: "03",
        title: "필요한 경우 자동 검증을 추가",
        body:
          "모델 간 의견이 갈리거나 신뢰도가 낮을 때 자동으로 후속 질문과 검증 루프를 실행해 답변의 근거를 보강합니다."
      }
    ]
  },
  showcase: {
    eyebrow: "제품 인터페이스",
    title: "선택, 위임, 검증으로 이어지는 하나의 흐름.",
    description:
      "작업은 단순합니다. 모델 스택을 고르고, 여러 프로바이더에 위임한 뒤, 결과를 비교하고 검증해 최종 답변을 결정합니다.",
    tabs: [
      {
        id: "plan",
        label: "선택",
        title: "작업에 맞는 모델 스택을 선택합니다",
        body:
          "빠른 응답이 필요하면 단일 모델을, 비교가 필요하면 여러 모델을, 글쓰기·코딩·리서치처럼 목적이 뚜렷한 작업에는 추천 스택을 선택할 수 있습니다.",
        visualLabel: "모델 스택",
        visualTitle: "GPT-5.2, Claude Sonnet, Gemini Pro 이사회 검토 스택",
        bullets: [
          "실행 전 예상 크레딧 확인",
          "품질, 지연시간, 개인정보 정책을 함께 고려",
          "반복 업무를 위한 모델 스택 저장"
        ]
      },
      {
        id: "build",
        label: "위임",
        title: "한 번의 요청을 여러 프로바이더로 위임합니다",
        body:
          "LogK는 선택된 모델로 요청을 분산 실행하고, 비용과 상태를 중앙에서 추적하며, 프로바이더와 후속 단계가 달라도 실행 흐름을 일관되게 유지합니다.",
        stack: [
          "OpenAI: 도구 사용이 필요한 1차 답변",
          "Anthropic: 추론과 비판적 검토",
          "Google: 검증 및 멀티모달 후속 확인"
        ]
      },
      {
        id: "review",
        label: "검증",
        title: "최종 답변을 비교하고 검증합니다",
        body:
          "하나의 답변에만 의존하지 않고 모델 간 차이, 신뢰도 격차, 검증 과정을 함께 보여주어 더 납득 가능한 결론에 도달하게 합니다.",
        reviewLines: [
          "프로바이더 간 불일치를 집계 전에 표시",
          "신뢰도가 낮을 때 검증 프롬프트 실행",
          "모델 추적 정보와 함께 최종 답변 생성"
        ]
      }
    ]
  },
  technology: {
    eyebrow: "기술",
    title: "모델 선택, 비용 통제, 개인정보 보호를 함께 설계한 위임 계층.",
    description:
      "LogK는 단순한 모델 스위처가 아닙니다. 더 적합한 모델을 선택하고, 크레딧 비용을 관리하며, 민감한 문맥이 부적절한 경로로 전송되지 않도록 돕는 라우팅 및 의사결정 레이어입니다.",
    graphicEyebrow: "라우팅 그래프",
    graphicTitle: "작업 인식형 모델 오케스트레이션",
    graphicBody:
      "질문이 프로바이더로 전달되기 전에 후보 모델 스택, 개인정보 정책, 예상 비용, 검증 단계를 먼저 계산합니다.",
    cards: [
      {
        index: "A",
        title: "멀티모델 추천과 라우팅",
        body:
          "현재 프롬프트에 맞는 모델 또는 모델 스택을 추천하고 가격, 품질, 가용성, 워크플로 프리셋에 따라 요청을 라우팅합니다."
      },
      {
        index: "B",
        title: "개인정보 보호와 비용 거버넌스",
        body:
          "위임 전에 비식별화와 차단 규칙을 적용하고, 크레딧 기반 과금을 실행·팀·계정 단위로 투명하게 관리합니다."
      }
    ],
    stats: [
      { value: 7, label: "위임 전 평가되는 모델 및 프로바이더 경로" },
      { value: 3, label: "핵심 사용자 행동: 선택, 위임, 검증" },
      { value: 100, label: "외부 전송 전 점검되는 민감 필드 비율" }
    ]
  },
  company: {
    eyebrow: "회사 소개",
    body: [
      "로그케이는 보안과 인공지능(AI)이라는 키워드를 활용하여 효율적인 서비스를 만들고자 노력하는 기업입니다.",
      "로그케이의 대표 솔루션인 SelecAI 는 LLM을 기반으로한 다양한 생성형AI 를 비교하고 선택해서 사용할 수 있는 온라인 솔루션 입니다.",
      "기존 AI 제품들의 아쉬운 부분을 SelecAI 에 담아 효율적인 서비스로 재가공하였습니다.",
      "저희 로그케이는 고객의 의견을 최우선으로 적극 반영하여 최고의 서비스를 제공하겠습니다. 언제든 연락주세요."
    ]
  },
  contact: {
    eyebrow: "문의",
    title: "LogK 도입을 문의하세요.",
    body:
      "여러 AI 모델을 업무에 함께 쓰고 싶은 팀을 위해 준비하고 있습니다.",
    primaryCta: "adm@logk.co.kr",
    secondaryCta: "제품 보기"
  },
  productPage: {
    eyebrow: "제품",
    title: "모델을 고르고,\n비용을 보고,\n답변을 비교하세요.",
    description:
      "SelecAI 는 여러 AI 서비스를 하나의 작업 화면으로 묶습니다.",
    stages: [
      {
        label: "선택",
        title: "모델 선택",
        body: "질문에 맞는 모델을 하나 또는 여러 개 고릅니다."
      },
      {
        label: "예측",
        title: "비용 확인",
        body: "요청 전에 예상 크레딧을 먼저 보여줍니다."
      },
      {
        label: "위임",
        title: "동시 실행",
        body: "선택한 모델에 같은 요청을 한 번에 보냅니다."
      },
      {
        label: "검증",
        title: "결과 비교",
        body: "답변의 차이와 근거를 함께 확인합니다."
      }
    ],
    surfaces: [
      {
        index: "화면 01",
        title: "지능적인 선택을 위한 모델 보드",
        body:
          "모델 선택을 카드, 프리셋, 추천, 비용 가시성으로 구성된 명확한 제품 화면으로 바꿉니다.",
        wide: true
      },
      {
        index: "화면 02",
        title: "비용을 고려한 위임",
        body:
          "크레딧 예측과 중앙 과금으로 여러 모델에 동시에 위임하더라도 비용 흐름을 놓치지 않습니다."
      },
      {
        index: "화면 03",
        title: "답변 비교와 불일치 처리",
        body:
          "여러 출력 결과를 비교하고, 불일치를 표시하며, 직접 비교와 집계형 종합 중 적합한 방식을 선택하게 합니다."
      },
      {
        index: "화면 04",
        title: "개인정보와 정책 제어",
        body:
          "민감한 입력은 제품을 떠나기 전에 정책에 따라 차단·비식별화되거나 승인된 경로로만 전송됩니다."
      }
    ],
    flowEyebrow: "흐름",
    flowTitle: "작업은 짧게, 판단은 분명하게.",
    flowDescription:
      "질문을 쓰고, 모델을 고르고, 결과를 비교합니다.",
    steps: [
      { number: "01", title: "질문을 한 번 작성", body: "최적의 답이 필요한 질문, 작업, 파일 세트로 시작합니다." },
      { number: "02", title: "모델 스택 선택", body: "직접 하나 또는 여러 모델을 고르거나 현재 질문에 맞는 추천 스택을 선택합니다." },
      { number: "03", title: "제어와 함께 위임", body: "예상 크레딧을 확인하고 개인정보 차단 규칙을 적용한 뒤 하나의 시스템에서 실행합니다." },
      { number: "04", title: "결과 비교와 검증", body: "출력을 비교하고 필요한 경우 검증을 실행해 실제로 신뢰할 수 있는 답으로 정리합니다." }
    ],
    nextEyebrow: "다음 단계",
    nextTitle: "도입을 논의하고 싶으신가요?",
    nextBody:
      "우리 회사에 맞는 AI 사용 방식 구성과 과금 정책을 함께 고민해 드립니다.",
    primaryCta: "도입 문의",
    secondaryCta: "홈으로 돌아가기",
    gallery: {
      workspaceLabel: "워크스페이스",
      workspaceTitle: "실제 업무 흐름이 드러나는 워크스페이스",
      workspaceBody: "모델 선택, 실행 제어, 개인정보 보호, 예상 비용이 하나의 제품 화면 안에서 자연스럽게 읽히도록 구성합니다.",
      workspaceAlt: "LogK workspace dashboard screenshot",
      pricingLabel: "요금",
      pricingTitle: "사용량과 비용이 보이는 운영 화면",
      pricingBody: "가격을 별도의 표로 분리하지 않고 실제 운영 화면처럼 보여주어 크레딧 기반 결제를 더 쉽게 이해하게 합니다.",
      pricingAlt: "LogK pricing dashboard screenshot"
    }
  },
  features: {
    eyebrow: "핵심 기능",
    title: "기업 AI 활용에 필요한 모든 것",
    description: "모델 위임부터 개인정보 보호, 조직 관리, 결재 워크플로까지 — SelecAI 하나로 해결합니다.",
    rows: [
      {
        eyebrow: "개인정보 보호",
        title: "프롬프트 전송 전, 민감정보를 자동으로 가립니다",
        body: "이름·전화번호·이메일·주민등록번호·계좌번호 등 9가지 개인정보 유형을 외부 AI 서버로 전송하기 전에 자동 탐지·비식별화합니다. OCR을 통해 이미지·PDF 내 민감정보도 처리하며, 원본은 저장하지 않습니다.",
        bullets: [
          "NER + 정규식 + sLLM 조합으로 정확하게 탐지",
          "이미지·PDF OCR 포함 9가지 유형 지원",
          "원본 미저장 — 비식별화 결과만 보관"
        ]
      },
      {
        eyebrow: "결재 워크플로",
        title: "AI 사용 요청을 조직이 직접 승인합니다",
        body: "관리자가 설정한 정책에 따라 민감한 AI 요청을 결재 라인에 올릴 수 있습니다. 승인·거부 이력이 남아 AI 사용 감사(audit)가 가능하며, 조직의 AI 거버넌스를 체계적으로 운영할 수 있습니다.",
        bullets: [
          "대기·승인·거부 상태 실시간 확인",
          "결재 이력 전체 보관",
          "감사(audit) 로그 지원"
        ]
      },
      {
        eyebrow: "이미지 생성 비교",
        title: "여러 AI의 이미지 결과를 나란히 확인합니다",
        body: "동일한 프롬프트로 생성된 이미지를 ChatGPT, Gemini, Grok 등 여러 AI 서비스에서 나란히 비교합니다. 가장 원하는 결과를 빠르게 선택하고, 프롬프트를 수정해 반복 비교할 수 있습니다.",
        bullets: [
          "여러 AI 이미지 생성 결과를 동시에 비교",
          "프롬프트 수정 후 즉시 재비교",
          "원하는 결과를 한 번에 선택"
        ]
      }
    ],
    adminSection: {
      eyebrow: "조직 관리",
      title: "LLM 정책과 멤버를 조직 단위로 관리합니다",
      description: "관리자는 허용 LLM 모델을 직접 선택하고, 멤버별 활성화 여부와 권한을 한 화면에서 설정합니다. 팀 규모가 커져도 관리 부담이 늘지 않습니다.",
      corp: {
        title: "기업 관리",
        body: "허용 LLM 모델 및 기업 정책 설정",
        alt: "selecAI 기업 관리 화면 — LLM 모델 정책 설정"
      },
      user: {
        title: "유저 관리",
        body: "멤버 활성화·역할 권한 제어",
        alt: "selecAI 유저 관리 화면 — 멤버 활성화 및 권한 설정"
      }
    }
  },
  mockupsPage: {
    eyebrow: "제품 목업",
    title: "LogK 제품 화면",
    description: "모델 선택, 답변 비교, 개인정보 제어, 크레딧 과금 화면입니다.",
    lede:
      "여러 AI 모델을 한 화면에서 고르고 비교하는 제품 목업입니다.",
    note:
      "데모와 캡처용으로 쓰기 쉽도록 핵심 화면만 남겼습니다.",
    primaryCta: "제품 페이지로 이동",
    secondaryCta: "홈페이지로 돌아가기",
    scenes: [
      {
        eyebrow: "화면 01",
        title: "모델 보드",
        body: "모델 선택이 핵심 제품 경험이라는 점을 가장 먼저 보여주는 화면입니다."
      },
      {
        eyebrow: "화면 02",
        title: "답변 비교",
        body: "단일 답변이 아니라 모델 간 차이와 합의를 보여주어 신뢰를 형성합니다."
      },
      {
        eyebrow: "화면 03",
        title: "개인정보 제어",
        body: "민감 정보 차단과 프로바이더 정책을 시각적으로 설명하는 운영 화면입니다."
      },
      {
        eyebrow: "화면 04",
        title: "크레딧 월렛",
        body: "크레딧 기반 과금과 실행별 비용 가시성을 제품 화면 안에서 보여줍니다."
      }
    ]
  },
  pricingPage: {
    eyebrow: "요금제",
    badge: "지금 바로 시작 가능 · 원화 결제 지원",
    title: "업무에 맞는 플랜을 선택하고",
    titleEmphasis: "AI 활용을 시작하세요",
    description: "모든 플랜에 멀티 LLM 비교 활용이 포함됩니다.\n상위 플랜일수록 더 많은 크레딧과 기능을 제공합니다.",
    toggle: {
      monthly: "월간 구독",
      yearly: "연간 구독",
      discount: "20% 절약",
      annualNote: "연간 구독 시 요금 20% 할인"
    },
    creditLabel: "월 제공 크레딧",
    plans: [
      {
        key: "lite",
        name: "Lite",
        tagline: "AI를 가볍게 시작하는 플랜",
        currency: "₩",
        monthlyPrice: "10,000",
        yearlyPrice: "8,000",
        credits: "10,000",
        ctaLabel: "시작하기 →",
        ctaHref: "mailto:adm@logk.co.kr",
        features: [
          { text: "멀티 LLM 동시 사용", sub: "ChatGPT · Claude · Gemini 포함" },
          { text: "응답 비교 기능" },
          { text: "대화 이력 보관" }
        ]
      },
      {
        key: "standard",
        name: "Standard",
        tagline: "실무 업무에 최적화된 플랜",
        currency: "₩",
        monthlyPrice: "30,000",
        yearlyPrice: "24,000",
        credits: "33,000",
        bonusCredits: "+3,000",
        ctaLabel: "시작하기 →",
        ctaHref: "mailto:adm@logk.co.kr",
        features: [
          { text: "멀티 LLM 동시 사용", sub: "ChatGPT · Claude · Gemini 포함" },
          { text: "응답 비교 기능" },
          { text: "파일 첨부 분석 (PDF · 이미지)" },
          { text: "대화 이력 보관" }
        ]
      },
      {
        key: "pro",
        name: "Pro",
        tagline: "심화 활용 · 보안 기능 포함",
        currency: "₩",
        monthlyPrice: "50,000",
        yearlyPrice: "40,000",
        credits: "60,000",
        bonusCredits: "+10,000",
        badge: "🔥 가장 인기 있는 플랜",
        highlight: true,
        ctaLabel: "지금 시작하기 →",
        ctaHref: "mailto:adm@logk.co.kr",
        features: [
          { text: "멀티 LLM 동시 사용", sub: "ChatGPT · Claude · Gemini 포함" },
          { text: "응답 비교 · 최적화" },
          { text: "파일 첨부 분석 (PDF · 이미지)" },
          { text: "개인정보 비식별화 (기본)", icon: "shield" },
          { text: "대화 이력 보관" },
          { text: "우선 고객지원" }
        ]
      },
      {
        key: "business",
        name: "Business",
        tagline: "조직 · 팀 전용 풀스펙 플랜",
        currency: "₩",
        monthlyPrice: "100,000",
        yearlyPrice: "80,000",
        credits: "140,000",
        bonusCredits: "+40,000",
        ctaLabel: "시작하기 →",
        ctaHref: "mailto:adm@logk.co.kr",
        features: [
          { text: "멀티 LLM 동시 사용", sub: "ChatGPT · Claude · Gemini 포함" },
          { text: "응답 비교 · 최적화" },
          { text: "파일 첨부 + OCR 분석" },
          { text: "개인정보 비식별화 (풀기능)", icon: "shield" },
          { text: "기업 내부 문서 RAG", icon: "shield" },
          { text: "조직 보안 정책 연동", icon: "shield" },
          { text: "대화 이력 보관" },
          { text: "전담 고객지원 담당자" }
        ]
      }
    ],
    enterprise: {
      title: "🏢 Enterprise — 온프레미스 맞춤형",
      description: "공공기관, 금융, 의료, 대기업 등 고보안 환경에 최적화된 폐쇄망 구축형 서비스입니다. 원화 결제 및 조직 맞춤형 보안 설정을 지원합니다.",
      tags: ["온프레미스 구축", "폐쇄망 지원", "원화 결제", "개인정보 완전 비식별화", "내부 문서 RAG", "SLA 보장"],
      ctaLabel: "도입 문의하기 →",
      ctaHref: "mailto:adm@logk.co.kr",
      note: "영업일 기준 3일 내 회신 드립니다"
    },
    creditNotes: [
      "크레딧 소비량은 사용 모델, 프롬프트 길이, 파일 크기에 따라 달라집니다.",
      "멀티 LLM 동시 전송 시 선택한 모델 수만큼 크레딧이 소비됩니다.",
      "월 크레딧은 매월 1일 갱신되며 미사용분은 이월되지 않습니다."
    ],
    faq: {
      title: "자주 묻는 질문",
      items: [
        {
          question: "크레딧(토큰)은 어떻게 소비되나요?",
          answer: "크레딧은 LLM에 프롬프트를 전송하고 응답을 받을 때 소비됩니다. 소비량은 선택한 LLM 모델의 종류, 프롬프트 텍스트 길이, 첨부 파일 크기에 따라 달라집니다. 멀티 LLM 동시 전송 시에는 선택된 모델 수만큼 크레딧이 각각 소비됩니다. 예를 들어 5개 모델에 동시 전송하면 1회 프롬프트 기준으로 약 5배의 크레딧이 사용됩니다."
        },
        {
          question: "미사용 크레딧은 다음 달로 이월되나요?",
          answer: "기본적으로 월 크레딧은 매월 1일에 초기화되며 미사용분은 이월되지 않습니다. Business 플랜의 경우 최대 1개월분 크레딧 이월 기능을 제공할 예정입니다. 더 유연한 크레딧 활용이 필요하시면 Enterprise 플랜 도입 문의를 통해 맞춤 설정이 가능합니다."
        },
        {
          question: "공공기관·교육기관도 사용할 수 있나요?",
          answer: "네, 원화 결제 시스템을 제공하므로 외화 결제 제약이 있는 기관에서도 국내 카드 및 계좌이체로 간편하게 이용할 수 있습니다. 나라장터 등록 및 공공 조달 구매를 위해서는 Enterprise 플랜 도입 문의를 통해 별도 상담을 받으실 수 있습니다."
        },
        {
          question: "개인정보 비식별화 기능은 어떻게 작동하나요?",
          answer: "프롬프트를 외부 LLM 서버로 전송하기 전에 개인정보 및 민감정보를 자동으로 탐지하고 비식별화합니다. 이름·이메일·전화번호·주민등록번호·계좌번호 등을 NER + 정규식 + 자체 sLLM 조합 방식으로 탐지하며, '김철수' → '[이름_1]'과 같이 처리해 문서 구조를 그대로 유지합니다. Pro는 기본 탐지, Business는 OCR 포함 풀기능을 제공합니다."
        },
        {
          question: "플랜을 중간에 업그레이드하거나 변경할 수 있나요?",
          answer: "언제든지 플랜 업그레이드가 가능합니다. 업그레이드 시 잔여 크레딧은 그대로 유지되며, 변경 시점부터 새 플랜의 기능과 크레딧이 적용됩니다. 다운그레이드의 경우 현재 결제 주기가 끝난 후 다음 달부터 적용됩니다."
        },
        {
          question: "어떤 LLM 모델을 사용할 수 있나요?",
          answer: "현재 ChatGPT, Claude, Gemini, Grok, DeepSeek, Perplexity 등 25개 이상의 최신 모델을 지원합니다. 모델 목록은 AI 업계 업데이트에 맞추어 지속적으로 확장·변동됩니다."
        }
      ]
    },
    trialBanner: {
      title: "지금 바로 LogK를 경험해 보세요",
      body: "무료 데모를 통해 멀티 LLM 비교 활용과 보안 기능을 직접 확인해 보실 수 있습니다.",
      ctaLabel: "무료 데모 신청하기",
      ctaHref: "mailto:adm@logk.co.kr"
    }
  }
};

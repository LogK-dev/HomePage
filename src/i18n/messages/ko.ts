import type { SiteDictionary } from "@/i18n/schema";
import { phrase } from "@/utils/text";

export const ko: SiteDictionary = {
  meta: {
    siteName: "LogK",
    homeTitle: "SelecAI — 기업용 멀티 AI 플랫폼",
    homeDescription:
      "25개 이상의 AI를 한 번에 위임하고, 개인정보를 자동 비식별화하며, 조직 단위로 관리합니다. 원화 결제 지원.",
    productTitle: "SelecAI 서비스 소개 — 멀티 AI 동시 활용부터 기업 관리까지",
    productDescription:
      "모델 선택, 실행 전 비용 확인, 개인정보 자동 비식별화, 결제 워크플로, 조직 관리까지 — 기업 AI 활용의 전체 흐름.",
    pricingTitle: "SelecAI 요금제 — ₩10,000부터 시작하는 멀티 AI 구독",
    pricingDescription:
      "Lite ₩10,000 · Standard ₩30,000 · Pro ₩50,000 · Business ₩100,000. SelecAI 모든 플랜에 멀티 LLM 동시 활용 포함. 연간 구독 시 20% 할인.",
    mockupsTitle: "SelecAI 제품 화면 — 실제 UI 목업 모음",
    mockupsDescription:
      "모델 선택, 답변 비교, 개인정보 비식별화, 크레딧 과금의 실제 화면입니다."
  },
  nav: {
    items: [
      { key: "solution", label: "서비스 소개", href: "#service" },
      { key: "company", label: "회사 소개", href: "#company" },
      { key: "pricing", label: "요금제", href: "pricing" },
      { key: "contact", label: "문의하기", href: "mailto:adm@logk.co.kr" }
    ],
    home: "홈",
    bookDemo: "무료 데모 신청",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기"
  },
  localeSwitcher: {
    label: "언어"
  },
  hero: {
    eyebrow: "기업용 멀티 AI 플랫폼",
    title: "다양한 AI를,\n조직에 맞게",
    titleAccent: "안전하게 쓰세요.",
    lede:
      phrase(
        "멀티 LLM 동시 활용, 개인정보 자동 비식별화, 조직 관리, 결제 워크플로까지",
        " — AI 활용의 복잡함을 SelecAI 하나로 해결합니다."
      ),
    primaryCta: "서비스 소개",
    secondaryCta: "요금제 보기"
  },
  mediaShelf: [
    { label: "LLM 동시 활용",     asset: "selecAI_multi_delegate.mov", type: "video" },
    { label: "이미지 생성",   asset: "selecAI_image_gen.mov",       type: "video" },
    { label: "개인정보 보호", asset: "selecAI_private_masking.png", type: "image" },
    { label: "기업 관리",     asset: "selecAI_corp_mgnt.png",       type: "image" },
    { label: "유저 관리",     asset: "selecAI_user_mgmt.png",       type: "image" },
    { label: "결제 워크플로", asset: "selecAI_prompt_pay.png",      type: "image" }
  ],
  company: {
    eyebrow: "회사 소개",
    // phrase(...) marks the preferred line-break point: the browser wraps
    // between segments only when the container narrows. See src/utils/text.ts.
    body: [
      phrase(
        "로그케이는 보안과 인공지능(AI)이라는 키워드를 활용하여",
        "효율적인 서비스를 만들고자 노력하는 기업입니다."
      ),
      phrase(
        "로그케이의 대표 솔루션인 SelecAI 는 LLM을 기반으로 한",
        "다양한 생성형AI를 비교하고 선택해서 사용할 수 있는 온라인 솔루션 입니다."
      ),
      phrase(
        "기존 AI 제품들의 아쉬운 부분을 SelecAI에 담아",
        "효율적인 서비스로 재가공하였습니다."
      ),
      phrase(
        "저희 로그케이는 고객의 의견을 최우선으로 적극 반영하여",
        "최고의 서비스를 제공하겠습니다. 언제든 연락주세요."
      )
    ]
  },
  productPage: {
    eyebrow: "제품",
    title: "모델을 선택하고,\n비용을 확인하고,\n답변을 비교하세요.",
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
    // phrase(...) marks the preferred line-break point. See src/utils/text.ts.
    nextBody: phrase(
      "우리 회사에 맞는 AI 사용 방식 구성과 과금 정책을",
      "함께 고민해 드립니다."
    ),
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
  mediaShelfLede:
    phrase(
      "멀티 LLM 동시 활용부터 개인정보 보호, 조직 관리, 결제 워크플로까지",
      "— SelecAI 하나로 해결합니다."
    ),
  customersEyebrow: "주요 고객사",
  customers: [
    { name: "KAIST",  asset: "kaist.png",   href: "https://www.kaist.ac.kr/kr/" },
    { name: "무니티", asset: "moonity.png", href: "https://moonity.net/?lang=ko" }
  ],
  mockupsPage: {
    eyebrow: "제품 목업",
    title: "SelecAI 제품 화면",
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
    title: "업무에 적합한 플랜을 선택하고",
    titleEmphasis: "AI 활용을 시작하세요",
    description: "SelecAI 모든 플랜에 멀티 LLM 동시 활용이 포함됩니다.\n상위 플랜일수록 더 많은 크레딧과 기능을 제공합니다.",
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
      title: "지금 바로 SelecAI를 경험해 보세요",
      body: phrase(
        "무료 데모를 통해 멀티 LLM ehdtl 활용과 보안 기능을",
        "직접 확인해 보실 수 있습니다."
      ),
      ctaLabel: "무료 데모 신청하기"
    }
  }
};

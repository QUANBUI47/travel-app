/**
 * Config constants - Cấu hình chung cho ứng dụng
 */

export const APP_CONFIG = {
  APP_NAME: "Travel App",
  APP_DESCRIPTION: "Ứng dụng du lịch - Khám phá và trải nghiệm",
  APP_VERSION: "1.0.0",

  API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  API_TIMEOUT: 30000,

  FEATURES: {
    ADMIN_PANEL: false,
    AI_FEATURES: false,
    REALTIME: false,
  },

  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;

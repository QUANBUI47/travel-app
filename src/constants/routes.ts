/**
 * Route constants - Định nghĩa tất cả các routes trong ứng dụng
 */

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about-us",
  POPULAR_DESTINATIONS: "/popular-destinations",
  OUR_PACKAGES: "/our-packages",
  HELP: "/help",
  LOGIN: "/login",
  PROFILE: "/profile",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];

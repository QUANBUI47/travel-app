/**
 * Message Dictionary - Tất cả các messages trong ứng dụng
 */

export const MESSAGES = {
  SUCCESS: {
    SAVED: "Đã lưu thành công",
    DELETED: "Đã xóa thành công",
    UPDATED: "Đã cập nhật thành công",
    CREATED: "Đã tạo thành công",
  },
  ERROR: {
    GENERIC: "Có lỗi xảy ra. Vui lòng thử lại sau.",
    NOT_FOUND: "Không tìm thấy dữ liệu",
    UNAUTHORIZED: "Bạn không có quyền truy cập",
    FORBIDDEN: "Truy cập bị từ chối",
    VALIDATION: "Dữ liệu không hợp lệ",
    NETWORK: "Lỗi kết nối mạng",
  },
  VALIDATION: {
    REQUIRED: "Trường này là bắt buộc",
    EMAIL: "Email không hợp lệ",
    MIN_LENGTH: "Tối thiểu {min} ký tự",
    MAX_LENGTH: "Tối đa {max} ký tự",
  },
} as const;

export type MessageKey = keyof typeof MESSAGES;
export type MessageValue = (typeof MESSAGES)[MessageKey];

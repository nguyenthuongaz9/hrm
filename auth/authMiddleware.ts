import { withAuth } from "next-auth/middleware";

// Middleware để kiểm tra xem người dùng đã đăng nhập chưa
const authMiddleware = withAuth({
    pages: {
        signIn: "/", // Chuyển hướng đến trang đăng nhập nếu người dùng chưa đăng nhập
    }
});

// Xuất hàm middleware
export default authMiddleware;

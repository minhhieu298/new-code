// pages/api/theme.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Giả lập lưu theme trong một biến (thay bằng cơ sở dữ liệu trong thực tế)
let userTheme: 'light' | 'dark' = 'dark';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Trả về theme hiện tại
    res.status(200).json({ theme: userTheme });
  } else if (req.method === 'POST') {
    // Cập nhật theme
    const { theme } = req.body;
    if (theme === 'light' || theme === 'dark') {
      userTheme = theme;
      res.status(200).json({ theme: userTheme });
    } else {
      res.status(400).json({ error: 'Invalid theme' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
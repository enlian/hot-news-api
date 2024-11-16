import { NextResponse } from 'next/server';
import axios from 'axios';

// 定义目标 URL
const NHK_NEWS_URL = 'https://nwapi.nhk.jp/nhkworld/rdnewsweb/v7b/zh/outline/list.json';

// API 路由
export async function GET() {
  try {
    // 从目标 API 获取数据
    const response = await axios.get(NHK_NEWS_URL);
    const data = response.data;

    // 可以在这里对数据进行处理或筛选
    const filteredData = data; // 如果需要筛选，可以改这里

    // 返回 JSON 数据
    return NextResponse.json({ success: true, data: filteredData });
  } catch (error) {
    console.error('Error fetching NHK news:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch NHK news' },
      { status: 500 }
    );
  }
}

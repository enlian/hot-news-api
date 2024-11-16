import { NextResponse } from 'next/server';
import axios from 'axios';

const NHK_NEWS_URL = 'https://nwapi.nhk.jp/nhkworld/rdnewsweb/v7b/zh/outline/list.json';

// API 路由
export async function GET() {
  try {
    const response = await axios.get(NHK_NEWS_URL);
    const data = response.data;

    const filteredData = data; 

    return NextResponse.json({ success: true, data: filteredData });
  } catch (error) {
    console.error('Error fetching NHK news:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch NHK news' },
      { status: 500 }
    );
  }
}

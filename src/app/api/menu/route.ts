import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { menuData as initialItems, menuCategories as initialCategories } from '@/data/menu';

const docRef = doc(db, 'kitchen', 'menuData');

async function getMenuData() {
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    const initData = { categories: initialCategories, items: initialItems };
    await setDoc(docRef, initData);
    return initData;
  }
  return snapshot.data();
}

export async function GET() {
  try {
    const data = await getMenuData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Firebase GET error:", error);
    return NextResponse.json({ error: 'Failed to read menu data from Firebase' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newData = await request.json();
    await setDoc(docRef, newData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Firebase POST error:", error);
    return NextResponse.json({ error: 'Failed to write menu data to Firebase' }, { status: 500 });
  }
}

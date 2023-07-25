import { getPriorityOrders } from "@/prisma";
import { revalidatePath } from "next/cache";

export async function GET(req) {
  const orders = await getPriorityOrders();
  const path = req.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
  return new Response(JSON.stringify(orders));
}

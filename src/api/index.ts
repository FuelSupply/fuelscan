import { BlockDetail, Transaction, Block } from '@/types'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
// 表示时间间隔 30s nextjs 会去请求一次 只作用于get请求
const revalidate = { next: { revalidate: 30 } }
// 查询block数据
export const queryBlock = async (): Promise<Block[]> => {
  const res = await fetch(baseUrl + "/block", revalidate)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

// 查询交易数据
export const queryTxs = async () => {
  const res = await fetch(baseUrl + "/transaction", revalidate)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

// 根据制定blockHash查询查询交易
export const queryBlockDetail = async (id: string): Promise<BlockDetail> => {
  const res = await fetch(baseUrl + "/block/" + id, revalidate)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

// 根据制定blockHash查询查询交易
export const queryTxDetail = async (hash: string): Promise<Transaction> => {
  const res = await fetch(baseUrl + "/transaction/" + hash, revalidate)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
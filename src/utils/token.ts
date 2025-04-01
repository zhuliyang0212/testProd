// 存储数据、读取数据
export const SET_TOKEN = (token: string) => {
  return localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}


export default {
    findAll: async () => {
        let url = "http://localhost:3001/api/accounts"
        let res = await fetch(url)
        let data = await res.json()
        return data.data
    }
}
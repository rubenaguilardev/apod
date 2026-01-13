const apiKey = import.meta.env.VITE_NASA_API_KEY
const baseUrl = 'https://api.nasa.gov/planetary/apod'


export const fetchApodRange = async (days) => {

    const startDate = '2026-01-06'
    const endDate = '2026-01-10'
    const url = `${baseUrl}?api_key=${apiKey}&end_date=${endDate}&start_date=${startDate}`
    
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error('failed to fectch APOD range')
        }
        return await res.json()
    } catch(err) {
        console.error('fetchApodRange error:', err)
        throw err
    }
}


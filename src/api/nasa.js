const apiKey = 'DEMO_KEY'
const baseUrl = 'https://api.nasa.gov/planetary/apod'


export const fetchApod = async () => {
    
    const url = `${baseUrl}?api_key=${apiKey}`

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error('failed to fetch APOD data')
        }
        return await res.json()
    } catch(err) {
        console.error('fetchApod error:', err)
        throw err
    }
}


export const fetchApodRange = async (days) => {

    const url = `${baseUrl}?api_key=${apiKey}&end_date=${endDate}&start_date=${startDate}`
    const startDate = '2026-01-08'
    const endDate = '2026-01-12'

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


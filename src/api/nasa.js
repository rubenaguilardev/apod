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


const Description = ({ data }) => {
    return (
        <section className="py-10 overflow-x-hidden">
            <div className="mx-auto grid gap-4 px-6 text-muted">
                <p className='leading-7'>
                    {data?.explanation || 'Explore the wonders of the universe with our Astronomy Picture of the Day (APOD) gallery. Each day, we feature a stunning image or photograph of our cosmos, accompanied by a brief explanation written by a professional astronomer. Dive into the mysteries of space and discover breathtaking views of galaxies, nebulae, stars, and more.'}
                </p>
            </div>
        </section>
    )
}

export default Description
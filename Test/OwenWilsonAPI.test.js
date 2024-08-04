const request = require('supertest')
const app = require('../app')

describe('GET /OwenWilsonAPI/all-movies', () => {
  it('should return a 200 status code', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/all-movies')

    expect(resp.statusCode).toBe(200)
  })

  it('should return all movies from Owen Wilson Wow API', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/all-movies')

    expect(resp.body.length).toBeGreaterThan(0)
  })
})

describe('GET /OwenWilsonAPI/all-directors', () => {
  it('should return a 200 status code', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/all-directors')

    expect(resp.statusCode).toBe(200)
  })

  it('should return all the directors for movies where Owen Wilson say Wow', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/all-directors')

    expect(resp.body.length).toBeGreaterThan(0)
  })
})

describe('GET /OwenWilsonAPI/longest-movie-duration-wow', () => {
  it('should return a 200 status code', async () => {
    const resp = await request(app).get(
      '/OwenWilsonAPI/longest-movie-duration-wow'
    )

    expect(resp.statusCode).toBe(200)
  })

  it('should return a JSON with the information of the movie with longest duration from Owen Wilson Wow API', async () => {
    const resp = await request(app).get(
      '/OwenWilsonAPI/longest-movie-duration-wow'
    )

    expect(resp.body).toHaveProperty('movie')
    expect(resp.body).toHaveProperty('year')
    expect(resp.body).toHaveProperty('director')
    expect(resp.body).toHaveProperty('character')
  })
})

describe('GET /OwenWilsonAPI/first-and-last-wow', () => {
  it('should return a 200 status code', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/first-and-last-wow')

    expect(resp.statusCode).toBe(200)
  })

  it('should return a JSON with two movies from Owen Wilson Wow API', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/first-and-last-wow')

    expect(resp.body).toHaveProperty('firstWowOrdered')
    expect(resp.body).toHaveProperty('lastWowOrdered')
  })

  it('should return a JSON with the information of the first movie from Owen Wilson Wow API', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/first-and-last-wow')

    expect(resp.body.firstWowOrdered).toHaveProperty('movie')
    expect(resp.body.firstWowOrdered).toHaveProperty('year')
    expect(resp.body.firstWowOrdered).toHaveProperty('director')
    expect(resp.body.firstWowOrdered).toHaveProperty('character')
  })

  it('should return a JSON with the information of the first movie from Owen Wilson Wow API', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/first-and-last-wow')

    expect(resp.body.lastWowOrdered).toHaveProperty('movie')
    expect(resp.body.lastWowOrdered).toHaveProperty('year')
    expect(resp.body.lastWowOrdered).toHaveProperty('director')
    expect(resp.body.lastWowOrdered).toHaveProperty('character')
  })
})

describe('GET /OwenWilsonAPI/median-wow', () => {
  it('should return a 200 status code', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/median-wow')

    expect(resp.statusCode).toBe(200)
  })

  it('should return a JSON with the medianData property', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/median-wow')

    expect(resp.body).toHaveProperty('medianData')
  })

  it('should return a JSON with the information of the median movie from Owen Wilson Wow API', async () => {
    const resp = await request(app).get('/OwenWilsonAPI/median-wow')

    expect(resp.body.medianData).toHaveProperty('movie')
    expect(resp.body.medianData).toHaveProperty('year')
    expect(resp.body.medianData).toHaveProperty('director')
    expect(resp.body.medianData).toHaveProperty('character')
  })
})

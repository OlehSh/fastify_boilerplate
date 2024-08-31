import fastify from 'fastify'

const server = fastify({
    logger: true
})

server.get('/health', async (request, reply) => {
    console.log('GET /health', request.headers)
    reply.code(201)
    return { status: 'ok' }
})

server.listen({ port: 4000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
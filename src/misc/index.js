
const abs = (value) => Math.abs(value)

const datenow = () => (Date.now && Date.now() || + new Date())

const isfunc = (f) => (typeof f == 'function')

const SPRITESPATH = '../textures/sprites'

const LEVELBGPATH = '../textures/levels'

const [CANVASSCENEW, CANVASSCENEH] = [720, 445]

const [SCENEW, SCENEH] = [6784, 448]

export { abs, datenow, isfunc, SPRITESPATH, LEVELBGPATH, SCENEW, SCENEH, CANVASSCENEW, CANVASSCENEH }
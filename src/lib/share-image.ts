import { toBlob } from 'html-to-image'

const SHARE_CARD_WIDTH = 720
const SHARE_CARD_HEIGHT = 960
const SHARE_IMAGE_WIDTH = 1440
const SHARE_IMAGE_HEIGHT = 1920

const backgroundByTheme = {
  light: '#F7F6F4',
  dark: '#05131B',
} as const

function findShareCard(element: HTMLElement): HTMLElement {
  if (element.matches('.share-card')) return element

  const card = element.querySelector<HTMLElement>('.share-card')
  if (!card) throw new Error('Não foi encontrado o card de compartilhamento.')

  return card
}

async function waitForImage(image: HTMLImageElement): Promise<void> {
  image.loading = 'eager'

  if (image.complete) {
    if (image.naturalWidth === 0) {
      throw new Error(`Não foi possível carregar a imagem ${image.currentSrc || image.src}.`)
    }

    await image.decode().catch(() => undefined)
    return
  }

  await new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      cleanup()
      reject(new Error(`A imagem demorou para carregar: ${image.currentSrc || image.src}.`))
    }, 12_000)

    const cleanup = () => {
      window.clearTimeout(timeout)
      image.removeEventListener('load', onLoad)
      image.removeEventListener('error', onError)
    }

    const onLoad = () => {
      cleanup()
      if (image.naturalWidth === 0) {
        reject(new Error(`Não foi possível carregar a imagem ${image.currentSrc || image.src}.`))
        return
      }
      resolve()
    }

    const onError = () => {
      cleanup()
      reject(new Error(`Não foi possível carregar a imagem ${image.currentSrc || image.src}.`))
    }

    image.addEventListener('load', onLoad, { once: true })
    image.addEventListener('error', onError, { once: true })
  })
}

async function waitForCaptureAssets(card: HTMLElement): Promise<void> {
  if ('fonts' in document) await document.fonts.ready
  await Promise.all(Array.from(card.querySelectorAll('img'), waitForImage))
  await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
}

async function assertOutputDimensions(imageUrl: string): Promise<void> {
  const image = new Image()
  image.src = imageUrl
  await image.decode()
  if (image.naturalWidth !== SHARE_IMAGE_WIDTH || image.naturalHeight !== SHARE_IMAGE_HEIGHT) {
    throw new Error(`A imagem foi gerada com ${image.naturalWidth} × ${image.naturalHeight}px; esperado ${SHARE_IMAGE_WIDTH} × ${SHARE_IMAGE_HEIGHT}px.`)
  }
}

/** Downloads the rendered results card as a 1440 × 1920 PNG. */
export async function downloadShareImage(element: HTMLElement, theme: 'light' | 'dark'): Promise<void> {
  const card = findShareCard(element)
  const { width, height } = card.getBoundingClientRect()
  if (width === 0 || height === 0) {
    throw new Error('O card de compartilhamento precisa estar renderizado para gerar a imagem.')
  }

  await waitForCaptureAssets(card)

  const imageBlob = await toBlob(card, {
    width: SHARE_CARD_WIDTH,
    height: SHARE_CARD_HEIGHT,
    canvasWidth: SHARE_IMAGE_WIDTH,
    canvasHeight: SHARE_IMAGE_HEIGHT,
    pixelRatio: 1,
    skipAutoScale: true,
    cacheBust: false,
    backgroundColor: backgroundByTheme[theme],
    style: {
      boxSizing: 'border-box',
      width: `${SHARE_CARD_WIDTH}px`,
      minWidth: `${SHARE_CARD_WIDTH}px`,
      maxWidth: 'none',
      height: `${SHARE_CARD_HEIGHT}px`,
      aspectRatio: 'auto',
      margin: '0',
      position: 'relative',
      inset: 'auto',
      transform: 'none',
      opacity: '1',
      visibility: 'visible',
    },
  })
  if (!imageBlob) throw new Error('O navegador não conseguiu criar a imagem PNG.')

  const imageUrl = URL.createObjectURL(imageBlob)
  try {
    await assertOutputDimensions(imageUrl)

    const link = document.createElement('a')
    link.href = imageUrl
    link.download = '12eixos-resultado.png'
    link.tabIndex = -1
    link.setAttribute('aria-hidden', 'true')
    Object.assign(link.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '1px',
      height: '1px',
      opacity: '0',
      pointerEvents: 'none',
    })
    document.body.append(link)
    link.click()

    // Keep the rendered download target and its object URL alive until the
    // embedded browser has received the download navigation.
    window.setTimeout(() => {
      link.remove()
      URL.revokeObjectURL(imageUrl)
    }, 60_000)
  } catch (error) {
    URL.revokeObjectURL(imageUrl)
    throw error
  }
}

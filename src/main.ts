import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://backers.webawesome.com/" target="_blank">
      <svg class="logo" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.63 1.625C11.63 2.27911 11.2435 2.84296 10.6865 3.10064L14 6L17.2622 5.34755C17.0968 5.10642 17 4.81452 17 4.5C17 3.67157 17.6716 3 18.5 3C19.3284 3 20 3.67157 20 4.5C20 5.31157 19.3555 5.9726 18.5504 5.99917L15.0307 13.8207C14.7077 14.5384 13.9939 15 13.2068 15H6.79317C6.00615 15 5.29229 14.5384 4.96933 13.8207L1.44963 5.99917C0.64452 5.9726 0 5.31157 0 4.5C0 3.67157 0.671573 3 1.5 3C2.32843 3 3 3.67157 3 4.5C3 4.81452 2.9032 5.10642 2.73777 5.34755L6 6L9.31702 3.09761C8.76346 2.83855 8.38 2.27656 8.38 1.625C8.38 0.727537 9.10754 0 10.005 0C10.9025 0 11.63 0.727537 11.63 1.625Z" fill="var(--wa-brand-orange, #f36944)"></path>
      </svg>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>WebAwesome + Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Web Awesome, Vite and TypeScript logos to learn more
    </p>

    <wa-divider style="--color: tomato;"></wa-divider>

    <p>
      <span><a target="_blank" href="https://backers.webawesome.com/docs/components/">Web Awesome Components</a></span>
    </p>

    <wa-divider style="--color: tomato;"></wa-divider>
    
    <p>
      <wa-button>Web Awesome Button</wa-button>
    </p>

    <wa-divider style="--color: tomato;"></wa-divider>

    <p>
      <span><a target="_blank" href="https://backers.webawesome.com/docs/components/carousel/">Web Awesome Carousel</a></span>
      <wa-carousel pagination navigation mouse-dragging loop>
        <wa-carousel-item>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          />
        </wa-carousel-item>
        <wa-carousel-item>
          <img
            alt="A river winding through an evergreen forest (by Luca Bravo on Unsplash)"
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          />
        </wa-carousel-item>
        <wa-carousel-item>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          />
        </wa-carousel-item>
        <wa-carousel-item>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          />
        </wa-carousel-item>
        <wa-carousel-item>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          />
        </wa-carousel-item>
      </wa-carousel>

    </p>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

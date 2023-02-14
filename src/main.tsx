import * as elements from 'typed-html/dist/src/elements';
import {setupCounter} from './counter'

function app() {
  return <div>
    <h1>TOTP</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = app()

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

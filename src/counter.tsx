import * as elements from 'typed-html/dist/src/elements';

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = someHtml(count);
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function someHtml(count: number) {
  return <div>hello: {count}</div>
}
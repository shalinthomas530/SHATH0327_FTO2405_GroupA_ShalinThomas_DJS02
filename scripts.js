const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  if (isNaN(Number(dividend)) || isNaN(Number(divider))) {
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>"
    throw new InvalidNumberError("failed to parse number");

  }else if (divider.length > 0 && dividend.length > 0) {
    try {
      if (dividend == 0 | divider == 0) {
        throw new ZeroDivisionError("zero divider");

      }else {
        result.innerText = Math.floor(dividend / divider);

      }
    } catch (error) {
      console.error(error);
      result.innerText = "Division not performed. Invalid number provided. Try again"
    }

  }else {
    result.innerText = "Division not performed. Both values are required in inputs. Try again"

  }
});


// --------------- Error types ---------------
class ZeroDivisionError extends Error {
  constructor(message, extra) {
    super(message);
    this.name = "ZeroDivisionError";
    this.extra = extra;
  }
}

class InvalidNumberError extends Error {
  constructor(message, extra) {
    super(message);
    this.name = "InvalidNumberError";
    this.extra = extra;
  }
}
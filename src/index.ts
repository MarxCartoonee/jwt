import * as pako from "pako";

namespace index {
  const input: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("jwt")
  );
  const headerContainer: HTMLElement = <HTMLElement>(
    document.getElementById("tokenHeader")
  );
  const payloadContainer: HTMLElement = <HTMLElement>(
    document.getElementById("tokenPayload")
  );

  const tokenToObject = (token: string) => {
    const replace = token.replace(/-/g, "+").replace(/_/g, "/");
    const split = replace.split(".");
    const decoded = split.map(v => atob(v));

    const inflated = pako.inflate(decoded[1], { to: "string" });
    const tokenData = JSON.parse(inflated);

    headerContainer.innerText = JSON.stringify(JSON.parse(decoded[0]), null, 4);
    payloadContainer.innerText = JSON.stringify(tokenData, null, 4);
  };

  const handleInput = () => {
    console.trace();
    const value = input.value;
    tokenToObject(value);
  };

  input.addEventListener("input", handleInput);
  window.addEventListener("load", handleInput);
}

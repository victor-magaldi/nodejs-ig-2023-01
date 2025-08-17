import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 5) {
        this.push(null);
      } else {
        this.push(Buffer.from(String(i)));
      }
    }, 1000);
  }
}

const stream = Readable.toWeb(new OneToHundredStream());

fetch("http://localhost:3334", {
  method: "POST",
  body: stream,
  duplex: "half", // 
}).then(response => response.text())
  .then(data => console.log(data))
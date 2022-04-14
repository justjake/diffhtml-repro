import { innerHTML } from "diffhtml";

innerHTML(window.document.body, "<h1>hello</h1>");
console.log(window.document.body.outerHTML);

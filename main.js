import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
  <h1>AI Image Generator</h1>
    <div class="card">
    <div id="result">
    <img src="" alt=""/>
    </div>
    <form>
    <label>Prompt</label>
    <textarea name="prompt" maxlength="160"></textarea>
    </form>
     <button>Generate</button>
    </div>
  </div>
`;

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {});

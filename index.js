// Fetch wells.json and render it to the page
fetch("./wells.json")
  .then((response) => response.json())
  .then((wells) => {
    const wellList = document.getElementById("well-list");
    wells.forEach((well) => {
      const wellElement = document.createElement("div");
      wellElement.innerHTML = `
        <div class="well">
            <div>
                <img src="./images/oil-rig-svgrepo-com.svg" alt="" />
            </div>
            <div>
                <h2> ${well.name}</h2>
                <a href="${well.url}">Conectar</a>
            </div>
        </div>
      `;
      wellList.appendChild(wellElement);
    });
  });

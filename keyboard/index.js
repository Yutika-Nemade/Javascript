const insert = document.querySelector("#insert");

insert.innerHTML = `
    <div class="color">
    <table>
        <thead>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>code</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    </div>
    `;

window.addEventListener("keydown", (e) => {
  const tableBody = insert.querySelector("tbody");

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
    `;

  tableBody.appendChild(newRow);
});

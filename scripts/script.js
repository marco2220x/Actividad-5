function bigImg(x) {
   x.style.height = "100px";
   x.style.width = "100px";
}

function normalImg(x) {
   x.style.height = "64px";
   x.style.width = "64px";
}

function filterTable() {
  // Variables
  let dropdown, table, rows, cells, gen, filter;
  dropdown = document.getElementById("filter");
  table = document.getElementById("ArtTable");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;


  for (let row of rows) {
    cells = row.getElementsByTagName("td");
    country = cells[4] || null; 

    if (filter === "Género" || !gen || (filter === gen.textContent)) {
      row.style.display = "";
    }
    else {
      row.style.display = "none";
    }
  }
}

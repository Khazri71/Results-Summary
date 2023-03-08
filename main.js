//  Variables
let theSummInfos = document.querySelector(
  ".results-summary .summary .sum-infos "
);

//Fetch Data From Json File
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((da, index) => {
      //Create The summary Info Div
      let summInfo = document.createElement("div");
      //Add Class To The Summary Info Div
      summInfo.className = "sum-info";

      //Add Src Icon To Images
      summInfo.innerHTML = `<img  src="${da.icon}" alt= "icon${index + 1}"/>`;
      //Create P1
      let p1 = document.createElement("p");
      //Create The Category Text
      let pCategoryText = document.createTextNode(da.category);
      //Add The Category Text To P1
      p1.appendChild(pCategoryText);
      //Add The P1 To The Summary Info
      summInfo.appendChild(p1);

      //Create P2
      let p2 = document.createElement("p");
      //Add The Score Num In HTML
      p2.innerHTML = `${da.score}<span> / 100</span> `;
      //Add The P2 To The Summary Info
      summInfo.appendChild(p2);

      console.log(summInfo);
      //Add The SSummary Info To The Summary Infos
      theSummInfos.appendChild(summInfo);
    });
  });

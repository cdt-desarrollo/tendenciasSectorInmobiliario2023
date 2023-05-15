var today = new Date
var actualMonth = today.getMonth()-1
let eneInputRadios = []
let eneThElements = []
let eneTdElements = []
let febInputRadios = []
let febThElements = []
let febTdElements = []
let marInputRadios = []
let marThElements = []
let marTdElements = []
let abrInputRadios = []
let abrThElements = []
let abrTdElements = []
let mayInputRadios = []
let mayThElements = []
let mayTdElements = []
let junInputRadios = []
let junThElements = []
let junTdElements = []
let julInputRadios = []
let julThElements = []
let julTdElements = []
let agoInputRadios = []
let agoThElements = []
let agoTdElements = []
let sepInputRadios = []
let sepThElements = []
let sepTdElements = []
let octInputRadios = []
let octThElements = []
let octTdElements = []
let novInputRadios = []
let novThElements = []
let novTdElements = []
let dicInputRadios = []
let dicThElements = []
let dicTdElements = []
let activeMonths = []

function setMonthsWithChechboxInTable(){
  let monthsThText = document.getElementById("monthsThText")
  let monthsText = ``;
  for(let i = 0; i <= actualMonth; i++)
  {
    monthsThText.innerHTML = ``
    if(i == 0)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput"  onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
    if(i == actualMonth)
      {
        break
      }
    }
    if(i == 1)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 2)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 3)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 4)
    {
    monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        May
        <input class="form-check-input" type="checkbox" name="m1" value="may" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 5)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        May
        <input class="form-check-input" type="checkbox" name="m1" value="may" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jun
        <input class="form-check-input" type="checkbox" name="m1" value="jun" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 6)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        May
        <input class="form-check-input" type="checkbox" name="m1" value="may" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jun
        <input class="form-check-input" type="checkbox" name="m1" value="jun" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jul
        <input class="form-check-input" type="checkbox" name="m1" value="jul" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 7)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        May
        <input class="form-check-input" type="checkbox" name="m1" value="may" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jun
        <input class="form-check-input" type="checkbox" name="m1" value="jun" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jul
        <input class="form-check-input" type="checkbox" name="m1" value="jul" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Ago
        <input class="form-check-input" type="checkbox" name="m1" value="ago" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 8)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        May
        <input class="form-check-input" type="checkbox" name="m1" value="may" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jun
        <input class="form-check-input" type="checkbox" name="m1" value="jun" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jul
        <input class="form-check-input" type="checkbox" name="m1" value="jul" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Ago
        <input class="form-check-input" type="checkbox" name="m1" value="ago" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Sep
        <input class="form-check-input" type="checkbox" name="m1" value="sep" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 9)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        May
        <input class="form-check-input" type="checkbox" name="m1" value="may" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jun
        <input class="form-check-input" type="checkbox" name="m1" value="jun" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jul
        <input class="form-check-input" type="checkbox" name="m1" value="jul" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Ago
        <input class="form-check-input" type="checkbox" name="m1" value="ago" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Sep
        <input class="form-check-input" type="checkbox" name="m1" value="sep" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Oct
        <input class="form-check-input" type="checkbox" name="m1" value="oct" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 10)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        May
        <input class="form-check-input" type="checkbox" name="m1" value="may" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jun
        <input class="form-check-input" type="checkbox" name="m1" value="jun" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jul
        <input class="form-check-input" type="checkbox" name="m1" value="jul" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Ago
        <input class="form-check-input" type="checkbox" name="m1" value="ago" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Sep
        <input class="form-check-input" type="checkbox" name="m1" value="sep" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Oct
        <input class="form-check-input" type="checkbox" name="m1" value="oct" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Nov
        <input class="form-check-input" type="checkbox" name="m1" value="nov" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
    if(i == 11)
    {
      monthsText = `
      <th>
        Ene
        <input class="form-check-input" type="checkbox" name="m1" value="ene" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Feb
        <input class="form-check-input" type="checkbox" name="m1" value="feb" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Mar
        <input class="form-check-input" type="checkbox" name="m1" value="mar" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">        
      </th>
      <th>
        Abr
        <input class="form-check-input" type="checkbox" name="m1" value="abr" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        May
        <input class="form-check-input" type="checkbox" name="m1" value="may" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jun
        <input class="form-check-input" type="checkbox" name="m1" value="jun" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Jul
        <input class="form-check-input" type="checkbox" name="m1" value="jul" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Ago
        <input class="form-check-input" type="checkbox" name="m1" value="ago" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Sep
        <input class="form-check-input" type="checkbox" name="m1" value="sep" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Oct
        <input class="form-check-input" type="checkbox" name="m1" value="oct" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Nov
        <input class="form-check-input" type="checkbox" name="m1" value="nov" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      <th>
        Dic
        <input class="form-check-input" type="checkbox" name="m1" value="dic" id="monthRadioInput" onchange="getValuesFromSelectionMonths()">
      </th>
      `
      monthsThText.innerHTML += monthsText
      if(i == actualMonth)
      {
        break
      }
    }
  }
}
function getValuesFromSelectionMonths(){
  let months = []
  var ele = document.getElementsByTagName("input");
  for (let i = 0; i < ele.length; i++)
  {
    if(ele[i].type == "checkbox" && ele[i].checked == true){
        months.push(ele[i].value)
    }
  }
  designTablesByPastMonths(months)
}
function designTablesByPastMonths(array){
  let inputRadioElements = document.getElementsByTagName("input")
  let thElements = document.getElementsByTagName("th")
  let tdElements = document.getElementsByTagName("td")
  let tables = document.getElementsByTagName("table")
  if (array.length == 0) {
    for (let i = 0; i < thElements.length; i++) {
      if (thElements[i].id === "ene") {
        eneThElements.push(thElements[i])
      }
      else if (thElements[i].id === "feb") {
        febThElements.push(thElements[i])
      }
      else if (thElements[i].id === "mar") {
        marThElements.push(thElements[i])
      }
      else if (thElements[i].id === "abr") {
        abrThElements.push(thElements[i])
      }
      else if (thElements[i].id === "may") {
        mayThElements.push(thElements[i])
      }
      else if (thElements[i].id === "jun") {
        junThElements.push(thElements[i])
      }
      else if (thElements[i].id === "jul") {
        julThElements.push(thElements[i])
      }
      else if (thElements[i].id === "ago") {
        agoThElements.push(thElements[i])
      }
      else if (thElements[i].id === "sep") {
        sepThElements.push(thElements[i])
      }
      else if (thElements[i].id === "oct") {
        octThElements.push(thElements[i])
      }
      else if (thElements[i].id === "nov") {
        novThElements.push(thElements[i])
      }
      else if (thElements[i].id === "dic") {
        dicThElements.push(thElements[i])
      }
    }
    for (let i = 0; i < tdElements.length; i++) {
      if (tdElements[i].id === "ene") {
        eneTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "feb") {
        febTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "mar") {
        marTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "abr") {
        abrTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "may") {
        mayTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "jun") {
        junTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "jul") {
        julTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "ago") {
        agoTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "sep") {
        sepTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "oct") {
        octTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "nov") {
        novTdElements.push(tdElements[i])
      }
      else if (tdElements[i].id === "dic") {
        dicTdElements.push(tdElements[i])
      }
    }
    for (let i = 0; i <= 11; i++) {
      if (i == 0) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "none";
          marThElements[k].style.display = "none";
          abrThElements[k].style.display = "none";
          mayThElements[k].style.display = "none";
          junThElements[k].style.display = "none";
          julThElements[k].style.display = "none";
          agoThElements[k].style.display = "none";
          sepThElements[k].style.display = "none";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "none";
          marTdElements[k].style.display = "none";
          abrTdElements[k].style.display = "none";
          mayTdElements[k].style.display = "none";
          junTdElements[k].style.display = "none";
          julTdElements[k].style.display = "none";
          agoTdElements[k].style.display = "none";
          sepTdElements[k].style.display = "none";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 1) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "none";
          abrThElements[k].style.display = "none";
          mayThElements[k].style.display = "none";
          junThElements[k].style.display = "none";
          julThElements[k].style.display = "none";
          agoThElements[k].style.display = "none";
          sepThElements[k].style.display = "none";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "none";
          abrTdElements[k].style.display = "none";
          mayTdElements[k].style.display = "none";
          junTdElements[k].style.display = "none";
          julTdElements[k].style.display = "none";
          agoTdElements[k].style.display = "none";
          sepTdElements[k].style.display = "none";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 2) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "none";
          mayThElements[k].style.display = "none";
          junThElements[k].style.display = "none";
          julThElements[k].style.display = "none";
          agoThElements[k].style.display = "none";
          sepThElements[k].style.display = "none";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "none";
          mayTdElements[k].style.display = "none";
          junTdElements[k].style.display = "none";
          julTdElements[k].style.display = "none";
          agoTdElements[k].style.display = "none";
          sepTdElements[k].style.display = "none";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 3) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "none";
          junThElements[k].style.display = "none";
          julThElements[k].style.display = "none";
          agoThElements[k].style.display = "none";
          sepThElements[k].style.display = "none";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "none";
          junTdElements[k].style.display = "none";
          julTdElements[k].style.display = "none";
          agoTdElements[k].style.display = "none";
          sepTdElements[k].style.display = "none";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          break
        }
      }
      if (i == 4) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "table-cell";
          junThElements[k].style.display = "none";
          julThElements[k].style.display = "none";
          agoThElements[k].style.display = "none";
          sepThElements[k].style.display = "none";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "table-cell";
          junTdElements[k].style.display = "none";
          julTdElements[k].style.display = "none";
          agoTdElements[k].style.display = "none";
          sepTdElements[k].style.display = "none";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 5) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "table-cell";
          junThElements[k].style.display = "table-cell";
          julThElements[k].style.display = "none";
          agoThElements[k].style.display = "none";
          sepThElements[k].style.display = "none";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "table-cell";
          junTdElements[k].style.display = "table-cell";
          julTdElements[k].style.display = "none";
          agoTdElements[k].style.display = "none";
          sepTdElements[k].style.display = "none";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 6) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "table-cell";
          junThElements[k].style.display = "table-cell";
          julThElements[k].style.display = "table-cell";
          agoThElements[k].style.display = "none";
          sepThElements[k].style.display = "none";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "table-cell";
          junTdElements[k].style.display = "table-cell";
          julTdElements[k].style.display = "table-cell";
          agoTdElements[k].style.display = "none";
          sepTdElements[k].style.display = "none";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 7) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "table-cell";
          junThElements[k].style.display = "table-cell";
          julThElements[k].style.display = "table-cell";
          agoThElements[k].style.display = "table-cell";
          sepThElements[k].style.display = "none";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "table-cell";
          junTdElements[k].style.display = "table-cell";
          julTdElements[k].style.display = "table-cell";
          agoTdElements[k].style.display = "table-cell";
          sepTdElements[k].style.display = "none";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 8) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "table-cell";
          junThElements[k].style.display = "table-cell";
          julThElements[k].style.display = "table-cell";
          agoThElements[k].style.display = "table-cell";
          sepThElements[k].style.display = "table-cell";
          octThElements[k].style.display = "none";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "table-cell";
          junTdElements[k].style.display = "table-cell";
          julTdElements[k].style.display = "table-cell";
          agoTdElements[k].style.display = "table-cell";
          sepTdElements[k].style.display = "table-cell";
          octTdElements[k].style.display = "none";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 9) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "table-cell";
          junThElements[k].style.display = "table-cell";
          julThElements[k].style.display = "table-cell";
          agoThElements[k].style.display = "table-cell";
          sepThElements[k].style.display = "table-cell";
          octThElements[k].style.display = "table-cell";
          novThElements[k].style.display = "none";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "table-cell";
          junTdElements[k].style.display = "table-cell";
          julTdElements[k].style.display = "table-cell";
          agoTdElements[k].style.display = "table-cell";
          sepTdElements[k].style.display = "table-cell";
          octTdElements[k].style.display = "table-cell";
          novTdElements[k].style.display = "none";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 10) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "table-cell";
          junThElements[k].style.display = "table-cell";
          julThElements[k].style.display = "table-cell";
          agoThElements[k].style.display = "table-cell";
          sepThElements[k].style.display = "table-cell";
          octThElements[k].style.display = "table-cell";
          novThElements[k].style.display = "table-cell";
          dicThElements[k].style.display = "none";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "table-cell";
          junTdElements[k].style.display = "table-cell";
          julTdElements[k].style.display = "table-cell";
          agoTdElements[k].style.display = "table-cell";
          sepTdElements[k].style.display = "table-cell";
          octTdElements[k].style.display = "table-cell";
          novTdElements[k].style.display = "table-cell";
          dicTdElements[k].style.display = "none";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
      if (i == 11) {
        for (let k = 0; k < eneThElements.length; k++) {
          eneThElements[k].style.display = "table-cell";
          febThElements[k].style.display = "table-cell";
          marThElements[k].style.display = "table-cell";
          abrThElements[k].style.display = "table-cell";
          mayThElements[k].style.display = "table-cell";
          junThElements[k].style.display = "table-cell";
          julThElements[k].style.display = "table-cell";
          agoThElements[k].style.display = "table-cell";
          sepThElements[k].style.display = "table-cell";
          octThElements[k].style.display = "table-cell";
          novThElements[k].style.display = "table-cell";
          dicThElements[k].style.display = "table-cell";
        }
        for (let k = 0; k < eneTdElements.length; k++) {
          eneTdElements[k].style.display = "table-cell";
          febTdElements[k].style.display = "table-cell";
          marTdElements[k].style.display = "table-cell";
          abrTdElements[k].style.display = "table-cell";
          mayTdElements[k].style.display = "table-cell";
          junTdElements[k].style.display = "table-cell";
          julTdElements[k].style.display = "table-cell";
          agoTdElements[k].style.display = "table-cell";
          sepTdElements[k].style.display = "table-cell";
          octTdElements[k].style.display = "table-cell";
          novTdElements[k].style.display = "table-cell";
          dicTdElements[k].style.display = "table-cell";
        }
        if (i == actualMonth) {
          console.log(actualMonth)
          break
        }
      }
    }
  }
}
function getValues() {
  var data = [];
  var ele = document.getElementsByTagName("input");
  var companyName = document.getElementById("companyName").value;
  var staffName = document.getElementById("staffName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type == "radio" || "text")) {
      if (ele[i].checked) {
        data.push(ele[i].value);
      }
    }
  }
  data.push(companyName, staffName, email, phone)
  console.log(data)
  if(data.length == 73){
    if(data[70] == "")
    {
      Swal.fire({
        icon: "info",
        title: "Falta que escribas el nombre de tu empresa",
        confirmButtonColor: "#3085d6"
      })
    }
    else if(data[70] != "")
    {
      Swal.fire({
        position: "center",
        title: "Enviando información",
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      sendData(data)
    }
  }
  else {
    Swal.fire({
      icon: "error",
      title: "Faltan respuestas por contestar o que agregues el nombre de tu empresa",
      confirmButtonColor: "#3085d6"
    })
  }
}
function sendData(array) {
    var data = JSON.stringify({
      q1: `${array[0]}`,
      q2ene: `${array[1]}`,
      q2feb: `${array[2]}`,
      q2mar: `${array[3]}`,
      q2abr: `${array[4]}`,
      q3ene: `${array[5]}`,
      q3feb: `${array[6]}`,
      q3mar: `${array[7]}`,
      q3abr: `${array[8]}`,
      q4ene: `${array[9]}`,
      q4feb: `${array[10]}`,
      q4mar: `${array[11]}`,
      q4abr: `${array[12]}`,
      q5ene: `${array[13]}`,
      q5feb: `${array[14]}`,
      q5mar: `${array[15]}`,
      q5abr: `${array[16]}`,
      q6ene: `${array[17]}`,
      q6feb: `${array[18]}`,
      q6mar: `${array[19]}`,
      q6abr: `${array[20]}`,
      q7ene: `${array[21]}`,
      q7feb: `${array[22]}`,
      q7mar: `${array[23]}`,
      q7abr: `${array[24]}`,
      q8ene: `${array[25]}`,
      q8feb: `${array[26]}`,
      q8mar: `${array[27]}`,
      q8abr: `${array[28]}`,
      q9ene: `${array[29]}`,
      q9feb: `${array[30]}`,
      q9mar: `${array[31]}`,
      q9abr: `${array[32]}`,
      q10ene: `${array[33]}`,
      q10feb: `${array[34]}`,
      q10mar: `${array[35]}`,
      q10abr: `${array[36]}`,
      q11ene: `${array[37]}`,
      q11feb: `${array[38]}`,
      q11mar: `${array[39]}`,
      q11abr: `${array[40]}`,
      q12ene: `${array[41]}`,
      q12feb: `${array[42]}`,
      q12mar: `${array[43]}`,
      q12abr: `${array[44]}`,
      q13ene: `${array[45]}`,
      q13feb: `${array[46]}`,
      q13mar: `${array[47]}`,
      q13abr: `${array[48]}`,
      q14ene: `${array[49]}`,
      q14feb: `${array[50]}`,
      q14mar: `${array[51]}`,
      q14abr: `${array[52]}`,
      q15ene: `${array[53]}`,
      q15feb: `${array[54]}`,
      q15mar: `${array[55]}`,
      q15abr: `${array[56]}`,
      q16ene: `${array[57]}`,
      q16feb: `${array[58]}`,
      q16mar: `${array[59]}`,
      q16abr: `${array[60]}`,
      q17ene: `${array[61]}`,
      q17feb: `${array[62]}`,
      q17mar: `${array[63]}`,
      q17abr: `${array[64]}`,
      q18ene: `${array[65]}`,
      q18feb: `${array[66]}`,
      q18mar: `${array[67]}`,
      q18abr: `${array[68]}`,
      name: `${array[69]}`,
      company: `${array[70]}`,
      email: `${array[71]}`,
      phone: `${array[72]}`,
    });
    // sheet.best
    var config = {
      method: "post",
      url: "https://sheet.best/api/sheets/32aacf91-902e-4e88-8d70-e596b2f41ceb/tabs/enemay2023",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // restdb.io
    // var config = {
    //   method: "post",
    //   url: "https://responses-5389.restdb.io/rest/responses",
    //   // mode: "cors",
    //   headers: {
    //     "x-apikey": "63ea9066478852088da681dd",
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };
  
    axios(config)
      .then((res) => {
        // console.log(res)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Información enviada, ya puede cerrar esta ventana",
          showConfirmButton: false,
          confirmButtonColor: "#3085d6",
        });
        document.getElementById("deleteDiv").remove();
        let divToInsertHTMLTags = document.getElementById("divToInsertHTMLTags");
        let notification = document.createElement("div");
        notification.innerHTML = `<h4 class="text-center">Gracias por llenar la encuesta, ya puede cerrar esta ventana.</h4>`;
        divToInsertHTMLTags.insertAdjacentElement("beforeend", notification);
      })
      .catch(async(err) => {
        console.log(err)
        // const { value: accept} =
        // await Swal.fire({
        //   icon: "error",
        //   title: "¡Algo salió mal!",
        //   text: "Recuerda que tu nombre es obligatorio",
        //   confirmButtonColor: "#3085d6",
        // })
        // if(accept){
        //   location.reload()
        // };
        Swal.fire({
          icon: "error",
          title: "Falta escribir el nombre de tu empresa",
          confirmButtonColor: "#3085d6"
        })
      });
}
function escribirCiudad(inputObject) {
  Swal.fire({
    title: "En su mayoría los compradores te visitan de...",
    html: '<input id="swal-input1" class="swal2-input" placeholder="Desde donde te visitaron"></input>',
    preConfirm: () => {
      ciudad = document.getElementById("swal-input1").value;
      if(ciudad == ""){
        escribirCiudad(inputObject)
      }
      else if(ciudad != ""){
        if (inputObject.id == "otroseneq12") {
          document.getElementById("insertCityeneq12").innerHTML = "";
          document.getElementById("otroseneq12").value = ciudad;
          document.getElementById(
            "insertCityeneq12"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
        else if (inputObject.id == "otrosfebq12") {
          document.getElementById("insertCityfebq12").innerHTML = "";
          document.getElementById("otrosfebq12").value = ciudad;
          document.getElementById(
            "insertCityfebq12"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
        else if (inputObject.id == "otrosmarq12") {
          document.getElementById("insertCitymarq12").innerHTML = "";
          document.getElementById("otrosmarq12").value = ciudad;
          document.getElementById(
            "insertCitymarq12"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
        else if (inputObject.id == "otrosabrq12") {
          document.getElementById("insertCityabrq12").innerHTML = "";
          document.getElementById("otrosabrq12").value = ciudad;
          document.getElementById(
            "insertCityabrq12"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
        else if (inputObject.id == "otrosmayq12") {
          document.getElementById("insertCitymayq12").innerHTML = "";
          document.getElementById("otrosmayq12").value = ciudad;
          document.getElementById(
            "insertCitymayq12"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
      }   
    },
  });
}
function escribirUso(inputObject) {
  Swal.fire({
    title: "Los compradores en su mayoría",
    html: '<input id="swal-input1" class="swal2-input" placeholder="Escribe el uso del espacio"></input>',
    preConfirm: () => {
      uso = document.getElementById("swal-input1").value;
      if(uso == ""){
        escribirUso(inputObject)
      }
      else if(uso != ""){
        if(inputObject.id == "otroseneq16"){
          document.getElementById("insertUseeneq16").innerHTML = "";
          document.getElementById("otroseneq16").value = uso;
          document.getElementById(
            "insertUseeneq16"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
        if(inputObject.id == "otrosfebq16"){
          document.getElementById("insertUsefebq16").innerHTML = "";
          document.getElementById("otrosfebq16").value = uso;
          document.getElementById(
            "insertUsefebq16"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
        if(inputObject.id == "otrosmarq16"){
          document.getElementById("insertUsemarq16").innerHTML = "";
          document.getElementById("otrosmarq16").value = uso;
          document.getElementById(
            "insertUsemarq16"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
        if(inputObject.id == "otrosabrq16"){
          document.getElementById("insertUseabrq16").innerHTML = "";
          document.getElementById("otrosabrq16").value = uso;
          document.getElementById(
            "insertUseabrq16"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
        if(inputObject.id == "otrosmayq16"){
          document.getElementById("insertUsemayq16").innerHTML = "";
          document.getElementById("otrosmayq16").value = uso;
          document.getElementById(
            "insertUsemayq16"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
      }
    },
  });
}
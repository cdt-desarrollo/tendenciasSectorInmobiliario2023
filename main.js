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
  if(data.length == 69){
    if(data[66] == "")
    {
      Swal.fire({
        icon: "info",
        title: "Falta que escribas el nombre de tu empresa",
        confirmButtonColor: "#3085d6"
      })
    }
    else if(data[66] != "")
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
      m1q2: `${array[1]}`,
      m2q2: `${array[2]}`,
      m3q2: `${array[3]}`,
      m4q2: `${array[4]}`,
      m1q3: `${array[5]}`,
      m2q3: `${array[6]}`,
      m3q3: `${array[7]}`,
      m4q3: `${array[8]}`,
      m1q4: `${array[9]}`,
      m2q4: `${array[10]}`,
      m3q4: `${array[11]}`,
      m4q4: `${array[12]}`,
      m1q5: `${array[13]}`,
      m2q5: `${array[14]}`,
      m3q5: `${array[15]}`,
      m4q5: `${array[16]}`,
      m1q6: `${array[17]}`,
      m2q6: `${array[18]}`,
      m3q6: `${array[19]}`,
      m4q6: `${array[20]}`,
      m1q7: `${array[21]}`,
      m2q7: `${array[22]}`,
      m3q7: `${array[23]}`,
      m4q7: `${array[24]}`,
      m1q8: `${array[25]}`,
      m2q8: `${array[26]}`,
      m3q8: `${array[27]}`,
      m4q8: `${array[28]}`,
      m1q9: `${array[29]}`,
      m2q9: `${array[30]}`,
      m3q9: `${array[31]}`,
      m4q9: `${array[32]}`,
      m1q10: `${array[33]}`,
      m2q10: `${array[34]}`,
      m3q10: `${array[35]}`,
      m4q10: `${array[36]}`,
      m1q11: `${array[37]}`,
      m2q11: `${array[38]}`,
      m3q11: `${array[39]}`,
      m4q11: `${array[40]}`,
      m1q12: `${array[41]}`,
      m2q12: `${array[42]}`,
      m3q12: `${array[43]}`,
      m4q12: `${array[44]}`,
      m1q13: `${array[45]}`,
      m2q13: `${array[46]}`,
      m3q13: `${array[47]}`,
      m4q13: `${array[48]}`,
      m1q14: `${array[49]}`,
      m2q14: `${array[50]}`,
      m3q14: `${array[51]}`,
      m4q14: `${array[52]}`,
      m1q15: `${array[53]}`,
      m2q15: `${array[54]}`,
      m3q15: `${array[55]}`,
      m4q15: `${array[56]}`,
      m1q16: `${array[57]}`,
      m2q16: `${array[58]}`,
      m3q16: `${array[59]}`,
      m4q16: `${array[60]}`,
      m1q17: `${array[61]}`,
      m2q17: `${array[62]}`,
      m3q17: `${array[63]}`,
      m4q17: `${array[64]}`,
      name: `${array[65]}`,
      company: `${array[66]}`,
      email: `${array[67]}`,
      phone: `${array[68]}`
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
        if (inputObject.id == "otroseneq11") {
          document.getElementById("insertCityeneq11").innerHTML = "";
          document.getElementById("otroseneq11").value = ciudad;
          document.getElementById(
            "insertCityeneq11"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
        else if (inputObject.id == "otrosfebq11") {
          document.getElementById("insertCityfebq11").innerHTML = "";
          document.getElementById("otrosfebq11").value = ciudad;
          document.getElementById(
            "insertCityfebq11"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
        else if (inputObject.id == "otrosmarq11") {
          document.getElementById("insertCitymarq11").innerHTML = "";
          document.getElementById("otrosmarq11").value = ciudad;
          document.getElementById(
            "insertCitymarq11"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
        else if (inputObject.id == "otrosabrq11") {
          document.getElementById("insertCityabrq11").innerHTML = "";
          document.getElementById("otrosabrq11").value = ciudad;
          document.getElementById(
            "insertCityabrq11"
          ).innerHTML += `<h6><mark>${ciudad}</mark></h6>`;
        }
        else if (inputObject.id == "otrosmayq11") {
          document.getElementById("insertCitymayq11").innerHTML = "";
          document.getElementById("otrosmayq11").value = ciudad;
          document.getElementById(
            "insertCitymayq11"
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
        if(inputObject.id == "otroseneq15"){
          document.getElementById("insertUseeneq15").innerHTML = "";
          document.getElementById("otroseneq15").value = uso;
          document.getElementById(
            "insertUseeneq15"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
        if(inputObject.id == "otrosfebq15"){
          document.getElementById("insertUsefebq15").innerHTML = "";
          document.getElementById("otrosfebq15").value = uso;
          document.getElementById(
            "insertUsefebq15"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
        if(inputObject.id == "otrosmarq15"){
          document.getElementById("insertUsemarq15").innerHTML = "";
          document.getElementById("otrosmarq15").value = uso;
          document.getElementById(
            "insertUsemarq15"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
        if(inputObject.id == "otrosabrq15"){
          document.getElementById("insertUseabrq15").innerHTML = "";
          document.getElementById("otrosabrq15").value = uso;
          document.getElementById(
            "insertUseabrq15"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
        if(inputObject.id == "otrosmayq15"){
          document.getElementById("insertUsemayq15").innerHTML = "";
          document.getElementById("otrosmayq15").value = uso;
          document.getElementById(
            "insertUsemayq15"
          ).innerHTML += `<h6><mark>${uso}</mark></h6>`;
        }
      }
    },
  });
}
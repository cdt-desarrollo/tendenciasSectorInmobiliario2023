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
  if(data.length == 21){
    if(data[18] == "")
    {
      Swal.fire({
        icon: "info",
        title: "Falta que escribas el nombre de tu empresa",
        confirmButtonColor: "#3085d6"
      })
    }
    else if(data[18] != "")
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
      q2: `${array[1]}`,
      q3: `${array[2]}`,
      q4: `${array[3]}`,
      q5: `${array[4]}`,
      q6: `${array[5]}`,
      q7: `${array[6]}`,
      q8: `${array[7]}`,
      q9: `${array[8]}`,
      q10: `${array[9]}`,
      q11: `${array[10]}`,
      q12: `${array[11]}`,
      q13: `${array[12]}`,
      q14: `${array[13]}`,
      q15: `${array[14]}`,
      q16: `${array[15]}`,
      q17: `${array[16]}`,
      name: `${array[17]}`,
      company: `${array[18]}`,
      email: `${array[19]}`,
      phone: `${array[20]}`
    });
    // sheet.best
    var config = {
      method: "post",
      url: "https://sheet.best/api/sheets/32aacf91-902e-4e88-8d70-e596b2f41ceb/tabs/may2023",
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
        if (inputObject.id == "otrosmayq11") {
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
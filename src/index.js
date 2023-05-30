import qrcode from "qrcode-terminal";
import { Client } from "whatsapp-web.js";

import  Questions from './assets/files/questions.json' assert {type: "json"};

const client = new Client();

//strings of presentation
let mainQuestions = '';
let accountQuestions = '';
let ordersQuestions = '';
let invoicingQuestions = '';
let paymentQuestions = '';
let cancelQuestions = '';
let promoQuestions = '';

for(let num = 0; num < Questions.length; num++){
  
  //console.log(Questions[num].description);
  mainQuestions = mainQuestions + "\n" + "*" + Questions[num].id + ".* " + Questions[num].description ;
}
mainQuestions = mainQuestions + "\n" + "*0.* Volver al menu Principal" + "\n" + "*Salir.* Salir";
// Questions building
for (let i = 0; i< Questions.length; i++) {
  //console.log(Questions[i].id);
  if(Questions[i].id == 1){
     for(let j = 0; j< Questions[i].questions.length; j++){
       //console.log(Questions[i].questions[j].question);
       accountQuestions = accountQuestions + "\n" + "*" + Questions[i].questions[j].id + "A.* " + Questions[i].questions[j].question ;
     }
     accountQuestions = accountQuestions +  "\n" + "*0.* Volver al menu Principal" + "\n" + "*Salir.* Salir";
     //console.log(accountQuestions);
  }
  else if(Questions[i].id == 2) {
    for(let j = 0; j< Questions[i].questions.length; j++){
      //console.log(Questions[i].questions[j].question);
      ordersQuestions = ordersQuestions + "\n" + "*" + Questions[i].questions[j].id + "B.* " + Questions[i].questions[j].question ;
    }
    ordersQuestions = ordersQuestions +  "\n" + "*0.* Volver al menu Principal" + "\n" + "*Salir.* Salir";
    //console.log(ordersQuestions);

  }
  else if(Questions[i].id == 3) {
    for(let j = 0; j< Questions[i].questions.length; j++){
      //console.log(Questions[i].questions[j].question);
      invoicingQuestions = invoicingQuestions + "\n" + "*" + Questions[i].questions[j].id + "C.* " + Questions[i].questions[j].question ;
    }
    invoicingQuestions = invoicingQuestions +  "\n" + "*0.* Volver al menu Principal" + "\n" + "*Salir.* Salir";
    //console.log(invoicingQuestions);

  }
  else if(Questions[i].id == 4) {
    for(let j = 0; j< Questions[i].questions.length; j++){
      //console.log(Questions[i].questions[j].question);
      paymentQuestions = paymentQuestions + "\n" + "*" + Questions[i].questions[j].id + "D.* " + Questions[i].questions[j].question ;
    }
    paymentQuestions = paymentQuestions +  "\n" + "*0.* Volver al menu Principal" + "\n" + "*Salir.* Salir";
    //console.log(paymentQuestions);

  }
  else if(Questions[i].id == 5) {
    for(let j = 0; j< Questions[i].questions.length; j++){
      //console.log(Questions[i].questions[j].question);
      cancelQuestions = cancelQuestions + "\n" + "*" + Questions[i].questions[j].id + "E.* " + Questions[i].questions[j].question ;
    }
    cancelQuestions = cancelQuestions +  "\n" + "*0.* Volver al menu Principal" + "\n" + "*Salir.* Salir";
    //console.log(cancelQuestions);

  }
  else if(Questions[i].id == 6) {
    for(let j = 0; j< Questions[i].questions.length; j++){
      //console.log(Questions[i].questions[j].question);
      promoQuestions = promoQuestions + "\n" + "*" + Questions[i].questions[j].id + "F.* " + Questions[i].questions[j].question ;
    }
    promoQuestions = promoQuestions + "\n" + "*0.* Volver al menu Principal" + "\n" + "*Salir.* Salir";
    //console.log(promoQuestions);

  }
  else {
    console.log("JSON not found!")
  }
}
//function to get answers
function getAnswersToQuestions(questions, categoryID, answersID){
  //AnswerTo Questions
  let answersToQuestions = '';
  let categoryToFind = questions.find(element => element.id == categoryID);
   for(let i = 0; i< categoryToFind.questions.length; i++){
    if(categoryToFind.questions[i].id === answersID){
      answersToQuestions = answersToQuestions + "*"+ categoryToFind.questions[i].question +"*";
        for(let j = 0; j < categoryToFind.questions[i]?.answers.length; j++){
          answersToQuestions = answersToQuestions +  "\n" +"*" + categoryToFind.questions[i].answers[j].step + '.* ' + categoryToFind.questions[i].answers[j].answer ;
       }
    }
   }
   answersToQuestions = answersToQuestions + "\n" + "*0.* Volver al menu Principal" + "\n" + "*Salir.* Salir";

   return answersToQuestions;

}
///For debugging
//getAnswersToQuestions(Questions, 1, 1);
//  console.log("Preguntas", getAnswersToQuestions(Questions, 6,1 ))
//  console.log(getAnswersToQuestions(Questions, 6, 2));
//  console.log(getAnswersToQuestions(Questions, 6, 3));
//  console.log(getAnswersToQuestions(Questions, 6, 4));

client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  
  //It is possible to configure 
  if (message.body === "Hola" || message.body === "hola" ) {
    message.reply(` *Bienvenido a 7-Eleven* \n_Escoja la categoría que desee._ ${mainQuestions}`);
  }
  else if (message.body === "1") {  
    message.reply(`*Mi Cuenta* \n*Preguntas Frecuentes* \n_Escoja la pregunta que desee._ ${accountQuestions}`);
  }
  else if (message.body === "2") {
    message.reply(`*Ordenes* \n*Preguntas Frecuentes* \n_Escoja la pregunta que desee._ ${ordersQuestions}`);
  }
  else if (message.body === "3") {
    message.reply(`*Facturación* \n*Preguntas Frecuentes* \n_Escoja la pregunta que desee._ ${invoicingQuestions}`);
  }
  else if (message.body === "4") {
    message.reply(`*Pagos* \n*Preguntas Frecuentes* \n_Escoja la pregunta que desee._ ${paymentQuestions}`);
  }
  else if (message.body === "5") {
    message.reply(`*Cancelaciones* \n*Preguntas Frecuentes* \n_Escoja la pregunta que desee._ ${cancelQuestions}`);
  }
  else if (message.body === "6") {
    message.reply(`*Promociones* \n*Preguntas Frecuentes* \n_Escoja la pregunta que desee._ ${promoQuestions}`);
  }
  else if (message.body === "1A") {
    message.reply(getAnswersToQuestions(Questions, 1, 1));
  }
  else if (message.body === "2A") {
    message.reply(getAnswersToQuestions(Questions, 1, 2));
  }
  else if (message.body === "3A") {
    message.reply(getAnswersToQuestions(Questions, 1, 3));
  }
  else if (message.body === "4A") {
    message.reply(getAnswersToQuestions(Questions, 1, 4));
  }
  else if (message.body === "1B") {
    message.reply(getAnswersToQuestions(Questions, 2, 1));
  }
  else if (message.body === "2B") {
    message.reply(getAnswersToQuestions(Questions, 2, 2));
  }
  else if (message.body === "3B") {
    message.reply(getAnswersToQuestions(Questions, 2, 3));
  }
  else if (message.body === "4B") {
    message.reply(getAnswersToQuestions(Questions, 2, 4));
  }
  else if (message.body === "5B") {
    message.reply(getAnswersToQuestions(Questions, 2, 5));
  }
  else if (message.body === "1C") {
    message.reply(getAnswersToQuestions(Questions, 3, 1));
  }
  else if (message.body === "1D") {
    message.reply(getAnswersToQuestions(Questions, 4, 1));
  }
  else if (message.body === "2D") {
    message.reply(getAnswersToQuestions(Questions, 4, 2));
  }
  else if (message.body === "3D") {
    message.reply(getAnswersToQuestions(Questions, 4, 3));
  }
  else if (message.body === "4D") {
    message.reply(getAnswersToQuestions(Questions, 4, 4));
  }
  else if (message.body === "5D") {
    message.reply(getAnswersToQuestions(Questions, 4, 5));
  }
  else if (message.body === "1E") {
    message.reply(getAnswersToQuestions(Questions, 5, 1));
  }
  else if (message.body === "2E") {
    message.reply(getAnswersToQuestions(Questions, 5, 2));
  }
  else if (message.body === "3E") {
    message.reply(getAnswersToQuestions(Questions, 5, 3));
  }
  else if (message.body === "4E") {
    message.reply(getAnswersToQuestions(Questions, 5, 4));
  }
  else if (message.body === "5E") {
    message.reply(getAnswersToQuestions(Questions, 5, 5));
  }
  else if (message.body === "1F") {
    message.reply(getAnswersToQuestions(Questions, 6, 1));
  }
  else if (message.body === "2F") {
    message.reply(getAnswersToQuestions(Questions, 6, 2));
  }
  else if (message.body === "3F") {
    message.reply(getAnswersToQuestions(Questions, 6, 3));
  }
  else if (message.body === "0") {
    message.reply(`*Menú* \n_Escoja la categoría que desee._ ${mainQuestions}`);
  }
  else if (message.body === "Salir") {
    message.reply("Gracias por preferirnos!");
  }
  else {
    message.reply(` *Bienvenido a 7-Eleven* \n_Escoja la categoría que desee._ ${mainQuestions}`);
  }
  
});


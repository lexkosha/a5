const dataURL = "https://api.myjson.com/bins/jcmhn";


// $.getJSON(
//   dataURL,
//   function(data){
//     console.log(data);
//   }
// );

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL,handlerData);

}

function handlerData(data){
  //выводим в консоль json с ключем text
  let finelMessag = "";

  let var1 = $("input[name=var1]")[0].value;
  let var2 = $("input[name=var2]")[0].value;
  let var3 = $("input[name=var3]")[0].value;
  let var4 = $("input[name=var4]")[0].value;
  let var5 = $("input[name=var5]")[0].value;
  let var6 = $("input[name=var6]")[0].value;
  let speach = $("input[name=speach]")[0].value;

  data["text"].forEach(function(item,index){
    
    item = item.replace("{var1}", var1);
    item = item.replace("{var2}", var2);
    item = item.replace("{var3}", var3);
    item = item.replace("{var4}", var4);
    item = item.replace("{var5}", var5);
    item = item.replace("{var6}", var6);
    item = item.replace("{speach}", speach);


    finelMessag = finelMessag + item + "<br>";
  });

  $("div#result").html(finelMessag);
  
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);

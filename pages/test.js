
var mountains = [
        {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
        {name: "Everest", height: 8848, country: "Nepal"},
        {name: "Mount Fuji", height: 3776, country: "Japan"},
        {name: "Mont Blanc", height: 4808, country: "Italy/France"},
        {name: "Vaalserberg", height: 323, country: "Netherlands"},
        {name: "Denali", height: 6168, country: "United States"},
        {name: "Popocatepetl", height: 5465, country: "Mexico"},
        {name: "Fake", height: 1110000, country: "Fake Place"}
    ];

var line = "";
var l_name = 0;
var l_height = 0;
var l_country = 0;
var lines = ""

for (var i= 0; i < mountains.length;i++){
  if (mountains[i]['name'].length > l_name){
    l_name = mountains[i]['name'].length;
  }
  if (mountains[i]['height'].toString().length > l_height){
    console.log(mountains[i]['height'].toString());
    l_height = mountains[i]['height'].toString().length;
  }
  if (mountains[i]['country'].length > l_country){
    l_country = mountains[i]['country'].length;
  }
}


var title = "name";
var underline = "----";
for (let i = 0; i <= (l_name-4); i++){

  if (i != l_name-4){
    title += " ";
    underline += "-";}
    else{
      title += " ";
      underline += " ";
}
}
title+="height";
underline += "------";
for (let i = 0; i <= (l_height-6); i++){

  if (i != l_height-6){
  title += " ";
  underline += "-";}
  else{
    title += " ";
    underline += " ";
  }
}
title+="country";
underline += "-------";
for (let i = 0; i <= (l_country-7); i++){

  if (i != l_country-7){
    title += " ";
    underline += "-"}
    else{
      title += " ";
      underline += " ";
}
}

for (let i=0; i < mountains.length;i++){
  // space for name
  var line = mountains[i]['name'];
  var k = 0;
  while (k <= l_name-mountains[i]['name'].length) {
    line += " ";
    k++;
  }
  var k = 0;
  line += mountains[i]['height'].toString();
  while (k <= l_height-mountains[i]['height'].toString().length) {
    line += " ";
    k++;
  }
  var k = 0;
  line += mountains[i]['country'];
  while (k <= l_country-mountains[i]['country'].length) {
    line += " ";
    k++;
  }

  lines += line + "\n";

}
console.log(title +"\n"+underline+"\n"+lines);
//---------------------------------------------------------right-----------------------------------

var mountains = [
        {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
        {name: "Everest", height: 8848, country: "Nepal"},
        {name: "Mount Fuji", height: 3776, country: "Japan"},
        {name: "Mont Blanc", height: 4808, country: "Italy/France"},
        {name: "Vaalserberg", height: 323, country: "Netherlands"},
        {name: "Denali", height: 6168, country: "United States"},
        {name: "Popocatepetl", height: 5465, country: "Mexico"},
        {name: "Fake", height: 1110000, country: "Fake Place"}
    ];

var line = "";
var l_name = 0;
var l_height = 0;
var l_country = 0;
var lines = ""

for (var i= 0; i < mountains.length;i++){
  if (mountains[i]['name'].length > l_name){
    l_name = mountains[i]['name'].length;
  }
  if (mountains[i]['height'].toString().length > l_height){
    console.log(mountains[i]['height'].toString());
    l_height = mountains[i]['height'].toString().length;
  }
  if (mountains[i]['country'].length > l_country){
    l_country = mountains[i]['country'].length;
  }
}
console.log(l_name,l_height,l_country); //12 7 13

var title = "name";
var underline = "----";
for (let i = 0; i <= (l_name-4); i++){

  if (i != l_name-4){
    title += " ";
    underline += "-";}
    else{
      title += " ";
      underline += " ";
}
}

underline += "------";
for (let i = 0; i <= (l_height-6); i++){

  if (i != l_height-6){
  title += " ";
  underline += "-";}
  else{
    title += " ";
    underline += " ";
  }
}
title+="height";

underline += "-------";
for (let i = 0; i <= (l_country-7); i++){

  if (i != l_country-7){
    title += " ";
    underline += "-"}
    else{
      title += " ";
      underline += " ";
}
}
title+="country";
console.log(title);
console.log(underline);

for (let i=0; i < mountains.length;i++){
  // space for name
  var line = mountains[i]['name'];
  var k = 0;
  while (k <= l_name-mountains[i]['name'].length) {
    line += " ";
    k++;
  }
  var k = 0;

  while (k <= l_height-mountains[i]['height'].toString().length) {
    line += " ";
    k++;
  }
  line += mountains[i]['height'].toString();
  var k = 0;

  while (k <= l_country-mountains[i]['country'].length) {
    line += " ";
    k++;
  }
  line += mountains[i]['country'];
  lines += line + "\n";

}
console.log(title +"\n"+underline+"\n"+lines);

document.write("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>");
document.write("<html><head><style type=\"text/css\">");
document.write("body {padding:0px;margin:0;} ");
document.write(".menubuttons {border-right: 1px solid black;width:85px;height:60px;text-align:center;float:left;cursor:pointer;background-color:white;} .hiddenText {display:none;} ");
document.write("div.showing-answer div {display:block;} div.hiding-answer div {display:none;}</style>");

//remember to swap out js.js in the next line for this: https://rawgit.com/dmar198/dmar198.github.io/master/gnatpolitics/js.js

document.write("<script src=\"https://rawgit.com/dmar198/dmar198.github.io/master/gnatpolitics/js.js\"></script></head>");
document.write("<body onload=\"home();background();\">");
document.write("<div id=\"title-div\" style=\"width:100%;height:40px;line-height:40px;font-size:40px;background-color:white;\">");
document.write("<center><span style=\"background-color:white;\">Gnat Politics</span></center></div>");
document.write("<div id=\"subtitle-div\" style=\"width:100%;height:40px;line-height:40px;background-color:white;\">");
document.write("<center><span style=\"background-color:white;\">Spreading Good News About Trump</span></center></div>");
document.write("<div id=\"menu-div\" style=\"max-width:600px;margin:auto;height:60px;line-height:60px;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black;border-right:1px solid black;background-color:white;\">");
document.write("<div class=\"menubuttons\" onclick=\"home();\">Home</div>");
document.write("<div class=\"menubuttons\" onclick=\"plansPage();\">Plans</div>");
document.write("<div class=\"menubuttons\" onclick=\"donatePage();\">Donate</div>");
document.write("<div class=\"menubuttons\" onclick=\"aboutPage();\">About</div></div>");
document.write("<div id=\"centering-div\" style=\"max-width:600px;margin:auto;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom:1px solid black;line-height:30px;\">");
document.write("<div id=\"content-div\" style=\"padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;background-color:white;\">");
document.write("</div> <!-- end content-div --></div> <!-- end centering-div --></body></html>");
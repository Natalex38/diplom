﻿window.onload=function () {
    document.querySelector('#ip').onclick = function () {
        ajaxGet();
    }
}


function ajaxGet() {
   var req = new XMLHttpRequest();
   var params = "action=something";



   req.onreadystatechange= function(){ //статус готовности запроса
       if(req.readyState == 4){
           document.querySelector('#myip').innerHTML = req.responseText;
       }
   }

   req.open('GET','http://www.irkbus.ru/php/getVehiclesMarkers.php?rids=67-0,66-0,2-1,1-1,19-0,20-0,4-1,3-1,343-0,344-0,282-0,283-0,6-0,5-0,5-1,232-0,233-0,347-0,348-0,8-1,9-1,83-0,84-0,201-0,202-0,11-1,10-1,1-0,2-0,128-0,129-0,7-1,6-1,215-0,214-0,18-0,17-0,12-1,12-0,11-0,4-0,3-0,23-0,24-0,306-0,307-0,9-0,10-0,57-0,56-0,63-0,62-0,61-0,60-0,309-0,308-0,13-0,14-0,243-0,242-0,15-0,16-0,297-0,296-0,25-0,26-0,310-0,311-0,64-0,65-0,346-0,68-0,69-0,27-0,28-0,71-0,70-0,73-0,72-0,53-0,52-0,279-0,278-0,332-0,36-0,37-0,234-0,235-0,35-0,34-0,228-0,229-0,127-0,126-0,299-0,298-0,300-0,301-0,78-0,77-0,124-0,125-0,82-0,81-0,80-0,79-0,303-0,302-0,31-0,30-0,222-0,223-0,206-0,207-0,225-0,224-0,209-0,208-0,240-0,241-0,287-0,286-0,226-0,227-0,211-0,210-0,216-0,217-0,219-0,218-0,337-0,338-0,42-0,43-0,336-0,335-0,237-0,236-0,220-0,221-0,327-0,326-0,49-0,48-0,312-0,313-0,314-0,293-0,292-0,305-0,304-0,345-0,46-0,47-0,290-0,291-0,32-0,33-0,212-0,213-0,316-0,315-0,342-0,295-0,341-0,203-0,21-0,22-0,38-0,230-0,231-0,339-0,340-0,324-0,323-0,320-0,319-0,281-0,280-0,322-0,123-0,329-0,328-0,238-0,239-0,321-0,349-0,334-0,333-0&lat0=0&lng0=0&lat1=90&lng1=180&curk=21407291&city=irkutsk&info=12345&_=1548651097070');

   req.setRequestHeader("Access-Control-Allow-Origin", "*");
   req.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   req.send();

}

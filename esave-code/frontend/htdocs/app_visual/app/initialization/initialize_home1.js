/**
 * Home 1 Scenario Initilization
 */

function InitializeService(){
      service.useService(http:// localhost:1394/MyWebService.asmx?wsdl,
	"GetAgeService");
     }
     var StrYear, StrMonth, StrDay;
     function GetAge(){
      StrYear = document.DemoForm.StringYear.value;
      StrMonth = document.DemoForm.StringMonth.value;
      StrDay = document.DemoForm.StringDay.value;
      service.GetAgeService.callService("GetAge", StrYear, StrMonth, StrDay);
     }
     function ShowResult(){
    alert(event.result.value);
      }
module.exports={
    getDateArr:function(date){
        let thisMonth = date.getMonth();
        let thisYear = date.getFullYear();
        let firstDate = new Date(thisYear, thisMonth, 1);
        let firstDay = firstDate.getDay();
        let dateArr = new Array;
        for(i = 0;i<42;i++){
            dateArr[i]="";
        } 
        if((thisMonth=0)||(thisMonth=2)||(thisMonth=4)||(thisMonth=6)||(thisMonth=7)||(thisMonth=9)||(thisMonth=11)){
            for(i=0;i<31;i++){
                dateArr[firstDay+i]=`${i+1}`;
            }
        }else if(thisMonth=1){
            for(i=0;i<28;i++){
                dateArr[firstDay+i]=`${i+1}`;
            }
        }else{
            for(i=0;i<30;i++){
                dateArr[firstDay+i]=`${i+1}`;
            }
        }
        return dateArr;
    }
    ,
    makeCalender: function(year, month, dayArr){
    return `<!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Calender</title>
        <link rel="stylesheet" type="text/css" href="css/calender.css">
    </head>

    <body>
        <div id="calendar-wrap">
            <header>
                <h1>${year}. ${month}.</h1>
            </header>
            <div id="calendar">
                <ul class="weekdays">
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </ul>
                <ul id ="0" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[0]}</div>
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[1]}</div>
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[2]}</div>
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[3]}</div>
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[4]}</div>
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[5]}</div>
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[6]}</div>
                    </li>
                </ul>
                <ul id ="1" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[7]}</div>
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[8]}</div>
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[9]}</div>
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[10]}</div>
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[11]}</div>
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[12]}</div>
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[13]}</div>
                    </li>
                </ul>
                <ul id ="2" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[14]}</div>
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[15]}</div>
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[16]}</div>
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[17]}</div>
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[18]}</div>
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[19]}</div>
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[20]}</div>
                    </li>
                </ul>
                <ul id ="3" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[21]}</div>
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[22]}</div>
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[23]}</div>
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[24]}</div>
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[25]}</div>
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[26]}</div>
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[27]}</div>
                    </li>
                </ul>
                <ul id ="4" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[28]}</div>
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[29]}</div>
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[30]}</div>
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[31]}</div>
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[32]}</div>
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[33]}</div>
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[34]}</div>
                    </li>
                    
                </ul>
                <ul id ="4" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[35]}</div>
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[36]}</div>
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[37]}</div>
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[38]}</div>
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[39]}</div>
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[40]}</div>
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[41]}</div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </body>

    </html>`;
    }

}
module.exports={
    getDateArr:function(date, attendanceData){
        let thisMonth = date.getMonth();
        let thisYear = date.getFullYear();
        let firstDate = new Date(thisYear, thisMonth, 1);
        let firstDay = firstDate.getDay();
        let dateArr = new Array;
        for(i = 0;i<42;i++){
            dateArr[i]={id : "", innerString : ""};
        } 
        if((thisMonth=0)||(thisMonth=2)||(thisMonth=4)||(thisMonth=6)||(thisMonth=7)||(thisMonth=9)||(thisMonth=11)){
            for(i=0;i<31;i++){
                dateArr[firstDay+i].id=`${i+1}`;
            }
        }else if(thisMonth=1){
            for(i=0;i<28;i++){
                dateArr[firstDay+i].id=`${i+1}`;
            }
        }else{
            for(i=0;i<30;i++){
                dateArr[firstDay+i].id=`${i+1}`;
            }
        }
        attendanceData.forEach(function(item){
            item.location = item.date + firstDay -1;
            dateArr[item.location].innerString = dateArr[item.location].innerString + '<br>'+`${item.name} ${item.hour}:${item.min}:${item.sec}`;
        });
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
                        <div class="date">${dayArr[0].id}</div>
                        <br>
                        <br>
                        ${dayArr[0].innerString}
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[1].id}</div>
                        <br>
                        <br>
                        ${dayArr[1].innerString}
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[2].id}</div>
                        <br>
                        <br>
                        ${dayArr[2].innerString}
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[3].id}</div>
                        <br>
                        <br>
                        ${dayArr[3].innerString}
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[4].id}</div>
                        <br>
                        <br>
                        ${dayArr[4].innerString}
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[5].id}</div>
                        <br>
                        <br>
                        ${dayArr[5].innerString}
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[6].id}</div>
                        <br>
                        <br>
                        ${dayArr[6].innerString}
                    </li>
                </ul>
                <ul id ="1" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[7].id}</div>
                        <br>
                        <br>
                        ${dayArr[7].innerString}
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[8].id}</div>
                        <br>
                        <br>
                        ${dayArr[8].innerString}
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[9].id}</div>
                        <br>
                        <br>
                        ${dayArr[9].innerString}
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[10].id}</div>
                        <br>
                        <br>
                        ${dayArr[10].innerString}
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[11].id}</div>
                        <br>
                        <br>
                        ${dayArr[11].innerString}
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[12].id}</div>
                        <br>
                        <br>
                        ${dayArr[12].innerString}
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[13].id}</div>
                        <br>
                        <br>
                        ${dayArr[13].innerString}
                    </li>
                </ul>
                <ul id ="2" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[14].id}</div>
                        <br>
                        <br>
                        ${dayArr[14].innerString}
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[15].id}</div>
                        <br>
                        <br>
                        ${dayArr[15].innerString}
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[16].id}</div>
                        <br>
                        <br>
                        ${dayArr[16].innerString}
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[17].id}</div>
                        <br>
                        <br>
                        ${dayArr[17].innerString}
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[18].id}</div>
                        <br>
                        <br>
                        ${dayArr[18].innerString}
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[19].id}</div>
                        <br>
                        <br>
                        ${dayArr[19].innerString}
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[20].id}</div>
                        <br>
                        <br>
                        ${dayArr[20].innerString}
                    </li>
                </ul>
                <ul id ="3" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[21].id}</div>
                        <br>
                        <br>
                        ${dayArr[21].innerString}
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[22].id}</div>
                        <br>
                        <br>
                        ${dayArr[22].innerString}
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[23].id}</div>
                        <br>
                        <br>
                        ${dayArr[23].innerString}
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[24].id}</div>
                        <br>
                        <br>
                        ${dayArr[24].innerString}
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[25].id}</div>
                        <br>
                        <br>
                        ${dayArr[25].innerString}
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[26].id}</div>
                        <br>
                        <br>
                        ${dayArr[26].innerString}
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[27].id}</div>
                        <br>
                        <br>
                        ${dayArr[27].innerString}
                    </li>
                </ul>
                <ul id ="4" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[28].id}</div>
                        <br>
                        <br>
                        ${dayArr[28].innerString}
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[29].id}</div>
                        <br>
                        <br>
                        ${dayArr[29].innerString}
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[30].id}</div>
                        <br>
                        <br>
                        ${dayArr[30].innerString}
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[31].id}</div>
                        <br>
                        <br>
                        ${dayArr[31].innerString}
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[32].id}</div>
                        <br>
                        <br>
                        ${dayArr[32].innerString}
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[33].id}</div>
                        <br>
                        <br>
                        ${dayArr[33].innerString}
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[34].id}</div>
                        <br>
                        <br>
                        ${dayArr[34].innerString}
                    </li>
                    
                </ul>
                <ul id ="4" class="days">
                    <li class ="0">
                        <div class="date">${dayArr[35].id}</div>
                        <br>
                        <br>
                        ${dayArr[35].innerString}
                    </li>
                    <li class="1">
                        <div class="date">${dayArr[36].id}</div>
                        <br>
                        <br>
                        ${dayArr[36].innerString}
                    </li>
                    <li class="2">
                        <div class="date">${dayArr[37].id}</div>
                        <br>
                        <br>
                        ${dayArr[37].innerString}
                    </li>
                    <li class="3">
                        <div class="date">${dayArr[38].id}</div>
                        <br>
                        <br>
                        ${dayArr[38].innerString}
                    </li>
                    <li class="4">
                        <div class="date">${dayArr[39].id}</div>
                        <br>
                        <br>
                        ${dayArr[39].innerString}
                    </li>
                    <li class="5">
                        <div class="date">${dayArr[40].id}</div>
                        <br>
                        <br>
                        ${dayArr[40].innerString}
                    </li>
                    <li class="6">
                        <div class="date">${dayArr[41].id}</div>
                        <br>
                        <br>
                        ${dayArr[41].innerString}
                    </li>
                    
                </ul>
            </div>
        </div>
    </body>

    </html>`;
    }

}
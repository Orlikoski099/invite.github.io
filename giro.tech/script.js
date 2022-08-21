//############################################
//######### Code by: Lucas Orlikoski #########
//############################################
//#### Created for an intern application  ####
//#####      challenge on Giro.tech      #####
//############################################

function tableGenerator(){

    //get the elements to calc the compound interest from index.html

    var investment = parseInt(document.getElementById("capital").value);
    var months = parseInt(document.getElementById("meses").value);
    var percent = parseFloat(document.getElementById("juros").value);

    //changes the percentile of the interest if marked as year interest on html
    if(document.getElementById("anual").checked){
        percent /= 12;
    }

    //creates a dynamic table according to the months quantity of investment
    var tbody = document.getElementById("tbody");
    tbody.innerText = '';

    var total = 0;

    for(let i = 0; i < months; i++){

        total += investment;
        
        let tr = tbody.insertRow();

        let td_month = tr.insertCell();
        let td_income = tr.insertCell();
        let td_total = tr.insertCell();

        td_month.innerText = i+1;
        let totalIncrease = parseFloat((total + ((total /100)  * percent)).toFixed(2));
        let monthIncrease = parseFloat(totalIncrease - investment*(i+1)).toFixed(2);

        //converts the values to a currency kind
        td_total.innerText = new Intl.NumberFormat('pt-BR', {style: 'currency' , currency: 'BRL'}).format(totalIncrease);
        td_income.innerText = new Intl.NumberFormat('pt-BR', {style: 'currency' , currency: 'BRL'}).format(monthIncrease);
        
        total = totalIncrease;
    }

    progressBar((total - investment*months)*100 / total);
}

//creates a progressbar to show the percentage the comes from interest increase
function progressBar(percentile){
    const progressBar = document.getElementById("progressbar");    
    progressBar.setAttribute("style", "width: " + percentile + "%"); 

    let progress = document.getElementById("progress");

    progress.innerText = percentile.toFixed(0) + "% do seu montante final veio do rendimento de juros!"

}
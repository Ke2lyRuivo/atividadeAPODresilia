 /*function getImg() {
    //fetching data
            const link:"https://api.nasa.gov/planetary/apod?api_key=mcpPwG8OZihcfGIIw6UxKd63R7dR6qqTXq6mkWos",
            const response = fetch(base_url);
            const dia = response.json(); //converting to JSON
            var url = link + dia;
            console.log(dia);
    //display data on frontend
            document.getElementById("calendario").textContent = "Calendario: " + dia.calendario;
            document.getElementById("exp").textContent = dia.explanation;
            document.getElementById("title").textContent = dia.title;
            document.getElementById('bg').src = dia.url;
           
          }
    
          getImg();*/

          function pesquisar(){
            $("form").submit(false)
          var date = document.getElementById('date').value;  
         $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=mcpPwG8OZihcfGIIw6UxKd63R7dR6qqTXq6mkWos&date=${date}`,
         method: 'GET',
         dataType: 'json',
        
         success: function (data){
            $(`#bg`).attr(`src`,data.url)
            $(`#title`).text(data.title)
            $(`#explanation`).text(data.explanation)
            $(`#copyright`).text(data.copyright);
         }
        })
          
          }

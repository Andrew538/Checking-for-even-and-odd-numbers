window.onload = function() {
    const button = document.querySelector('.btn');
    let items = document.querySelectorAll('.item');

    let date = new Date();
    let day = date.getDate();

    let even = 'четное';
    let odd = 'нечетное';



    function evenDay(x){
        if(x % 1 == 0 && x % 2 != 0){
            console.log(x)
            return (
                alert('Сегодня ' + `${odd}` + ' число ' + `${x}` + ',' + ' поэтому при клике по квадрату, он будет красного цвета')
                )
        } else {
             return (
                alert('Сегодня ' + `${even}` + ' число ' + `${x}` + ',' + ' поэтому при клике по квадрату, он будет окрашен в цвет rebeccapurple') 
            )

        }

    }
    
    button.addEventListener('click', () => evenDay(day))




    for ( let i = 0; i < items.length; i++) {
          
        
        if (day % 1 == 0 && day % 2 != 0) {
            items[i].onclick = activeItemEven;
        
        } 
        else {
           items[i].onclick = activeItemOdd;
          
        }

        function activeItemOdd ()  {
            this.classList.toggle('indexOdd')

        }

        function activeItemEven ()  {  
            this.classList.toggle('indexEven')
        }
   
    }
           

}
    
   





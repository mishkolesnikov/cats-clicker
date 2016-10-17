;(function(){    
    var catsArea = document.getElementById('cats-area');
    var catsList = document.getElementById('cats-list');
    function Cat(name, avatarLink){
        this.name = name;
        this.clickCount = 0;
        this.clickCounter = function(){
            this.clickCount++;
            catText.innerHTML = this.name + '\n' + 'got ' + this.clickCount;
       }.bind(this);
       this.displayCat = function(){
            catsArea.innerHTML = '';
            catsArea.appendChild(catInfo);
       }.bind(this);
    //формируем блок информации о коте, с обработкой клика по картинке
    var catInfo = document.createElement('div');
    catInfo.className = 'cat';

    var catPicture = document.createElement('img');
    catPicture.setAttribute('src', avatarLink);
    catPicture.addEventListener("click", this.clickCounter);
    
    var catText = document.createElement('p');
    catText.innerHTML = this.name + '\n' + 'got ' + this.clickCount;

    catInfo.appendChild(catPicture);
    catInfo.appendChild(catText);

    //добавляем кота в список, с обработкой клика
    var catLi = document.createElement('li');
    catLi.innerHTML = this.name;
    catsList.appendChild(catLi);
    catLi.addEventListener("click", this.displayCat);
    }


    badCat = new Cat("Baddy", "img/badcat.jpg");
    goodCat = new Cat("Gooddy", "img/Goodcat.jpg");
    angryCat = new Cat("Angrys", "img/angry.jpg");
    badCat.displayCat();
})();
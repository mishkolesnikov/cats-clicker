;(function(){
    function Cat(name){
        this.name = name;
        this.clickCount = 0;
        this.clickCounter = function(){
            this.clickCount++;
            this.text.innerHTML = this.name + " : " + this.clickCount;
        }
    }
    window.badCat = new Cat("badcat");
    window.goodCat = new Cat("goodcat");

    window.badCat.text = document.getElementById("badcattext");
    window.goodCat.text = document.getElementById("goodcattext");
})();
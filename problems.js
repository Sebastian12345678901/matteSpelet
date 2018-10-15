let problemObject = {
    createQuestion: function(operator, difficulty) {
        let nummer1;
        let nummer2;
        if (difficulty > 4) {
            difficulty = 1;
        }

        if (difficulty < 2) {
            nummer1 = numbers.random10();
            nummer2 = numbers.random10();
        } else if (difficulty == 2) {
            nummer1 = numbers.random20();
            nummer2 = numbers.random10();
        } else if (difficulty == 3) {
            nummer1 = numbers.random20();
            nummer2 = numbers.random20();
        } else if (difficulty == 4) {
            console.log("hej");
            nummer1 = numbers.random20();
            nummer2 = numbers.random30();
        }
        let el = document.getElementById("problem");
        // ----------------divisionslogigen---------------------------
        if (level == "div") {

            while (nummer1 % nummer2 != 0) {
                if (difficulty == 1) {
                    nummer1 = numbers.random10();
                    nummer2 = numbers.random10();
                } else if (difficulty == 2) {
                    nummer1 = numbers.random20();
                    nummer2 = numbers.random10();
                } else if (difficulty == 3) {
                    nummer1 = numbers.random30();
                    nummer2 = numbers.random10();
                }
                console.log(nummer1);
                console.log(nummer2);
            }
        }
        //---------------------------------------------------------------
        el.innerHTML = nummer1 + operator + nummer2;
        operator = operator.trim();
        //facit
        if (operator == "+") {
            difficulty = 1;
            return nummer1 + nummer2;
        } else if (operator == "-") {
            difficulty = 1;
            return nummer1 - nummer2;
        } else if (operator == "*") {
            difficulty = 1;
            return nummer1 * nummer2;
        } else if (operator == "/") {
            difficulty = 1;
            return nummer1 / nummer2;
        }

    }
}
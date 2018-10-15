let levelHanteraren = {
    choseLevel: function(points) {

        //hanterar vilken nivå du ligger på.
        if (points < 1) {
            level = "addition";
        } else if (difficulty == 4 && level == "addition") {
            difficulty = 1;
            level = "substraktion";
        } else if (difficulty == 4 && level == "substraktion") {
            difficulty = 1;
            level = "multi";
        } else if (difficulty == 4 && level == "multi") {
            difficulty = 1;
            level = "div";
        } else if (difficulty == 4 && level == "div") {
            difficulty == 1;
            level = "addition"
        }

    },

    levelAddition: function() {
        level = "additon";
        problemObject.createQuestion(" + ", difficulty);
    },
    levelSubstraktion: function() {
        level = "substraktion";
        problemObject.createQuestion(" - ", difficulty);

    },
    levelMulti: function() {
        level = "multi";
        problemObject.createQuestion(" * ", difficulty);

    },
    levelDiv: function() {
        level = "div";
        problemObject.createQuestion(" / ", difficulty);

    }



}
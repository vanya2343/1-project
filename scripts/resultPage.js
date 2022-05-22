window.onload = function () {
    ans = sessionStorage.getItem('answers');
    res = {}
    var maxId = 0;
    maxNum = 0;
    for (let i = 0; i < ans.length; i++) {
        if (res[ans[i]] != undefined && ans[i] != ',') {
            res[ans[i]]++;
            if (res[ans[i]] > maxNum) {
                maxNum = res[ans[i]];
                maxId = ans[i];
            }
        } else {
            res[ans[i]] = 1;
        }

    }
    console.log(ans);
    console.log(res);

    fetch('JSON/places.json')
        .then(response => response.json())
        .then(function (places) {
            const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
            var cat = "comfy";
            switch (Number(maxId)) {
                case 0:
                    cat = "comfy";
                    break;
                case 1:
                    cat = "active";
                    break;
                case 2:
                    cat = "regular";
                    break;
                case 3:
                    cat = "unique";
                    break;
                default:
                    cat = "def";
                    break;
            }
            console.log(maxId);
            console.log(cat);
            var pos = random(0,places[cat].length);
            document.querySelector(".placeName").innerHTML = places[cat][pos]['name'];
            document.querySelector(".placeDiscription").innerHTML = places[cat][pos]['discription'];
            document.querySelector(".placeAdress").innerHTML = places[cat][pos]['adress'];
            document.getElementById("placeImg").src = places[cat][pos]['image'];
        });

}
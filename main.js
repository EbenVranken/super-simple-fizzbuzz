a = document.getElementById("fizzbuzz");
for(var i = 1; i < 100; i++) {
    b = document.createElement("li");
    if (i % 15 == 0) b.innerText = "FizzBuzz";
    else if (i % 3 == 0) b.innerText = "Fizz";
    else if (i % 5 == 0) b.innerText = "Buzz";
    else b.innerText += i;

    a.appendChild(b);
}

function search() {
    d = document.getElementById("input").value;
    e = document.getElementById("searchOutput");
    if (d % 15 == 0) e.innerText = "Fizzbuzz";
    else if (d % 3 == 0) e.innerText = "Fizz";
    else if (d % 5 == 0) e.innerText = "Buzz";
    else e.innerText = d;
}
function OperationFind() { /* Looks at ending syntax to know what to do <<< SolveButton >> */
    var newproblem = Problem.value
    var numbrs = newproblem.match(/\d+/g)

    try {
        document.getElementById("answer").innerHTML = "Your answer is " + eval(newproblem);
    } catch {
        if (newproblem.includes("sort")) {
            newproblem = newproblem.replace("sort", "")
            document.getElementById("answer").innerHTML = Srt(newproblem);
        } else if (newproblem.includes("mean")) {
            newproblem = newproblem.replace("mean", "")
            document.getElementById("answer").innerHTML = Mean(newproblem);
        } else if (newproblem.includes("convert")) {
            newproblem = newproblem.replace("convert", "")
            document.getElementById("answer").innerHTML = FtoDorDtoF(newproblem)
        } else if (newproblem.includes("linear")) {
            newproblem = newproblem.replace("linear", "")
            document.getElementById("answer").innerHTML = ymxb(newproblem)
        } else if (newproblem.includes("reduce")) {
            newproblem = newproblem.replace("reduce", "")
            document.getElementById("answer").innerHTML = reduce(newproblem)
        } else if (newproblem.includes("absolute")) {
            newproblem = newproblem.replace("absolute", "")
            document.getElementById("answer").innerHTML = Absolute(newproblem)
        } else if (newproblem.includes("round")) {
            newproblem = newproblem.replace("round", "")
            document.getElementById("answer").innerHTML = Math.round(newproblem)
        }
    }
}

/* Universal Calculator functions */
function pos_to_neg(number) {
    return -Math.abs(number)
};

function neg_to_pos(number) {
    return Math.abs(number)
};

function reduce(str){
    var result = '', data = str.split('/'),
    numOne = Number(data[0]),
    numTwo = Number(data[1]);
    for (var i = Math.max(numOne, numTwo); i > 1; i--) {
    if ((numOne % i == 0) && (numTwo % i == 0)) {
        numOne /= i;
        numTwo /= i;
        }
    }
    if (numTwo === 1) {
        result = numOne.toString()
    } else {
        result = numOne.toString() + '/' + numTwo.toString()
    }
    if(" " + result == str) {
        return str + " is already in its simplest form"
    } else {
        return "Your answer is " + result

    }

}

function Srt(prob) { /* Sorting function, <<< OperationFind() >>> */
    var numbrs = prob.match(/\d+/g);
    return "Order: " + numbrs.sort(function(a, b){return a - b});
};

function FtoDorDtoF(prob) {
    if (prob.includes("/")) { /* Decimal to Fraction */
        prob = prob.replace("/", "  /  ")
        prob = prob.split(" ")
        pos = prob.indexOf("/")
        num1 = prob[pos - 2]
        num2 = prob[pos + parseFloat(2)]
        return "Your answer is " + parseFloat(num1) / parseFloat(num2)
    } else if (prob.includes(".")) { /* Fraction to Decimal */
        prob = prob.split("")
        numb = prob.indexOf(".")
        origNum = 0 + "." + prob[numb += 1]
        numb += 1
        timBy = prob.length - numb
        if (timBy === 1) {
            timBy = 10
        } else if (timBy === 2) {
            timBy = 100
        }
        Numa = origNum * 10
        if (prob[8] !== 0) {
            return "Your answer is " + prob[8] + " & " + Numa + "/" + 10
        } else {
            return "Your answer is " + Numa + "/" + 10
        }
    }
};

function Mean(prob) {
    var numbrs = prob.match(/\d+/g);
    var yee = -1
    var listOnum = []
    var Mux = numbrs.length
    Mux -= 1
    while (Mux > yee) {
        yee += 1
        listOnum.push(numbrs[yee])
        listOnum.push("+")
    }
    listOnum.pop()
    listOnum = listOnum.join(" ")
    answer = eval(listOnum)
    answer = eval(answer / numbrs.length)
    return "The mean is " + answer
}

function ymxb(prob) {
    prob = prob.replace("linear", "")
    if (prob.includes("/")) {

    } else {
        prob = prob.replace(",", " | ")
        prob = prob.replace(",", " | ")
        prob = prob.split(" ")
        f = prob[6] - prob[3]
        u = prob[4] - prob[1]
        endFrac = f + "/" + u
        if (f == u) {
            endFrac = "1"
        }
        choose = prob[1] + " | " + prob [3]
        choose = choose.split(" ")
        x = choose[0]
        y = choose[2]
        if (y == 0) {
            b = x
        } else {
            if (endFrac.includes("/")) {
                i = f * x
                t = u * 1
                r = i / t
                b = r - y
            } else {
                f = endFrac * x
                u = f / 1
                b = y - u
            };
        };
        choose = choose.join(" ")
        choose = choose.replace(" | ", "/")
        return "y = " + endFrac + "x + " + b
    };

}

function SolveForX(prob) {
    prob = prob.replace("solve", "")
    prob = prob.split('')
    console.log(prob)
    if (prob[prob.indexOf("x") + 1] == "=") {
        console.log(prob[prob.indexOf("x") - 2])
    } else if (prob[prob.indexOf("=") + 1] != "=") {
        console.log(prob[prob.indexOf("x") + 1])
    }
    if (prob[prob.indexOf("x") - 1] == "/") {
        /* E = prob[prob.indexOf("=") + 1] * prob[prob.indexOf("x") - 2] */
        re = prob[prob.indexOf("x") - 2]
        fin = prob[prob.indexOf("=") + 1]
        prob = prob.join(" ")
        prob = prob.replace(re, '')
        prob = prob.replace("x", '')
        prob = prob.replace("/", '')
        prob = prob.replace(fin, E)
        console.log(prob)
    } else {
        Xvar = "Divide " + prob[prob.indexOf("x") - 1]
        re = prob[prob.indexOf("x") - 1]
        prob = prob.join(" ")
        prob = prob.replace(re, '')
        prob = prob.replace("x", '')
        console.log(prob)
    }
    prob = prob.split('')
    console.log(prob)
    return "This function is incomplete!"
}

function isInteger(x) { return typeof x === "number" && isFinite(x) && Math.floor(x) === x; }
function isFloat(x) { return !!(x % 1); }

function Absolute(prob) {
    function AVdo(op, prob, pos) {
        E = prob[prob.indexOf("=") + 1]
        if (op == "+" && pos == "right") {
            fin = eval(prob[prob.indexOf("=") + 1] - test)
            garbage = prob[prob.indexOf("=") - 1]
        } else if (op == "-" && pos == "right") {
            fin = eval(prob[prob.indexOf("=") + 1] + test)
            garbage = prob[prob.indexOf("=") - 1]
        } else if (op == "*" && pos == "right"){
            fin = eval(prob[prob.indexOf("=") + 1] / prob[prob.indexOf("=") - 1])
            garbage = prob[prob.indexOf("=") - 1]
        } else if (op == "-" && pos == "left") {
            garbage = prob[prob.indexOf("!") - 1]
            fin = eval(prob[prob.indexOf("=") - 1] + test)
        } else if (op == "*" && pos == "left"){
            garbage = prob[prob.indexOf("!") - 1]
            fin = eval(prob[prob.indexOf("=") + 1] / prob[prob.indexOf("!") - 1])
        } else if (op == "+" && pos == "left") {
            garbage = prob[prob.indexOf("!") - 1]
            fin = eval(prob[prob.indexOf("=") + 1] - test)
        }
        console.log(fin)
        prob = prob.join(" ")
        prob = prob.replace(E, fin)
        prob = prob.replace(garbage, "")
        prob = prob.split(" ")
        E = prob[prob.indexOf("=") + 1]
        E2 = pos_to_neg(E)
    }
    prob = prob.replace("absolute", "")
    prob = prob.replace("|", " ! ")
    prob = prob.replace("|", " ! ")
    prob = prob.replace("=", " = ")
    prob = prob.split(" ")
    console.log(prob)
    /* Checks if there are any numbers outside the absolute value lines */
    if (prob[prob.indexOf("!") - 1] != "" || prob[prob.indexOf("=") - 1] != "") {
        if (prob[prob.indexOf("!") - 1] == "") {
            ree = prob[prob.indexOf("=") - 1]
            test = prob[prob.indexOf("=") - 1]
            console.log(test)
            /* If the outside number is being timed by the AV numbers */
            if (test.startsWith("+") == false && test.startsWith("-") == false) {
                AVdo("*", prob, "right")
            } else if (test.startsWith("+")) {
                AVdo("+", prob, "right")
            } else if (test.startsWith("-")) {
                AVdo("-", prob, "right")
            }
        } else if (prob[prob.indexOf("=") - 1] == "") {
            test = prob[prob.indexOf("!") - 1]
            console.log(test)
            /* If the outside number is being timed by the AV numbers */
            if (test.endsWith("+") == false && test.endsWith("-") == false) {
                AVdo("*", prob, "left")
            } else if (test.endsWith("+")) {
                AVdo("+", prob, "left")
            } else if (test.endsWith("-")) {
                AVdo("-", prob, "left")
            }
        }
    } else {
        console.log("Skiping the ShitShow up there")
        E = prob[eval(prob.indexOf("=") + 1)]
        E2 = neg_to_pos(E)
    }
    /* If theres not numbers outside the AV line*/
    if (Math.sign(E) == 1) {
        E2 = pos_to_neg(E)
        console.log(E2)
        thing = prob.indexOf("!") + 1
        console.log(prob[thing])
        thing = eval(prob[thing])
        console.log(thing)
        eq = thing + " = " + E
        eq2 = thing + " = " + E2
        console.log(eq + " " + eq2)
        return "Your answers are (" + eval(E - thing) + " , " + eval(E2 - thing) + ")"

    } else if (Math.sign(E) == -1) {
        E2 = neg_to_pos(E)
        console.log(E2)
        }
        console.log("Fuck")
        thing = prob.indexOf("!") + 1
        console.log(prob[thing])
        thing = eval(prob[thing])
        console.log(thing)
        eq = thing + " = " + E
        eq2 = thing + " = " + E2
        console.log(eq + " " + eq2)
        return "Your answers are (" + eval(E - thing) + " , " + eval(E2 - thing) + ")"
}

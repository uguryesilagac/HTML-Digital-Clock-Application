const H1S0 = document.querySelector(".H1S0");
const H1S1 = document.querySelector(".H1S1");
const H1S2 = document.querySelector(".H1S2");
const H1S3 = document.querySelector(".H1S3");
const H1S4 = document.querySelector(".H1S4");
const H1S5 = document.querySelector(".H1S5");
const H1S6 = document.querySelector(".H1S6");
const H2S0 = document.querySelector(".H2S0");
const H2S1 = document.querySelector(".H2S1");
const H2S2 = document.querySelector(".H2S2");
const H2S3 = document.querySelector(".H2S3");
const H2S4 = document.querySelector(".H2S4");
const H2S5 = document.querySelector(".H2S5");
const H2S6 = document.querySelector(".H2S6");

const M1S0 = document.querySelector(".M1S0");
const M1S1 = document.querySelector(".M1S1");
const M1S2 = document.querySelector(".M1S2");
const M1S3 = document.querySelector(".M1S3");
const M1S4 = document.querySelector(".M1S4");
const M1S5 = document.querySelector(".M1S5");
const M1S6 = document.querySelector(".M1S6");
const M2S0 = document.querySelector(".M2S0");
const M2S1 = document.querySelector(".M2S1");
const M2S2 = document.querySelector(".M2S2");
const M2S3 = document.querySelector(".M2S3");
const M2S4 = document.querySelector(".M2S4");
const M2S5 = document.querySelector(".M2S5");
const M2S6 = document.querySelector(".M2S6");

const S1S0 = document.querySelector(".S1S0");
const S1S1 = document.querySelector(".S1S1");
const S1S2 = document.querySelector(".S1S2");
const S1S3 = document.querySelector(".S1S3");
const S1S4 = document.querySelector(".S1S4");
const S1S5 = document.querySelector(".S1S5");
const S1S6 = document.querySelector(".S1S6");
const S2S0 = document.querySelector(".S2S0");
const S2S1 = document.querySelector(".S2S1");
const S2S2 = document.querySelector(".S2S2");
const S2S3 = document.querySelector(".S2S3");
const S2S4 = document.querySelector(".S2S4");
const S2S5 = document.querySelector(".S2S5");
const S2S6 = document.querySelector(".S2S6");

function H1_Zero() {
    H1S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S3.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S4.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H1_One() {
    H1S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H1_Two() {
    H1S0.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S4.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H1S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H1_Off() {
    H1S0.style.backgroundColor = "var(--offcolor-background-color)";
    H1S1.style.backgroundColor = "var(--offcolor-background-color)";
    H1S2.style.backgroundColor = "var(--offcolor-background-color)";
    H1S3.style.backgroundColor = "var(--offcolor-background-color)";
    H1S4.style.backgroundColor = "var(--offcolor-background-color)";
    H1S5.style.backgroundColor = "var(--offcolor-background-color)";
    H1S6.style.backgroundColor = "var(--offcolor-background-color)";
}
function H2_Zero() {
    H2S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S3.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S4.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_One() {
    H2S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Two() {
    H2S0.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S4.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Three() {
    H2S0.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Four() {
    H2S0.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S3.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Five() {
    H2S0.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S3.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Six() {
    H2S0.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S3.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S4.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Seven() {
    H2S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Eight() {
    H2S0.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S3.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S4.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Nine() {
    H2S0.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S1.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S2.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S3.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S5.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
    H2S6.style.backgroundColor = "var(--oncolor-background-color-for-Hours)";
}
function H2_Off() {
    H2S0.style.backgroundColor = "var(--offcolor-background-color)";
    H2S1.style.backgroundColor = "var(--offcolor-background-color)";
    H2S2.style.backgroundColor = "var(--offcolor-background-color)";
    H2S3.style.backgroundColor = "var(--offcolor-background-color)";
    H2S4.style.backgroundColor = "var(--offcolor-background-color)";
    H2S5.style.backgroundColor = "var(--offcolor-background-color)";
    H2S6.style.backgroundColor = "var(--offcolor-background-color)";
}
function M1_Zero() {
    M1S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S4.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M1_One() {
    M1S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M1_Two() {
    M1S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S4.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M1_Three() {
    M1S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M1_Four() {
    M1S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M1_five() {
    M1S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M1S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M1_Off() {
    M1S0.style.backgroundColor = "var(--offcolor-background-color)";
    M1S1.style.backgroundColor = "var(--offcolor-background-color)";
    M1S2.style.backgroundColor = "var(--offcolor-background-color)";
    M1S3.style.backgroundColor = "var(--offcolor-background-color)";
    M1S4.style.backgroundColor = "var(--offcolor-background-color)";
    M1S5.style.backgroundColor = "var(--offcolor-background-color)";
    M1S6.style.backgroundColor = "var(--offcolor-background-color)";
}
function M2_Zero() {
    M2S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S4.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_One() {
    M2S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Two() {
    M2S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S4.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Three() {
    M2S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Four() {
    M2S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Five() {
    M2S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Six() {
    M2S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S4.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Seven() {
    M2S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Eight() {
    M2S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S4.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Nine() {
    M2S0.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S1.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S2.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S3.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S5.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
    M2S6.style.backgroundColor = "var(--oncolor-background-color-for-Minutes)";
}
function M2_Off() {
    M2S0.style.backgroundColor = "var(--offcolor-background-color)";
    M2S1.style.backgroundColor = "var(--offcolor-background-color)";
    M2S2.style.backgroundColor = "var(--offcolor-background-color)";
    M2S3.style.backgroundColor = "var(--offcolor-background-color)";
    M2S4.style.backgroundColor = "var(--offcolor-background-color)";
    M2S5.style.backgroundColor = "var(--offcolor-background-color)";
    M2S6.style.backgroundColor = "var(--offcolor-background-color)";
}
function S1_Zero() {
    S1S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S4.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S1_One() {
    S1S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S1_Two() {
    S1S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S4.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S1_Three() {
    S1S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S1_Four() {
    S1S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S1_Five() {
    S1S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S1S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S1_Off() {
    S1S0.style.backgroundColor = "var(--offcolor-background-color)";
    S1S1.style.backgroundColor = "var(--offcolor-background-color)";
    S1S2.style.backgroundColor = "var(--offcolor-background-color)";
    S1S3.style.backgroundColor = "var(--offcolor-background-color)";
    S1S4.style.backgroundColor = "var(--offcolor-background-color)";
    S1S5.style.backgroundColor = "var(--offcolor-background-color)";
    S1S6.style.backgroundColor = "var(--offcolor-background-color)";
}
function S2_Zero() {
    S2S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S4.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_One() {
    S2S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Two() {
    S2S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S4.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Three() {
    S2S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Four() {
    S2S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Five() {
    S2S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Six() {
    S2S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S4.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Seven() {
    S2S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Eight() {
    S2S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S4.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Nine() {
    S2S0.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S1.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S2.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S3.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S5.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
    S2S6.style.backgroundColor = "var(--oncolor-background-color-for-Seconds)";
}
function S2_Off() {
    S2S0.style.backgroundColor = "var(--offcolor-background-color)";
    S2S1.style.backgroundColor = "var(--offcolor-background-color)";
    S2S2.style.backgroundColor = "var(--offcolor-background-color)";
    S2S3.style.backgroundColor = "var(--offcolor-background-color)";
    S2S4.style.backgroundColor = "var(--offcolor-background-color)";
    S2S5.style.backgroundColor = "var(--offcolor-background-color)";
    S2S6.style.backgroundColor = "var(--offcolor-background-color)";
}

setInterval(() => {
    let Hours = String((new Date).getHours());
    let HoursCheck = Number((new Date).getHours());
    let Minutes = Number((new Date).getMinutes());
    let Seconds = Number((new Date).getSeconds());
    let ArrayHours = Hours.split("");

    if (ArrayHours.length == 2) {
        H1_Off();
        H2_Off();
        if (ArrayHours[0] == 1) {
            H1_One()
        }
        if (ArrayHours[0] == 2) {
            H1_Two();
        }
        if (ArrayHours[1] == 0) {
            H2_Zero();
        }
        if (ArrayHours[1] == 1) {
            H2_One();
        }
        if (ArrayHours[1] == 2) {
            H2_Two();
        }
        if (ArrayHours[1] == 3) {
            H2_Three();
        }
        if (ArrayHours[1] == 4) {
            H2_Four();
        }
        if (ArrayHours[1] == 5) {
            H2_Five();
        }
        if (ArrayHours[1] == 6) {
            H2_Six();
        }
        if (ArrayHours[1] == 7) {
            H2_Seven();
        }
        if (ArrayHours[1] == 8) {
            H2_Eight();
        }
        if (ArrayHours[1] == 9) {
            H2_Nine();
        }

    }
    else {
        H1_Off();
        H2_Off();
        H1_Zero();
        if (ArrayHours[0] == 0) {
            H2_Zero();
        }
        if (ArrayHours[0] == 1) {
            H2_One();

        }
        if (ArrayHours[0] == 2) {
            H2_Two();
        }
        if (ArrayHours[0] == 3) {
            H2_Three();
        }
        if (ArrayHours[0] == 4) {
            H2_Four();
        }
        if (ArrayHours[0] == 5) {
            H2_Five();
        }
        if (ArrayHours[0] == 6) {
            H2_Six();
        }
        if (ArrayHours[0] == 7) {
            H2_Seven();
        }
        if (ArrayHours[0] == 8) {
            H2_Eight();
        }
        if (ArrayHours[0] == 9) {
            H2_Nine();
        }
    }
})
setInterval(() => {
    let Minutes = String((new Date).getMinutes());
    let ArrayMinutes = Minutes.split("");
    let Seconds = Number((new Date).getSeconds());
    if (ArrayMinutes.length == 2) {
        M1_Off();
        M2_Off();
        if (ArrayMinutes[0] == 1) {
            M1_One();
        }
        if (ArrayMinutes[0] == 2) {
            M1_Two();
        }
        if (ArrayMinutes[0] == 3) {
            M1_Three();
        }
        if (ArrayMinutes[0] == 4) {
            M1_Four();
        }
        if (ArrayMinutes[0] == 5) {
            M1_five();
        }
        if (ArrayMinutes[1] == 0) {
            M2_Zero();
        }
        if (ArrayMinutes[1] == 1) {
            M2_One();
        }
        if (ArrayMinutes[1] == 2) {
            M2_Two();
        }
        if (ArrayMinutes[1] == 3) {
            M2_Three();

        }
        if (ArrayMinutes[1] == 4) {
            M2_Four();
        }
        if (ArrayMinutes[1] == 5) {
            M2_Five();
        }
        if (ArrayMinutes[1] == 6) {
            M2_Six();
        }
        if (ArrayMinutes[1] == 7) {
            M2_Seven();
        }
        if (ArrayMinutes[1] == 8) {
            M2_Eight();
        }
        if (ArrayMinutes[1] == 9) {
            M2_Nine();
        }
    }
    else {
        M1_Off();
        M2_Off();
        M1_Zero();
        if (ArrayMinutes[0] == 0) {
            M2_Zero();
        }
        if (ArrayMinutes[0] == 1) {
            M2_One();
        }
        if (ArrayMinutes[0] == 2) {
            M2_Two();
        }
        if (ArrayMinutes[0] == 3) {
            M2_Three();
        }
        if (ArrayMinutes[0] == 4) {
            M2_Four();
        }
        if (ArrayMinutes[0] == 5) {
            M2_Five();
        }
        if (ArrayMinutes[0] == 6) {
            M2_Six();
        }
        if (ArrayMinutes[0] == 7) {
            M2_Seven();
        }
        if (ArrayMinutes[0] == 8) {
            M2_Eight();
        }
        if (ArrayMinutes[0] == 9) {
            M2_Nine();
        }

    }
}, 1)
setInterval(() => {
    let Seconds = String((new Date).getSeconds());
    let ArraySeconds = Seconds.split("");
    let MiliSeconds = Number((new Date).getMilliseconds());
    if (ArraySeconds.length == 2) {
        S1_Off();
        S2_Off();
        if (ArraySeconds[0] == 1) {
            S1_One();
            if (MiliSeconds == 999 && ArraySeconds[1] == 9) {
                S1_Off()
            }
        }
        if (ArraySeconds[0] == 2) {
            S1_Two();
            if (MiliSeconds == 999 && ArraySeconds[1] == 9) {
                S1_Off()
            }
        }
        if (ArraySeconds[0] == 3) {
            S1_Three();
            if (MiliSeconds == 999 && ArraySeconds[1] == 9) {
                S1_Off()
            }
        }
        if (ArraySeconds[0] == 4) {
            S1_Four();
            if (MiliSeconds == 999 && ArraySeconds[1] == 9) {
                S1_Off()
            }
        }
        if (ArraySeconds[0] == 5) {
            S1_Five();
            if (MiliSeconds == 999 && ArraySeconds[1] == 9) {
                S1_Off()
            }
        }
        if (ArraySeconds[1] == 0) {
            S2_Zero();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 1) {
            S2_One();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 2) {
            S2_Two();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 3) {
            S2_Three();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 4) {
            S2_Four();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 5) {
            S2_Five();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 6) {
            S2_Six();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 7) {
            S2_Seven();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 8) {
            S2_Eight();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[1] == 9) {
            S2_Nine();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
    }
    else {
        S1_Off();
        S2_Off();
        S1_Zero();
        if (ArraySeconds[0] == 0) {
            S2_Zero();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 1) {
            S2_One();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 2) {
            S2_Two();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 3) {
            S2_Three();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 4) {
            S2_Four();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 5) {
            S2_Five();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 6) {
            S2_Six();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 7) {
            S2_Seven();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 8) {
            S2_Eight();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
        if (ArraySeconds[0] == 9) {
            S2_Nine();
            if (MiliSeconds == 999) {
                S2_Off();
            }
        }
    }
});



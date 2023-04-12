let o = [];
let a = 0;
for (let i = 0; i < 5; i++) {
 o.push(Number(prompt()));

}
for(let i of o) {
 a += i;
}
document.querySelector(".four").textContent = `${o[0]} + ${o[1]} + ${o[2]} + ${o[3]} + ${o[4]} = ${a}`;
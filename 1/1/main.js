let password =
  "1,123456\n2,3212\n3,1510\n4,579\n5,22528\n6,6\n7,1310\n8,205\n9,10\n10,5\n11,12112212\n12,2048\n13,5\n14,7\n15,01\n16,13\n17,\n18,6\n19,1111\n20,0214\n21,202122\n22,1111111\n23,6\n24,190000\n25,162534\n26,113355\n27,20220101\n28,198\n29,8\n30,8\n31,52\n32,56088\n33,50100500\n34,0861\n35,10\n36,123456\n37,\n38,3\n39,303\n40,410\n41,1576\n42,12\n43,111119108\n44,359907\n45,1232123\n46,4\n47,132\n48,052\n49,654321\n50,699678\n51,\n52,86420\n53,12\n54,12310456\n55,5\n56,105\n57,6482\n58,314\n59,456831\n60,7006652\n61,62486\n62,3862\n63,123456\n64,27\n65,21\n66,11\n67,\n68,83810205\n69,44253432\n70,335129720\n71,571810\n72,15\n73,7\n74,0\n75,777777\n76,19\n77,7365\n78,73915\n79,123654798\n80,86400000\n81,413\n82,4194304\n83,789654123987456321\n84,12456\n85,100\n86,78555477\n87,9\n88,000008200000\n89,19\n90,31415\n91,269\n92,177147\n93,\n94,337711\n95,378\n96,0300\n97,125678\n98,10\n99,7\n100,56135972";
let passwordArray = password.split("\n");
let passwordValue;
let passwordArray1 = [];
let click;
for (let i = 1; i <= 100; i++) {
  passwordValue = passwordArray[i - 1].split(",");
  passwordArray1.push(passwordValue[1]);
}
function ready(level) {
  document.getElementsByTagName("title")[0].innerHTML = "레벨 " + level;
  document.getElementById("door").style.left = "350px";
  document.getElementById("door").style.background =
    "url(../" + level + ".png)";
  document.getElementById("door").style.backgroundSize = "300px";
  click = true;
}
function openDoor() {
  let door = document.getElementById("door");
  let n = 351;
  doorAnimation = setInterval(function () {
    door.style.left = n + "px";
    n++;
    if (n > 650) {
      clearInterval(doorAnimation);
    }
  }, 10);
}
function check() {
  if (document.getElementById("password").value == passwordArray1[level - 1]) {
    if (click) {
      click = false;
      openDoor();
      if (level < 100) {
        setTimeout(function () {
          level++;
          document.getElementById("password").value = "";
          ready(level);
        }, 5000);
      }
    }
  } else {
    alert("비번이 틀립니다.");
  }
}
let level = prompt("레벨을 선택해 주십시오. (1~100)");
ready(level);

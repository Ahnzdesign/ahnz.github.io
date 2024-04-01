const basket = [];
let estimateId = 0;

const subsidiaryImages = {
  0: "./img/스마트바.png",
  1: "./img/스마트바.png",
  2: "./img/멜로디.png",
  3: "./img/멜로디.png",
  4: "./img/원형골드,실버.png",
  5: "./img/원형골드,실버.png",
  6: "./img/원형골드,실버.png",
  7: "./img/원형골드,실버.png",
  8: "./img/라운드바140200.png",
  9: "./img/라운드바140200.png",
  10: "./img/라운드바140200.png",
  11: "./img/라운드바140200.png",
  12: "./img/피스카바.png",
  13: "./img/피스카바.png",
  14: "./img/피스카바.png",
  15: "./img/경첩.png",
  16: "./img/경첩.png",
  17: "./img/경첩.png",
};

const costTable = [
  [10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000],
  [11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000],
  [12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000],
  [13000, 14000, 15000, 16000, 17000, 25000, 26000, 27000, 28000],
  [14000, 15000, 16000, 17000, 18000, 25000, 27000, 29000, 31000],
  [15000, 16000, 17000, 25000, 26000, 27000, 28000, 29000, 30000],
  [16000, 17000, 18000, 26000, 27000, 28000, 29000, 30000, 31000],
  [17000, 18000, 19000, 27000, 28000, 29000, 30000, 31000, 32000],
  [18000, 19000, 20000, 28000, 29000, 30000, 31000, 32000, 33000],
  [19000, 20000, 21000, 30000, 35000, 40000, 45000, 50000, 55000],
  [20000, 21000, 22000, 31000, 36000, 41000, 46000, 51000, 56000],
  [21000, 22000, 23000, 32000, 37000, 42000, 47000, 52000, 57000],
  [22000, 23000, 24000, 33000, 38000, 43000, 48000, 53000, 58000],
  [23000, 24000, 25000, 34000, 39000, 44000, 49000, 54000, 59000],
  [24000, 25000, 26000, 35000, 40000, 45000, 50000, 55000, 60000],
  [25000, 26000, 27000, 36000, 41000, 46000, 51000, 56000, 61000],
  [26000, 27000, 28000, 37000, 42000, 47000, 52000, 57000, 62000],
  [27000, 28000, 29000, 38000, 43000, 48000, 53000, 58000, 63000],
  [28000, 29000, 30000, 39000, 44000, 49000, 54000, 59000, 64000],
  [29000, 30000, 31000, 40000, 55000, 70000, 85000, 100000, 115000],
  [30000, 31000, 32000, 41000, 56000, 71000, 86000, 101000, 116000],
  [31000, 32000, 33000, 42000, 57000, 72000, 87000, 102000, 117000],
  [32000, 33000, 34000, 43000, 58000, 73000, 88000, 103000, 118000],
  [33000, 34000, 35000, 44000, 59000, 74000, 89000, 104000, 119000],
  [34000, 35000, 36000, 45000, 60000, 75000, 90000, 105000, 120000],
];

const subsidiaryTable = {
  0: "스마트바 손잡이 실버",
  1: "스마트바 손잡이 흑색",
  2: "멜로디 손잡이 실버 ",
  3: "멜로디 손잡이 흑색",
  4: "원형(소) 실버 ",
  5: "원형(소) 골드",
  6: "원형(대) 실버 ",
  7: "원형(대) 골드",
  8: "라운드바 140 백색",
  9: "라운드바 140 흑색",
  10: "라운드바 200 백색",
  11: "라운드바 200 흑색",
  12: "스티커 (아이보리)",
  13: "스티커 (화이트)",
  14: "스티커 (연회색)",
  15: "아웃도어 싱크/가구 저압경첩",
  16: "인도어 싱크/가구 경첩",
  17: "경첩피스(20개)",
};

const colorTable = {
  r1: "무광/제로화이트",
  r2: "무광/제로밀키",
  r3: "무광/제로실키",
  r4: "무광/제로다크",
  r5: "유광/UV화이트",
  r6: "유광/UV화이트펄",
  r7: "유광/UV회색펄",
  r8: "LPM/산타나",
  r9: "LPM/아카시아",
  r10: "LPM/다크오크",
  r11: "LPM/네추럴오크",
  r12: "PB/그레이",
  r13: "PB/백색",
};

const widthTable = {
  0: "50 mm",
  1: "100 mm",
  2: "200 mm",
  3: "300 mm",
  4: "400 mm",
  5: "500 mm",
  6: "600 mm",
  7: "700 mm",
  8: "800 mm",
};

const lengthTable = {
  0: "50 mm",
  1: "100 mm",
  2: "200 mm",
  3: "300 mm",
  4: "400 mm",
  5: "500 mm",
  6: "600 mm",
  7: "700 mm",
  8: "800 mm",
  9: "900 mm",
  10: "1000 mm",
  11: "1100 mm",
  12: "1200 mm",
  13: "1300 mm",
  14: "1400 mm",
  15: "1500 mm",
  16: "1600 mm",
  17: "1700 mm",
  18: "1800 mm",
  19: "1900 mm",
  20: "2000 mm",
  21: "2100 mm",
  22: "2200 mm",
  23: "2300 mm",
  24: "2400 mm",
};

const smartBarPriceTable = {
  0: {
    0: 10000,
    1: 20000,
    2: 30000,
  },
  1: {
    0: 10000,
    1: 20000,
    2: 30000,
  },
};

const subsidiaryPriceTable = {
  2: 1000,
  3: 1000,
  4: 3000,
  5: 3000,
  6: 4000,
  7: 4000,
  8: 4000,
  9: 4000,
  10: 4000,
  11: 4000,
  12: 1000,
  13: 1000,
  14: 1000,
  15: 2000,
  16: 2000,
  17: 1000,
};

const subsidiarySizeTable = {
  0: "600 mm",
  1: "1,200 mm",
  2: "1,800 mm",
};

function handleOnChangeSignColor(selectElement) {
  const signPreview = document.getElementById("sign-preview");
  const thicknessSelect = document.getElementById("sign-thickness-select");
  const selectedColor = selectElement.value;
  let thicknessOption;
  const imageUrls = {
    r1: "./img/무광18TPET-001.png",
    r2: "./img/무광18TPET-001.png",
    r3: "./img/무광18TPET-001.png",
    r4: "./img/무광18TPET-001.png",
    r5: "./img/유광18T-001.png",
    r6: "./img/유광18T-001.png",
    r7: "./img/유광18T-001.png",
    r8: "./img/LPM18T-001 (1).png",
    r9: "./img/LPM18T-001 (1).png",
    r10: "./img/LPM18T-001 (1).png",
    r11: "./img/LPM18T-001 (1).png",
    r12: "./img/pb.png",
    r13: "./img/pb.png",
  };
  signPreview.src = imageUrls[selectedColor];

  if (selectedColor !== "-1") {
    document.getElementById("color-selection").disabled = true;
  }

  if (selectedColor === "r12" || selectedColor === "r13") {
    thicknessOption = "15mm";
  } else {
    thicknessOption = "18mm";
  }

  document.getElementById("sign-count-input").value = 1;

  /*for (let i = 0; i < thicknessSelect.options.length; i++) {
    if (thicknessSelect.options[i].text === thicknessOption) {
      thicknessSelect.selectedIndex = i;
      break;
    }
  }*/
  thicknessSelect.value = thicknessOption;
}

function updateSubsidiaryImage() {
  const selectElement = document.getElementById("subsidiary-select__selector");
  const selectedValue = selectElement.value;
  const imageContainer = document.getElementById("subsidiary-select-container");

  // 선택한 부자재에 해당하는 이미지 URL 가져오기
  const imageUrl = subsidiaryImages[selectedValue];

  // 이미지 컨테이너에 이미지 업데이트
  imageContainer.innerHTML = `<img src="${imageUrl}" alt="부자재 이미지">`;
}

const onDelete = (estimateId) => {
  const totalPrice = document.getElementById("price");
  const target = document.getElementById(`estimate-price-${estimateId}`);

  const price = target.getAttribute("value");
  const totalPriceValue = parseInt(totalPrice.getAttribute("value")) - price;
  totalPrice.innerText = totalPriceValue.toLocaleString();
  totalPrice.setAttribute("value", totalPriceValue);
  document.getElementById(`estimate-${estimateId}`).remove();
};

const sendEmail = () => {
  const orderer = document.getElementById("orderer-name-input");
  const ordered = document.getElementById("estimate-table-tbody");
  const orderList = Array.from(ordered.getElementsByTagName("tr"));

  if (orderList.length === 0) {
    alert("입력한 견적이 없습니다.");
    return;
  }

  if (!orderer.value) {
    alert("주문자명을 입력해주세요.");
    return;
  }

  let detail = "";
  orderList.map((tr, i) => {
    detail += `${i + 1}. ${tr.getAttribute("value")}\n`;
  });
  detail += `합계 ${document.getElementById("price").innerText}원`;

  axios({
    url: "https://formspree.io/f/xayrpjvl",
    method: "post",
    headers: {
      Accept: "application/json",
    },
    data: {
      email: "dltmd202@gmail.com",
      message: `주문자명: ${orderer.value}
      주문:
      ${detail}
      `,
    },
  }).then((response) => {
    alert("견적을 성공적으로 전송했습니다.");
  });
};

document.addEventListener("DOMContentLoaded", (event) => {
  // 종합
  const woodAddButton = document.getElementById("add-estimate-button");
  const estimate = document.getElementById("estimate-table-tbody");
  const totalPrice = document.getElementById("price");
  const quantity = document.getElementById("purchase-quantity");

  // 목재
  const lengthSelect = document.getElementById("sign-length-select");
  const widthSelect = document.getElementById("sign-width-select");
  const priceInput = document.getElementById("price-input");
  const signCountInput = document.getElementById("sign-count-input");
  const processingSelect = document.getElementById("processing-type-select");
  const signColorSelect = document.getElementById("sign-color-select");

  // 부자재
  const subsidiarySelector = document.getElementById(
    "subsidiary-select__selector"
  );
  const subsidiarySize = document.getElementById("subsidiary-size");
  const subsidiaryCountInput = document.getElementById(
    "sign-subsidiary-cnt-select"
  );
  const subsidiarySizeSelect = document.getElementById(
    "sign-subsidiary-size-select"
  );
  const addSubsidiaryButton = document.getElementById("add-subsidiary-button");

  // 부자재 선택 시 이미지 업데이트 이벤트 리스너 등록
  document
    .getElementById("subsidiary-select__selector")
    .addEventListener("change", updateSubsidiaryImage);

  subsidiarySelector.addEventListener("change", () => {
    const selectedValue = parseInt(subsidiarySelector.value);

    if (selectedValue <= 1) {
      subsidiarySize.style.visibility = "visible";
    } else {
      subsidiarySize.style.visibility = "hidden";
      document.getElementById("subsidiary-size-selection").disabled = false;
      subsidiarySizeSelect.value = -1;
    }
    // subsidiarySize.style.visibility = (selectedValue === 0 || selectedValue === 1) ? 'visible' : 'hidden';
    subsidiaryCountInput.value = 1;
  });

  subsidiarySizeSelect.addEventListener("change", (e) => {
    if (parseInt(subsidiarySizeSelect.value) !== -1)
      document.getElementById("subsidiary-size-selection").disabled = true;
  });

  lengthSelect.addEventListener("change", (e) => {
    if (parseInt(lengthSelect.value) !== -1)
      document.getElementById("length-selection").disabled = true;
    updatePrice();
  });

  widthSelect.addEventListener("change", (e) => {
    if (parseInt(widthSelect.value) !== -1)
      document.getElementById("width-selection").disabled = true;
    updatePrice();
  });

  subsidiarySelector.addEventListener("change", (e) => {
    if (parseInt(subsidiarySelector.value) !== -1)
      document.getElementById("subsidiary-selection").disabled = true;
    updatePrice();
  });

  processingSelect.addEventListener("change", updatePrice);

  signCountInput.addEventListener("change", updatePrice);

  woodAddButton.addEventListener("click", (e) => {
    const length = lengthTable[lengthSelect.value];
    const width = widthTable[widthSelect.value];
    const woodType = colorTable[signColorSelect.value];
    const thickness = document.getElementById("sign-thickness-select").value;
    const count = parseInt(signCountInput.value);
    const price = parseInt(priceInput.value.replace(/[,]/g, ""));
    const formattedPrice = price.toLocaleString();
    const processingType =
      processingSelect.value === "0" ? "경첩홈파기" : "우라홈(+2000)";

    basket.push({
      length: length,
      width: width,
      woodType: woodType,
      thickness: thickness,
      count: count,
      price: price,
      processingType: processingType,
    });

    if (length && width && signColorSelect.value && thickness && count) {
      alert("목재가 추가되었습니다.");
    }

    if (
      !lengthSelect.value ||
      !widthSelect.value ||
      !signColorSelect.value ||
      !document.getElementById("sign-thickness-select").value ||
      !signCountInput.value
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    /*totalPrice.innerText = (parseInt(totalPrice.innerText || '0') + price)
     */
    const totalPriceValue = parseInt(totalPrice.getAttribute("value")) + price;
    totalPrice.innerText = totalPriceValue.toLocaleString();
    totalPrice.innerText = totalPriceValue.toLocaleString();
    totalPrice.setAttribute("value", totalPriceValue);

    quantity.innerText = totalPriceValue / 1000;

    const detail = `${woodType || ""} / 두께 ${thickness || ""} / 폭 ${
      width || ""
    } / 길이 ${length || ""} / ${
      count || "0"
    }개 / ${processingType} / ${formattedPrice} 원`;

    estimate.innerHTML += `
      <tr id="${"estimate-" + estimateId}" value="${detail}">
        <td>${woodType}</td>
        <td>${thickness}</td>
        <td>${width}</td>
        <td>${length}</td>
        <td>${count}</td>
        <td>${processingType}</td>
        <td id=estimate-price-${estimateId} value="${price}">${formattedPrice}</td>
        <td>
          <button
              id="${"delete-button-" + estimateId}"
               class="delete-button"
                target="${estimate}" 
             onclick="onDelete(${estimateId})">
            <img src="icon/delete-icon.svg">
          </button>
         </td>
      </tr>
    `;

    estimateId++;
  });

  addSubsidiaryButton.addEventListener("click", () => {
    const subsidiaryValue = subsidiarySelector.value;
    const subsidiaryType = subsidiaryTable[subsidiaryValue];
    const subsidiarySize = subsidiarySizeTable[subsidiarySizeSelect.value];
    const subsidiaryCnt = parseInt(subsidiaryCountInput.value);
    let price = 0;

    if (subsidiaryValue === "0" || subsidiaryValue === "1") {
      if (subsidiarySizeSelect.value === "-1" || !subsidiaryCountInput.value) {
        alert("모든 항목을 입력해주세요.");
        return;
      }
      price = smartBarPriceTable[subsidiaryValue][subsidiarySizeSelect.value];
    } else {
      if (!subsidiaryCountInput.value) {
        alert("모든 항목을 입력해주세요.");
        return;
      }
      price = subsidiaryPriceTable[subsidiaryValue];
    }

    if (subsidiaryValue <= 1)
      price = smartBarPriceTable[subsidiaryValue][subsidiarySizeSelect.value];
    else price = subsidiaryPriceTable[subsidiaryValue];
    const formattedPrice = price.toLocaleString();

    const totalPriceValue = parseInt(totalPrice.getAttribute("value")) + price;
    totalPrice.innerText = totalPriceValue.toLocaleString();
    totalPrice.innerText = totalPriceValue.toLocaleString();
    totalPrice.setAttribute("value", totalPriceValue);

    quantity.innerText = totalPriceValue / 1000;

    const detail = `${subsidiaryType || ""} / 길이 ${subsidiarySize || ""} / ${
      subsidiaryCnt || "0"
    }개 / ${formattedPrice}원`;

    estimate.innerHTML += `
      <tr id="${"estimate-" + estimateId}" value="${detail}">
        <td>${subsidiaryType}</td>
        <td></td>
        <td></td>
        <td>${subsidiarySize || ""}</td>
        <td>${subsidiaryCnt}</td>
        <td></td>
        <td id=estimate-price-${estimateId} value="${price}">${formattedPrice}</td>
        <td>
          <button 
              id="${"delete-button-" + estimateId}"
               class="delete-button"
                target="${estimate}" 
             onclick="onDelete(${estimateId})">
            <img src="icon/delete-icon.svg">
          </button>
         </td>
      </tr>
    `;

    estimateId++;
    alert("부자재가 추가되었습니다.");
  });

  function updatePrice() {
    const lengthIndex = parseInt(lengthSelect.value);
    const widthIndex = parseInt(widthSelect.value);
    const processingIndex = parseInt(processingSelect.value);
    const signCount = parseInt(signCountInput.value);

    if (lengthIndex === -1 || widthIndex === -1 || processingIndex === -1)
      return;

    let price = costTable[lengthIndex][widthIndex];
    if (processingIndex === 1) {
      price += 2000;
    }
    price = price * (signCount || 1);
    priceInput.value = price.toLocaleString();
  }
});

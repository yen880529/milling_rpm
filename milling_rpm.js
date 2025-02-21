
const parameters = {
    steel: {
        hss: { vc: 20, fz: 0.1 },
        carbide: { vc: 30, fz: 0.15 },
        ceramic: { vc: 40, fz: 0.05 },
        cbn: { vc: 60, fz: 0.1 },
        pcd: { vc: 80, fz: 0.2 }
    },
    aluminum: {
        hss: { vc: 100, fz: 0.2 },
        carbide: { vc: 150, fz: 0.25 },
        ceramic: { vc: 200, fz: 0.3 },
        cbn: { vc: 220, fz: 0.4 },
        pcd: { vc: 250, fz: 0.5 }
    },
    stainless: {
        hss: { vc: 15, fz: 0.08 },
        carbide: { vc: 20, fz: 0.1 },
        ceramic: { vc: 30, fz: 0.05 },
        cbn: { vc: 40, fz: 0.1 },
        pcd: { vc: 50, fz: 0.15 }
    },
    castIron: {
        hss: { vc: 60, fz: 0.2 },
        carbide: { vc: 80, fz: 0.3 },
        ceramic: { vc: 120, fz: 0.15 },
        cbn: { vc: 140, fz: 0.25 },
        pcd: { vc: 160, fz: 0.4 }
    },
    copperAlloy: {  // 新增合銅的切削參數
        hss: { vc: 40, fz: 0.1 },
        carbide: { vc: 60, fz: 0.15 },
        ceramic: { vc: 80, fz: 0.2 },
        cbn: { vc: 100, fz: 0.25 },
        pcd: { vc: 120, fz: 0.3 }
    }
};

function updateParameters() {
    const material = document.getElementById('material').value;
    const toolMaterial = document.getElementById('toolMaterial').value;
    const selectedParams = parameters[material][toolMaterial];
    
    document.getElementById('vc').value = selectedParams.vc;
    document.getElementById('fz').value = selectedParams.fz;
}

function calculate() {
    let vc = parseFloat(document.getElementById('vc').value);
    let dc = parseFloat(document.getElementById('dc').value);
    let fz = parseFloat(document.getElementById('fz').value);
    let z = parseFloat(document.getElementById('z').value);
    let re = parseFloat(document.getElementById('re').value);
    let l = parseFloat(document.getElementById('l').value);
    let s = parseFloat(document.getElementById('s').value);
    
    if (isNaN(vc) || isNaN(dc) || isNaN(fz) || isNaN(z) || isNaN(re) || isNaN(l) || isNaN(s)) {
        alert("請填寫所有數據！");
        return;
    }
    
    let vf = fz * z * s;
    let Ra = (fz ** 2) / (8 * re) * 1000; // 轉換為 μm
    let T = l / vf;
    
    document.getElementById('resultS').innerText = s.toFixed(2);
    document.getElementById('resultF').innerText = vf.toFixed(2);
    document.getElementById('resultRa').innerText = Ra.toFixed(4);
    document.getElementById('resultT').innerText = T.toFixed(2);
}

// 初始化預設值
updateParameters();

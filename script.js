// 获取按钮和输入框元素
const button = document.getElementById('calculateBtn');
const pressureInput = document.getElementById('pressure');
const areaInput = document.getElementById('area');
const thicknessInput = document.getElementById('thickness');
const resultDiv = document.getElementById('result');

// 计算函数
function calculate() {
    // 获取用户输入的值
    const pressure = parseFloat(pressureInput.value);  // 压强
    const area = parseFloat(areaInput.value);          // 表面积
    const thickness = parseFloat(thicknessInput.value); // 工件厚度

    // 检查输入的有效性
    if (isNaN(pressure) || pressure <= 0 || isNaN(area) || area <= 0 || isNaN(thickness) || thickness <= 0) {
        alert('请输入有效的压强、表面积和工件厚度！');
        return;
    }

    // 已知参数
    const k = 3;  // 弹性模量（刚度）
    const p = 1;  // 螺距，单位 mm

    // 计算所需的压力
    const F_required = pressure * area;  // 压力 F = 压强 * 表面积

    // 计算螺杆需要移动的距离
    const delta_x = (F_required-2) / k;  // Δx = F / k

    // 计算螺杆实际需要移动的距离
    const delta_x_actual = delta_x - thickness;  // 实际移动的距离

    // 计算螺杆需要转动的圈数
    const n = delta_x_actual / p;  // n = Δx_actual / p

    // 显示结果
    resultDiv.innerText = `需要转动的圈数：${n.toFixed(2)} 圈`;
}

// 添加点击事件监听器
button.addEventListener('click', calculate);

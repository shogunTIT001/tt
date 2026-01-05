// ของเดิม
const menuData = [...foodMenu, ...drinkMenu, ...dessertMenu];

// ของใหม่ (ตัวอย่างดึงจาก API)
async function fetchMenu() {
    const response = await fetch('https://your-api.com/products');
    const menuData = await response.json();
    renderMenu(menuData);
}
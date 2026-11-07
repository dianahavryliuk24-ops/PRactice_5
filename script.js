console.log("JavaScript успішно підключено!");

function showWelcome() {
    alert("Вітаємо на нашому сайті!");
}

function showAuthor() {
    alert("Автор сторінки: Гаврилюк Діана, 17 років, студентка спеціальності Прикладна математика.");
}

function meetUser() {
    let name = prompt("Як тебе звати?");
    
    if (name) {
        let city = prompt("З якого ти міста?");
        if (city) {
            alert("Привіт, " + name + "! Раді вітати користувача з міста " + city + "!");
        } else {
            alert("Місто не введено або дію скасовано.");
        }
    } else {
        alert("Ім'я не введено або дію скасовано.");
    }
}

function confirmAction() {
    let result = confirm("Ви бажаєте продовжити роботу із сайтом?");
    
    if (result) {
        alert("Дякуємо! Продовжуємо роботу.");
    } else {
        alert("Дію скасовано.");
    }
}

function calculatePurchase() {
    let itemName = prompt("Введіть назву товару:");
    
    if (!itemName) {
        alert("Дію скасовано. Назва товару обов'язкова!");
        return;
    }

    let price = Number(prompt("Введіть ціну товару (грн):"));
    let quantity = Number(prompt("Введіть кількість одиниць товару:"));

    if (price > 0 && quantity > 0) {
        let totalCost = price * quantity;
        alert("Товар: " + itemName + "\nЦіна: " + price + " грн\nКількість: " + quantity + "\nЗагальна вартість: " + totalCost + " грн");
    } else {
        alert("Помилка! Ціна та кількість повинні бути додатними числами.");
    }
}

function bookService() {
    let clientName = prompt("Введіть ваше ім'я для бронювання:");
    
    if (!clientName) {
        alert("Бронювання перервано.");
        return;
    }

    let service = prompt("Виберіть послугу (наприклад: Консультація, Верстка сайту):");
    
    if (!service) {
        alert("Бронювання перервано.");
        return;
    }

    let hours = Number(prompt("Введіть кількість годин:"));
    
    if (hours > 0) {
        const ratePerHour = 400;
        let total = hours * ratePerHour;
        
        let confirmBooking = confirm("Послуга: " + service + "\nКлієнт: " + clientName + "\nГодин: " + hours + "\nДо сплати: " + total + " грн.\n\nПідтверджуєте бронювання?");
        
        if (confirmBooking) {
            alert("Успіх! Бронювання успішно оформлено.");
        } else {
            alert("Бронювання скасовано користувачем.");
        }
    } else {
        alert("Помилка! Кількість годин повинна бути додатним числом.");
    }
}
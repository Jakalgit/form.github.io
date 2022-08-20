//Оплата
const $type_pay = document.querySelector('#type-pay')

//Ввод почты
const $your_email = document.querySelector('#your-email')

//Загрузка
const $loading = document.querySelector('#loading')

//Способы оплаты
const $up_pay = document.querySelector('#up-var')
const $middle_pay = document.querySelector('#middle-var')
const $down_pay = document.querySelector('#down-var')

//Кнопки "Продолжить"
const $proceed_button1 = document.querySelector('#proceed1')
const $proceed_button2 = document.querySelector('#proceed2')

//Инпут почты
const $input = document.querySelector('#email')

let isSelected = false
let currentType = ''

$your_email.style.display = "none"
$loading.style.display = "none"

// Способы оплаты
$up_pay.onclick = () => {
    $up_pay.classList.toggle('active-var')

    $middle_pay.classList.remove('active-var')
    $down_pay.classList.remove('active-var')

    selectedType($up_pay, '1')
}

$middle_pay.onclick = () => {
    $middle_pay.classList.toggle('active-var')

    $up_pay.classList.remove('active-var')
    $down_pay.classList.remove('active-var')

    selectedType($middle_pay, '2')
}

$down_pay.onclick = () => {
    $down_pay.classList.toggle('active-var')

    $up_pay.classList.remove('active-var')
    $middle_pay.classList.remove('active-var')

    selectedType($down_pay, '3')
}

//Продолжить 1
$proceed_button1.onclick = () => {
    if (isSelected) {
        $type_pay.classList.add('in-fade')

        setTimeout(() => {
            $type_pay.style.display = "none"
            $type_pay.classList.remove('in-fade')

            $your_email.classList.add('out-fade')
            $your_email.style.display = "block"
        }, 250)

        insertTypePay()
    }
}

//Продолжить 2
$proceed_button2.onclick = () => {
    const info = document.querySelector('#info')
    const form = document.querySelector('#form')

    info.classList.add('in-fade')

    setTimeout(() => {
        info.style.display = "none"

        form.style.alignItems = "center"
        form.style.justifyContent = "center"

        $loading.style.display = "block"
        $loading.classList.add('rotate')
    }, 250)
}

//Слушатель изменения
$input.onchange = () => {
    if ($input.value) {
        if (!$input.classList.contains('email-change')) {
            $input.classList.add('email-change')
        }
    } else {
        $input.classList.remove('email-change')
    }
}

function insertTypePay() {
    const $type = document.querySelector('#type')

    if (currentType === '1') {
        $type.innerHTML = `<img src="../img/bankcard.png" alt="*" class="image-type">
                           <p class="var-text">Банковская карта</p>`
    } else if (currentType === '2') {
        $type.innerHTML = `<img src="../img/qiwi.png" alt="*" class="image-type">
                           <p class="var-text">QIWI</p>`
    } else {
        $type.innerHTML = `<img src="../img/money.png" alt="*" class="image-type">
                           <p class="var-text">Юmoney</p>`
    }
}

function selectedType(domElement, type) {
    isSelected = domElement.classList.contains('active-var')
    if (isSelected) {
        currentType = type
        $proceed_button1.classList.add('active-proceed')
    } else {
        currentType = ''
        $proceed_button1.classList.remove('active-proceed')
    }
}
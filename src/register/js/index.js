import Customer from './Customer.js'

const customer = new Customer()

const createPhoneMask = () => {
    $('#phone').on('input', function () {
        const { value } = this

        const phone = value
            // Digits only
            .replace(/\D/g, "")
            // Inserts parentheses in the first two digits
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            // Inserts a hyphen between the fourth and fifth digits
            .replace(/(\d)(\d{4})$/, "$1-$2")

        $('#phone').val(phone)
        // Sets maximum characters
        // 15 is equal to the number of characters: (99) 99999-9999
        $('#phone').attr('maxlength', '15')
    })
}

const createCepMask = () => {
    $('#cep').on('input', function () {
        const { value } = this

        const cep = value
            // Digits only
            .replace(/\D/g, "")
            // Inserts a hyphen between the fifth and sixth digits
            .replace(/(\d)(\d{3})$/, "$1-$2")

        $('#cep').val(cep)
        // Sets maximum characters
        // 9 is equal to the number of characters: 99999-999
        $('#cep').attr('maxlength', '9')
    })
}

const showErrorMessage = (inputName, message) => {
    $(`#${inputName}`).css('borderColor', '#ff5555')
    $(`#${inputName}-message`).css('color', '#ff5555')
    $(`#${inputName}-message`).text(message)
}

const hideErrorMessage = inputName => {
    $(`#${inputName}`).on('focus', function () {
        $(`#${inputName}`).css('borderColor', '')
        $(`#${inputName}-message`).text('')
    })
}

const setName = () => {
    $('#name').on('blur', function () {
        const { value, name } = this
        const success = customer.setName(value)
        const message = 'Nome inválido'
        if (!success) showErrorMessage(name, message)
        hideErrorMessage(name)
    })
}

const getName = () => {
    $('#name').on('blur', function () {
        const name = customer.getName()
        // Passar para o db
    })
}

const setPhone = () => {
    createPhoneMask()
    $('#phone').on('blur', function () {
        const { value, name } = this
        const success = customer.setPhone(value)
        const message = 'Telefone inválido'
        if (!success) showErrorMessage(name, message)
        hideErrorMessage(name)
    })
}

const getPhone = () => {
    $('#phone').on('blur', function () {
        const phone = customer.getPhone()
        // Passar para o db
    })
}

const setAddress = () => {
    $('#address').on('blur', function () {
        const { value, name } = this
        const success = customer.setAddress(value)
        const message = 'Endereço inválido'
        if (!success) showErrorMessage(name, message)
        hideErrorMessage(name)
    })
}

const getAddress = () => {
    $('#address').on('blur', function () {
        const address = customer.getAddress()
        // Passar para o db
    })
}

const setNumber = () => {
    $('#number').on('blur', function () {
        const { value, name } = this
        const success = customer.setNumber(value)
        const message = 'Número inválido'
        if (!success) showErrorMessage(name, message)
        hideErrorMessage(name)
    })
}

const getNumber = () => {
    $('#number').on('blur', function () {
        const number = customer.getNumber()
        // Passar para o db
    })
}

const setDistrict = () => {
    $('#district').on('blur', function () {
        const { value, name } = this
        const success = customer.setDistrict(value)
        const message = 'Bairro inválido'
        if (!success) showErrorMessage(name, message)
        hideErrorMessage(name)
    })
}

const getDistrict = () => {
    $('#district').on('blur', function () {
        const district = customer.getDistrict()
        // Passar para o db
    })
}

const setCep = () => {
    createCepMask()
    $('#cep').on('blur', function () {
        const { value, name } = this
        const success = customer.setCep(value)
        const message = 'CEP inválido'
        if (!success) showErrorMessage(name, message)
        hideErrorMessage(name)
    })
}

const getCep = () => {
    $('#cep').on('blur', function () {
        const cep = customer.getCep()
        // Passar para o db
    })
}

const main = () => {
    setName()
    getName()
    setPhone()
    getPhone()
    setAddress()
    getAddress()
    setNumber()
    getNumber()
    setDistrict()
    getDistrict()
    setCep()
    getCep()
}

main()
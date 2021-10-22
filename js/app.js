import Customer from './Customer.js'

const customer = new Customer()

const getCustomerInfo = () => {
    const name = $('#name').val()
    const phone = $('#phone').val()
    const address = $('#address').val()
    const number = $('#number').val()
    const district = $('#district').val()
    const cep = $('#cep').val()

    return { name, phone, address, number, district, cep }
}

const createPhoneMask = () => {
    $('#phone').on('keyup', () => {
        const { phone } = getCustomerInfo()

        const formattedPhone = phone
            // Digits only
            .replace(/\D/g, "")
            // Inserts parentheses in the first two digits
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            // Inserts a hyphen between the fourth and fifth digits
            .replace(/(\d)(\d{4})$/, "$1-$2")

        $('#phone').val(formattedPhone)
        // Sets maximum characters
        // 15 is equal to the number of characters: (99) 99999-9999
        $('#phone').attr('maxlength', '15')
    })
}

const createCepMask = () => {
    $('#cep').on('keyup', () => {
        const { cep } = getCustomerInfo()

        const formattedCep = cep
            // Digits only
            .replace(/\D/g, "")
            // Inserts a hyphen between the fifth and sixth digits
            .replace(/(\d)(\d{3})$/, "$1-$2")

        $('#cep').val(formattedCep)
        // Sets maximum characters
        // 9 is equal to the number of characters: 99999-999
        $('#cep').attr('maxlength', '9')
    })
}

const removeInputBorderColor = (input) => {
    $(`#${input}`).on('focus', () => {
        $(`#${input}`).css('borderColor', '')
        $(`#${input}-message`).text('')
    })
}

const setName = () => {
    $('#name').on('change', () => {
        const { name } = getCustomerInfo()
        const success = customer.setName(name)
        if (!success) {
            $('#name').css('borderColor', 'red')
            $('#name-message').text('Unable to change phone')
            $('#name-message').css('color', 'red')
        }

        removeInputBorderColor('name')
    })
}

const getName = () => {
    $('#name').on('change', () => {
        const name = customer.getName()
        // Passar para o db
    })
}

const setPhone = () => {
    createPhoneMask()
    $('#phone').on('change', () => {
        const { phone } = getCustomerInfo()
        const success = customer.setPhone(phone)
        if (!success) {
            $('#phone').css('borderColor', 'red')
            $('#phone-message').text('Unable to change phone')
            $('#phone-message').css('color', 'red')
        }

        removeInputBorderColor('phone')
    })
}

const getPhone = () => {
    $('#phone').on('change', () => {
        const phone = customer.getPhone()
        // Passar para o db
    })
}

const setAddress = () => {
    $('#address').on('change', () => {
        const { address } = getCustomerInfo()
        const success = customer.setAddress(address)
        if (!success) {
            $('#address').css('borderColor', 'red')
            $('#address-message').text('Unable to change address')
            $('#address-message').css('color', 'red')
        }

        removeInputBorderColor('address')
    })
}

const getAddress = () => {
    $('#address').on('change', () => {
        const address = customer.getAddress()
        // Passar para o db
    })
}

const setNumber = () => {
    $('#number').on('change', () => {
        const { number } = getCustomerInfo()
        const success = customer.setNumber(number)
        if (!success) {
            $('#number').css('borderColor', 'red')
            $('#number-message').text('Unable to change number')
            $('#number-message').css('color', 'red')
        }

        removeInputBorderColor('number')
    })
}

const getNumber = () => {
    $('#number').on('change', () => {
        const number = customer.getNumber()
        // Passar para o db
    })
}

const setDistrict = () => {
    $('#district').on('change', () => {
        const { district } = getCustomerInfo()
        const success = customer.setDistrict(district)
        if (!success) {
            $('#district').css('borderColor', 'red')
            $('#district-message').text('Unable to change district')
            $('#district-message').css('color', 'red')
        }

        removeInputBorderColor('district')
    })
}

const getDistrict = () => {
    $('#district').on('change', () => {
        const district = customer.getDistrict()
        // Passar para o db
    })
}

const setCep = () => {
    createCepMask()
    $('#cep').on('change', () => {
        const { cep } = getCustomerInfo()
        const success = customer.setCep(cep)
        if (!success) {
            $('#cep').css('borderColor', 'red')
            $('#cep-message').text('Unable to change cep')
            $('#cep-message').css('color', 'red')
        }

        removeInputBorderColor('cep')
    })
}

const getCep = () => {
    $('#cep').on('change', () => {
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
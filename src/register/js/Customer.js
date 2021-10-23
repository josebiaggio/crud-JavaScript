export default function Customer() {
    this.name
    this.phone 
    this.address
    this.number
    this.district
    this.cep

    this.getName = function () {
        return this.name
    }

    this.setName = function (name) {
        // This pattern only allows letters
        const pattern = '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'
        const nameIsValid = name.match(pattern)

        if(nameIsValid) {
            const [ validName ] = [ ...nameIsValid ] 
            this.name = validName
            return true
        } else {
            return false
        }
    }

    this.getPhone = function () {
        return this.phone
    }

    this.setPhone = function (phone) {
        // Landline has 14 characters: (99) 9999-9999
        // Cell phone has 15 characters: (99) 99999-9999
        // Remembering that "(", ")", "-" and " " are counted
        const isLandline = phone.length === 14
        const isCellphone = phone.length === 15
        if(isLandline || isCellphone) {
            this.phone = phone
            return true
        } else {
            return false
        }
    }

    this.getAddress = function () {
        return this.address
    }

    this.setAddress = function (address) {
        // This pattern only allows letters and numbers
        const pattern = "^[ 0-9a-zA-Zàèìòùáéíóúâêîôûãõ\b]+$"
        const addressIsValid = address.match(pattern)

        if(addressIsValid) {
            const [ validAddress ] = [ ...addressIsValid ] 
            this.address = validAddress
            return true
        } else {
            return false
        }
    }

    this.getNumber = function () {
        return this.number
    }

    this.setNumber = function (number) {
        if(!isNaN(number)) {
            this.number = number
            return true
        } else {
            return false
        }
    }

    this.getDistrict = function () {
        return this.district
    }

    this.setDistrict = function (district) {
        // This pattern only allows letters
        const pattern = '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'
        const districtIsValid = district.match(pattern)

        if(districtIsValid) {
            const [ validDistrict ] = [ ...districtIsValid ] 
            this.district = validDistrict
            return true
        } else {
            return false
        }
    }

    this.getCep = function () {
        return this.cep
    }

    this.setCep = function (cep) {
        const cepIsValid = cep.length === 9
        if(cepIsValid) {
            this.cep = cepIsValid
            return true
        } else {
            return false
        }
    }
}
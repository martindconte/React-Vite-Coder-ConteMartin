import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,
            phone,
            email
        }

        const userValid = Object.values(userData).some(dato => dato === '')

        if(userValid) return setError(true)
        onConfirm(userData)
    }

    return (
        <>
            
            {error ? <p>TODOS LOS DATOS SON OBLIGATORIOS</p> : null}

            <form noValidate onSubmit={handleConfirm}>
                <label htmlFor="name">Nombre</label>
                <input
                    required
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Ingrese su nombre"
                    onChange={ ( { target } ) => setName(target.value.trim())  }
                />
                <label htmlFor="phone">Telefono</label>
                <input
                    required
                    id="phone"
                    type="number"
                    min="0"
                    value={phone}
                    placeholder="Ingrese un numero de contacto"
                    onChange={ ( { target } ) => setPhone(target.value.trim())  }
                />
                <label htmlFor="email">e-mail</label>
                <input
                    required
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Ingrese un mail en donde recibira la informacion de su compra"
                    onChange={ ( { target } ) => setEmail(target.value.trim())  }
                />
                <button type="submit">CREAR PEDIDO</button>
            </form>
        </>
    )
}

export default CheckoutForm
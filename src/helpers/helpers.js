import Swal from 'sweetalert2'

export const sweetAlerta = async(data) => {
     

    Swal.fire({
        icon: (data.icon),
        title: (data.title),
        text: (data.text),
        footer: (data.footer)
    })
}


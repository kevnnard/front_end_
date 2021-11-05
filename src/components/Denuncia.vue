<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Denuncia</h2>

            <form v-on:submit.prevent="processDenuncia" >
                
                <input type="text" v-model="user.nombreCliente" placeholder="Nombre">
                <br>

                <input type="number" v-model="user.cedula" placeholder="Cédula *">
                <br>

                <input type="text" v-model="user.ciudad" placeholder="Ciudad *">
                <br>

                <select class="dropDownCentroOpciones" v-model="user.idcentro">
                    <option selected disabled>Centros de Atención</option>
                    <option v-for="center in centers" :key="center.idcentro" :value="center.idcentro">{{center.nombre}} : {{center.direccion}} </option>
                </select>
                <br>

                <textarea type="text-Area" v-model="user.mensaje" placeholder="Escribe tu denuncia *">
                </textarea>
                <br>

                <button type="submit">Denuncia</button>
            </form>
        </div>

    </div>

</template>




<script>
import axios from 'axios';

export default {
    name: "Denuncia",

    data: function(){
        return {
            user: {
                nombreCliente: "",
                cedula: "",
                ciudad: "",
                idcentro: "",
                mensaje: ""
                //lastChangeDate: (new Date()).toJSON().toString(),
            },
            center: [],
            centers: []
        }
    },

    methods: {
        processDenuncia: function(){
            axios.post(
                "https://misiontic-2021-p12-g2.herokuapp.com/solicitud/create/", 
                this.user,  
                {headers: {}}
            )

                .then((result) => {
                    alert("Denuncia registrada")
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");  
                });
        },

        getCentrosList: async function(){
            axios.get(
                "https://misiontic-2021-p12-g2.herokuapp.com/centro/get/",
                {headers: {}}
            )
            .then((result) =>{
                this.centers = result.data;
            })
            .catch((error) => {
                console.log(error)
                alert("Error en centros de atención");
            })
        }
    },
    created: async function(){
        this.getCentrosList();
    }
}
</script>






<style>

    .signUp_user{
        margin: 40px 0;
    }
    .container_signUp_user {
        border: 3px solid  #5b06a0;
        border-radius: 10px;
        width: 50%;
    }
    @media (max-width: 768px) {
        .container_signUp_user {
            width: 90%;
        }
    }

    .signUp_user h2{
        color: #5b06a0;

    }

    .signUp_user form{
        width: 95%;
        
    }

    .signUp_user input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #5b06a0;
    }

    .signUp_user button{
        width: 100%;
        height: 40px;
        color: #E5E7E9;
        background: #5b06a0;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }

    .signUp_user button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #5b06a0;
    }

    textarea {
        width: 100%;
    }

    .dropDownCentroOpciones{
        width: 100%;
        width: 100%;
        height: 40px;
        border: 1px solid #5b06a0;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }


</style>
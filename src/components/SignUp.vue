<template>

    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>

            <form v-on:submit.prevent="processSignUp" >
                <input type="text" v-model="user.username" placeholder="Username *">
                <br>
                
                <input type="password" v-model="user.password" placeholder="Password *">
                <br>
                
                <input type="text" v-model="user.nombre" placeholder="Nombre *">
                <br>

                <input type="email" v-model="user.email" placeholder="Email *">
                <br>

                <input type="number" v-model="user.cedula" placeholder="Cédula *">
                <br>

                <input type="text" v-model="user.direccion" placeholder="Dirección *">
                <br>

                <input type="number" v-model="user.telefono" placeholder="Teléfono">
                <br>

                <button type="submit">Registrarse</button>
            </form>
        </div>

    </div>

</template>




<script>
import axios from 'axios';

export default {
    name: "SignUp",

    data: function(){
        return {
            user: {
                cedula: "",
                username: "",
                password: "",
                nombre: "",
                direccion:"",
                email: "",
                telefono: ""
                //lastChangeDate: (new Date()).toJSON().toString(),
            }
        }
    },

    methods: {
        processSignUp: function(){
            axios.post(
                "https://misiontic-2021-p12-g2.herokuapp.com/user/", 
                this.user,  
                {headers: {}}
            )
                .then((result) => {
                    let dataSignUp = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    
                    this.$emit('completedSignUp', dataSignUp)
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");  
                });
        }
    }
}
</script>






<style>
 .signUp_user{
        background-color: white;
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_signUp_user {
        border: 3px solid  #5b06a0;
        border-radius: 10px;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 4rem;
        margin-top: 1rem;
    }

    .signUp_user h2{
        color: #5b06a0;

    }

    .signUp_user form{
        width: 70%;
        
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
</style>
<template>
    <v-container>
        <v-layer>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-form @submit.prevent="onSignup">

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                v-model="email"
                                                name="email"
                                                label="Email"
                                                id="email"
                                                type="email"
                                                required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                v-model="password"
                                                name="password"
                                                label="Password"
                                                id="password"
                                                type="password"
                                                required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                v-model="confirm_password"
                                                name="confirm_password"
                                                label="Confirmation Password"
                                                id="confirm-password"
                                                type="password"
                                                :rules="[comparePasswords]"
                                                required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn
                                        type="submit">SignUp</v-btn>
                                    </v-flex>
                                </v-layout>

                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layer>
    </v-container>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return{
                email: '',
                password: '',
                confirm_password: '',
            }
        },
        computed: {
            comparePasswords() {
                return this.password !== this.confirm_password ? 'Password do not match' : '';
            },
            user() {
                return this.$store.getters.user
            }
        },
        watch: {
            user(value){
                if(value !== null && value !==undefined){
                    this.$router.push('/');
                }
            }
        },
        methods: {
            onSignup() {
                return this.$store.dispatch('signUserUp', {email: this.email, password: this.password});
            }
        }
    }
</script>

<style scoped>

</style>
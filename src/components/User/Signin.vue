<template>
    <v-container>
        <v-layer>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-form @submit.prevent="onSignin">

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
                                        <v-btn
                                                type="submit">SigIn</v-btn>
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
        name: "Signin",
        data() {
            return{
                email: '',
                password: '',
            }
        },
        computed: {
            user() {
                return this.$store.getters.user
            }
        },
        watch: {
            user(value){
                if(value !== null && value !== undefined){
                    this.$router.push('/');
                }
            }
        },
        methods: {
            onSignin() {
                return this.$store.dispatch('signUserin', {email: this.email, password: this.password});
            }
        }
    }
</script>

<style scoped>

</style>
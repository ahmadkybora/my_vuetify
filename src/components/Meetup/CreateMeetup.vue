<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4>Create a New meetup</h4>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup()">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    v-model="title"
                                    name="title"
                                    label="Title"
                                    id="title"
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    v-model="location"
                                    name="location"
                                    label="Location"
                                    id="location"
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    v-model="imageUrl"
                                    name="imageUrl"
                                    label="ImageUrl"
                                    id="image-Url"
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="150px">
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    v-model="description"
                                    name="description"
                                    label="Description"
                                    id="description"
                                    multi-line
                                    required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h4>Choose a Date & Time</h4>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-date-picker v-model="date"></v-date-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout row class="mb-2">
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker v-model="time" format="24hr"></v-time-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn class="primary"
                                   :disabled="!formIsValid"
                                   type="submit">Create Meetup
                            </v-btn>
                        </v-flex>
                    </v-layout>

                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "CreateMeetup",
        data() {
            return {
                title: '',
                location: '',
                imageUrl: '',
                description: '',
                date: new Date(),
                time: new Date(),
            }
        },
        computed: {
            formIsValid() {
                return this.title !== '' &&
                    this.location !== '' &&
                    this.imageUrl !== '' &&
                    this.description !== ''
            },
            submittableDateTime() {
                const date = new Date(this.date);
                if (typeof this.time === 'string') {
                    let hours = this.time.match(/^(\d+)/)[1];
                    const minutes    = this.time.match(/:(\d+)/)[1];
                    date.setHours(hours);
                    date.setMinutes(minutes);
                } else {
                    date.setHours(this.time.getHours());
                    date.setMinutes(this.time.getMinutes());
                }
                return date;
            }
        },
        methods: {
            onCreateMeetup() {
                if (!this.formIsValid) {
                    return
                }
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    date: this.submittableDateTime(),
                };
                this.$store.dispatch('createMeetup', meetupData);
                this.$router.push('/meetups');
            }
        }
    }
</script>

<style scoped>

</style>
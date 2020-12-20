<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h6 class="primary--text">{{ meetup.title }}</h6>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
                        </template>
                    </v-card-title>
                    <v-card-media
                            :src="meetup.imageUrl"
                            height="400px"
                    ></v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ meetup.date | date }} - {{ meetup.location }}</div>
                        <div>{{ meetup.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Meetup",
        props: ['id'],
        computed: {
            meetup() {
                return this.$store.getters.loadedMeetup(this.id)
            },
            userIsAthenticated() {
                return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
            },
            userIsCreator() {
                if(!this.userIsAthenticated) {
                    return false;
                }
                return this.$store.getters.user.id === this.meetup.creatorId;
            }
        }
    }
</script>

<style scoped>

</style>
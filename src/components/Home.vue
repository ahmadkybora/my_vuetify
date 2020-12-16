<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-sm-right">
                <v-btn large dark class="primary" router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left">
                <v-btn large  dark class="primary" router to="/meetups/new">Origanize Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item
                            v-for="meetup in meetups"
                            :src="meetup.imageUrl"
                            :key="meetup.id"
                            @click="onLoadMeetup(meetup.id)">
                        <div class="title">
                            {{ meetup.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-sm-right">
                <p>join our me </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                meetups: [
                    {imageUrl: '/1', id: '/1', title: '/1'},
                    {imageUrl: '/2', id: '/2', title: '/2'},
                    {imageUrl: '/3', id: '/3', title: '/3'},
                    {imageUrl: '/4', id: '/4', title: '/4'},
                ]
            }
        },
        methods: {
            onLoadMeetup(id){
                this.$router.push('/meetups/' + id);
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
        padding: 20px;
    }
</style>
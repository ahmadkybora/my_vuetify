<template>
    <v-dialog width="350px" presistent>
        <v-btn floating accent slot="activator">
            <v-icon>Edit</v-icon>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>Edit Meetup</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                    v-model="title"
                                    name="title"
                                    label="Title"
                                    id="title"
                                    required>
                            </v-text-field>
                            <v-text-field
                                    v-model="description"
                                    name="description"
                                    label="Description"
                                    id="description"
                                    multi-line
                                    required>
                            </v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn text class="blue--text darken-1">Close</v-btn>
                            <v-btn text class="blue--text darken-1">Save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props:['meetup'],
        name: "EditMeetupDetailsDialog",
        data() {
            return {
                editedTitle: this.meetup.title,
                editedDescription: this.meetup.description,
            }
        }
    }
</script>

<style scoped>

</style>
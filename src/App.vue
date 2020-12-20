<template>
    <v-app>

        <v-toolbar dark class="primary">
            <v-app-bar-nav-icon
                    @click.stop="sideNav = !sideNav"
                    class="hidden-sm-and-up">
            </v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">My App</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">

                <v-btn
                       text
                       v-if="userIsAthenticated"
                       @click="onLogout()">
                    <v-icon dark left>exit_to_app</v-icon>
                    Logout
                </v-btn>

                <v-btn
                        text
                        v-for="item in menuItems"
                        :key="item.title"
                        :to="item.link">
                    <v-icon dark left>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>

            </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer temporary v-model="sideNav">
            <v-list>
                <v-list-item
                        v-for="item in menuItems"
                        :key="item.title"
                        :to="item.link">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>{{ item.title }}</v-list-item-content>
                </v-list-item>

                <v-list-item v-if="userIsAthenticated" @click="onLogout()">
                    <v-list-item-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>Logout</v-list-item-content>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <main>
            <router-view/>
        </main>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                sideNav: false,
            }
        },
        computed: {
            menuItems() {
                let menuItems = [
                    {icon: 'face', title: 'Sign up', link: '/signup'},
                    {icon: 'lock_open', title: 'Sign in', link: '/signin'},
                ];
                if(this.userIsAthenticated) {
                    menuItems = [
                        {icon: 'account-check-outline', title: 'view Meetups', link: '/meetups'},
                        {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
                        {icon: 'person', title: 'profile', link: '/profile'},
                    ];
                }
                return menuItems;
            },
            userIsAthenticated () {
                return this.$store.getters.user !== null && this.$store.getters.user !== undefined
            }
        },
        methods: {
            onLogout() {
                this.$store.dispatch('logout');
            }
        }
    };
</script>

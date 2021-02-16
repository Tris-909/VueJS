<template>
    <div>
        <app-header />
        <app-conatiner>
            <nav-bar 
                v-on:choose-active-page="chooseActivePage"
                :activePage="this.activePage" 
            />
            <list-resources 
                v-if="activePage == 'stored-resources'"
                v-on:delete-a-resource="deleteAResources"
            />
            <add-resources 
                v-else
                v-on:add-new-resources="addResource"
            />
        </app-conatiner>
    </div>
</template>

<script>
import Header from './Components/TheHeader';
import Container from './Components/Container';
import NavBar from './Components/NavBar'; 
import ListResources from './Components/ListResources';
import AddResources from './Components/InputResources';

export default {
    data() {
        return {
            activePage: 'stored-resources',
            data: [
                {
                    id: 0,
                    name: 'Google',
                    description: 'All you need to search are here',
                    link: 'https://www.google.com/'
                },
                {
                    id: 1,
                    name: 'Udemy',
                    description: 'Where you can learn from home and also get judged :)',
                    link: 'https://www.udemy.com/'
                }
            ]
        }
    },
    methods: {
        chooseActivePage(value) {
            this.activePage = value;
        },
        addResource(newResources) {
            newResources.id = this.data[this.data.length-1].id + 1;
            this.data.push(newResources);
            this.chooseActivePage('stored-resources');
        },
        deleteAResources(id) {
            let position;
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].id == id) {
                    position = i;
                }
            }

            this.data.splice(position, 1);
        }
    },
    provide() {
        return {
            dataList: this.data
        }
    },
    components: {
        'app-header': Header,
        'app-conatiner': Container,
        'nav-bar': NavBar,
        'list-resources': ListResources,
        'add-resources': AddResources
    }
}
</script>
